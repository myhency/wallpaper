import { Ionicons } from "@expo/vector-icons";

import { Button } from "../Button";
import { Icon } from "../Icons";

interface Props {
    iconName: keyof typeof Ionicons.glyphMap;
    onPress: () => void;
}

export const HeaderIcon = ({ iconName, onPress }: Props) => {
    return (
        <Button onPress={onPress}>
            <Icon name={iconName} size={20} color={"black"} />
        </Button>
    );
};
