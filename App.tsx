import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import { RootStackNavigation } from "./src/navigations/RootStackNavigation";
import store from "./src/store/store";

export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <RootStackNavigation />
            </Provider>
        </NavigationContainer>
    );
}
