import styled from 'styled-components/native'
import { BaseToucableOpacityProps } from './types'

export const BaseToucableOpacity = styled.TouchableOpacity<BaseToucableOpacityProps>`
    justify-content: center;
    align-items: center;
    background-color: #000000;
    border-style: ${props => props.rounded && 'solid'};
    border-radius: ${props => props.rounded && '3px'};
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 3px;
    padding-bottom: 3px;
`
