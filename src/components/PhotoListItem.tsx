import { useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { Animated, useWindowDimensions } from "react-native";
import { Button } from "./Button";
import { RemoteImage } from "./RemoteImage";

interface Props {
    url: string;
}

export const PhotoListItem = ({ url }: Props) => {
    const { width } = useWindowDimensions();
    const navigation = useNavigation();
    const [animValue] = useState(new Animated.Value(0));

    const onPressItem = useCallback(() => {
        navigation.navigate("ImageDetail", { url });
    }, []);
    const onPressIn = useCallback(() => {
        Animated.timing(animValue, {
            toValue: 1,
            duration: 100,
            useNativeDriver: true,
        }).start();
    }, []);
    const onPressOut = useCallback(() => {
        Animated.timing(animValue, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
        }).start();
    }, []);
    const scale = animValue.interpolate({
        inputRange: [0, 1],
        outputRange: [1, 0.9],
    });

    return (
        <Button
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            onPress={onPressItem}
            style={{ paddingHorizontal: 20, paddingVertical: 10 }}
        >
            <Animated.View style={{ transform: [{ scale }] }}>
                <RemoteImage
                    url={url}
                    width={width - 40}
                    height={width * 1.2}
                />
            </Animated.View>
        </Button>
    );
};
