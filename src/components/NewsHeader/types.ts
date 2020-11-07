export interface NewsHeaderProps {
    headerTitle: string
    horizontalPadding?: number
    showRightMoreButton?: boolean
    onPressMoreButton: () => Promise<void> | void
}