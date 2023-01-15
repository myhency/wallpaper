import { View, Text, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { Header } from "../components/Header/Header";
import { PhotoListItem } from "../components/PhotoListItem";
import { Typography } from "../components/Typography";
import { IMAGE_LIST } from "../fake-data/pictures";
import { RootState } from "../store/store";

export const FavoriteImageListScreen = () => {
    const imageList = useSelector(
        (state: RootState) => state.favorite.favoriteList
    );
    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Group>
                    <Header.Title title="Favorite" />
                </Header.Group>
            </Header>
            <FlatList
                style={{
                    flex: 1,
                }}
                data={imageList}
                renderItem={({ item }) => <PhotoListItem url={item} />}
            />
        </View>
    );
};
