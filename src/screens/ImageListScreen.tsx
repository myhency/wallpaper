import { View, Text, FlatList } from "react-native";
import { Header } from "../components/Header/Header";
import { PhotoListItem } from "../components/PhotoListItem";
import { IMAGE_LIST } from "../fake-data/pictures";

export const ImageListScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <Header>
                <Header.Group>
                    <Header.Title title="Image List" />
                </Header.Group>
            </Header>
            <FlatList
                style={{
                    flex: 1,
                }}
                data={IMAGE_LIST}
                renderItem={({ item }) => <PhotoListItem url={item} />}
            />
        </View>
    );
};
