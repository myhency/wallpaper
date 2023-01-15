import { View } from "react-native";

interface Props {
    size: number;
    horizontal?: boolean;
}

export const Spacer = ({ size, horizontal }: Props) => {
    return horizontal ? (
        <View style={{ marginLeft: size }} />
    ) : (
        <View style={{ marginTop: size }} />
    );
};
