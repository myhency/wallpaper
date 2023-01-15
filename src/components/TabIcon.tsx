import { Badge } from "./Badge";
import { Icon } from "./Icons";
import { Ionicons } from "@expo/vector-icons";

interface Props {
    iconName: keyof typeof Ionicons.glyphMap;
    iconColor: string;
    visibleBadge?: boolean;
}

export const TabIcon = ({ iconName, iconColor, visibleBadge }: Props) => {
    if (visibleBadge) {
        return (
            <Badge fontSize={10}>
                <Icon name={iconName} size={20} color={iconColor} />
            </Badge>
        );
    }

    return <Icon name={iconName} size={20} color={iconColor} />;
};
