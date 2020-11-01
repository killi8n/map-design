export interface NewsHeaderProps {
    horizontalPadding?: number
    headerTitle: string
    onPressMoreButton: () => Promise<void> | void
}