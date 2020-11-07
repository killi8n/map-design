import { StyleProp, ViewStyle } from 'react-native';

export interface ButtonProps {
    rounded?: boolean;
    customStyles?: StyleProp<ViewStyle>
    onPress?: () => Promise<void> | void
}

export interface BaseToucableOpacityProps {
    rounded?: boolean;
}
