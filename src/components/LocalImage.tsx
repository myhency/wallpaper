import {
    Image,
    ImageSourcePropType,
    StyleProp,
    ImageStyle,
} from "react-native";

interface Props {
    localAsset: any;
    style?: StyleProp<ImageStyle>;
    width: number;
    height: number;
}

export const LocalImage = ({ localAsset, style, width, height }: Props) => {
    return <Image source={localAsset} style={[style, { width, height }]} />;
};
