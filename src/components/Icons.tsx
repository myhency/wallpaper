import { Ionicons } from "@expo/vector-icons";

interface Props {
    name: keyof typeof Ionicons.glyphMap;
    size: number;
    color: string;
}

export const Icon = ({ name, size, color }: Props) => {
    return <Ionicons name={name} size={size} color={color} />;
};
