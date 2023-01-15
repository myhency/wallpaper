import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ImageDetailScreen } from "../screens/ImageDetailScreen";
import { BottomTabNavigation } from "./BottomTabNavigation";

const Stack = createNativeStackNavigator();

export const RootStackNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="BottomTab" component={BottomTabNavigation} />
            <Stack.Screen name="ImageDetail" component={ImageDetailScreen} />
        </Stack.Navigator>
    );
};
