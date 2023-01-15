import { useNavigation, useRoute } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { View, useWindowDimensions, ActivityIndicator } from "react-native";
import { Button } from "../components/Button";

import { Header } from "../components/Header/Header";
import { Icon } from "../components/Icons";
import { RemoteImage } from "../components/RemoteImage";
import { Typography } from "../components/Typography";
import { RootStackScreenProps } from "../navigations/types";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";
import { useDispatch, useSelector } from "react-redux";
import { onClickFavorite } from "../actions/favorite";
import { RootState } from "../store/store";

export const ImageDetailScreen = () => {
    const navigation = useNavigation();
    const route = useRoute<RootStackScreenProps<"ImageDetail">["route"]>();
    const [downloading, setDownloading] = useState(false);

    const dispatch = useDispatch();

    const onPressFavorite = useCallback(() => {
        dispatch(onClickFavorite(route.params.url));
    }, []);

    const onPressBack = useCallback(() => {
        navigation.goBack();
    }, []);

    /**
     * Download image to local storage
     * https://docs.expo.dev/versions/latest/sdk/filesystem/#usage
     */
    const onPressDownload = useCallback(async () => {
        setDownloading(true);
        const downloadResumable = FileSystem.createDownloadResumable(
            route.params.url,
            `${FileSystem.documentDirectory}${new Date().getMilliseconds()}.jpg`
        );

        try {
            const { uri } = (await downloadResumable.downloadAsync())!;
            console.log("Finished downloading to ", uri);

            const permissionResult = await MediaLibrary.getPermissionsAsync(
                true
            );
            console.log("permissionResult", permissionResult);
            if (permissionResult.status === "denied") {
                setDownloading(false);
                return;
            }
            if (permissionResult.status === "undetermined") {
                const requestResult =
                    await MediaLibrary.requestPermissionsAsync();
                console.log("requestResult", requestResult);
                if (requestResult.status === "denied") {
                    setDownloading(false);
                    return;
                }
            }

            const asset = await MediaLibrary.createAssetAsync(uri);
            const album = MediaLibrary.createAlbumAsync(
                "Download",
                asset,
                false
            );
            console.log("album", album);
        } catch (e) {
            console.error(e);
        }
        setDownloading(false);
    }, []);
    const { width } = useWindowDimensions();

    const isFavorite = useSelector((state: RootState) => {
        return state.favorite.favoriteList.includes(route.params.url);
    });

    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Group>
                    <Header.Icon iconName="arrow-back" onPress={onPressBack} />
                    <Header.Title title="Image Detail" />
                </Header.Group>
                <Header.Icon
                    iconName={isFavorite ? "heart" : "heart-outline"}
                    onPress={onPressFavorite}
                />
            </Header>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <RemoteImage
                    url={route.params.url}
                    width={width}
                    height={width * 1.5}
                />
                <Button onPress={onPressDownload} style={{ width: "100%" }}>
                    <View
                        style={{
                            paddingVertical: 12,
                            backgroundColor: "black",
                        }}
                    >
                        {downloading ? (
                            <View
                                style={{
                                    height: 52,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <ActivityIndicator />
                            </View>
                        ) : (
                            <View
                                style={{
                                    height: 52,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                <Typography color="white" fontSize={16}>
                                    Download
                                </Typography>
                                <Icon
                                    name={"download"}
                                    size={24}
                                    color={"white"}
                                />
                            </View>
                        )}
                    </View>
                </Button>
            </View>
        </View>
    );
};
