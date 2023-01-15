import { useWindowDimensions, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Spacer } from "../Spacer";
import { HeaderIcon } from "./HeaderButton";
import { HeaderGroup } from "./HeaderGroup";
import { HeaderTitle } from "./HeaderTitle";

interface Props {
    children: React.ReactNode;
}

export const Header = ({ children }: Props) => {
    const insets = useSafeAreaInsets();
    const { width } = useWindowDimensions();

    return (
        <View style={{ paddingTop: insets.top }}>
            <View
                style={{
                    width,
                    flexDirection: "row",
                    height: 56,
                    borderBottomColor: "gray",
                    borderBottomWidth: 1,
                    alignItems: "center",
                }}
            >
                <Spacer horizontal size={12} />
                <View
                    style={{
                        flex: 1,
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    {children}
                </View>
            </View>
        </View>
    );
};

Header.Title = HeaderTitle;
Header.Icon = HeaderIcon;
Header.Group = HeaderGroup;
