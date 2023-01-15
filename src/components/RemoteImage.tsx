import { Image, StyleProp, ImageStyle } from "react-native";

interface Props {
    url: string;
    style?: StyleProp<ImageStyle>;
    width: number;
    height: number;
}

export const RemoteImage = ({ url, style, width, height }: Props) => {
    return <Image source={{ uri: url }} style={[style, { width, height }]} />;
};
