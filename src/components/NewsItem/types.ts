import { ImageSourcePropType } from "react-native";

export interface NewsItemProps {
    onPress: () => Promise<void> | void
    thumnailSource: ImageSourcePropType
    title: string
    subTitle: string
    type: "billboard" | "hiphople"
    rankNumber?: string
}