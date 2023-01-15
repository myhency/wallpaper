import { Pressable, StyleProp, ViewStyle } from "react-native";

interface Props {
    style?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
    onPress: () => void;
    hitSlop?: { left: number; right: number; top: number; bottom: number };
    onPressIn?: () => void;
    onPressOut?: () => void;
}

export const Button = ({
    onPress,
    children,
    hitSlop,
    style,
    onPressIn,
    onPressOut,
}: Props) => {
    return (
        <Pressable
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            style={style}
            onPress={onPress}
            hitSlop={hitSlop ?? { left: 0, right: 0, top: 0, bottom: 0 }}
        >
            {children}
        </Pressable>
    );
};
