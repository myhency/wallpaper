import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabIcon } from "../components/TabIcon";
import { FavoriteImageListScreen } from "../screens/FavoriteImageListScreen";
import { ImageListScreen } from "../screens/ImageListScreen";
import { Ionicons } from "@expo/vector-icons";

type IconName = keyof typeof Ionicons.glyphMap;

const Tabs = createBottomTabNavigator();

export const BottomTabNavigation = () => {
    return (
        <Tabs.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ color }) => {
                    const getIconName = (routeName: string): IconName => {
                        switch (routeName) {
                            case "ImageList":
                                return "home";
                            case "FavoriteImageList":
                                return "star";
                            default:
                                return "home";
                        }
                    };
                    return (
                        <TabIcon
                            iconName={getIconName(route.name)}
                            iconColor={color}
                        />
                    );
                },
            })}
        >
            <Tabs.Screen name="ImageList" component={ImageListScreen} />
            <Tabs.Screen
                name="FavoriteImageList"
                component={FavoriteImageListScreen}
            />
        </Tabs.Navigator>
    );
};
