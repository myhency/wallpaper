import { View } from "react-native";

interface Props {
    children?: React.ReactNode;
}

export const HeaderGroup = ({ children }: Props) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            {children}
        </View>
    );
};
