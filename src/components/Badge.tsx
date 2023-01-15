import { View } from "react-native";
import { Typography } from "./Typography";

interface Props {
    children: React.ReactNode;
    fontSize: number;
}

export const Badge = ({ children, fontSize }: Props) => {
    return (
        <View>
            {children}
            <View
                style={{
                    width: 16,
                    height: 16,
                    borderRadius: 8,
                    backgroundColor: "red",
                    position: "absolute",
                    right: -4,
                    top: -4,
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography fontSize={fontSize} color="white" />
            </View>
        </View>
    );
};
