import styled from 'styled-components/native'

export const Wrapper = styled.View<{ horizontalPadding?: number }>`
    padding-left: ${props => `${props.horizontalPadding ?? 0}px`};
    padding-right: ${props => `${props.horizontalPadding ?? 0}px`};
`