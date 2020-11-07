import styled from 'styled-components/native'
import { BaseToucableOpacityProps, ButtonTextProps } from './types'

export const BaseToucableOpacity = styled.TouchableOpacity<BaseToucableOpacityProps>`
    justify-content: center;
    align-items: center;

    padding-left: 5px;
    padding-right: 5px;
    padding-top: 8px;
    padding-bottom: 8px;

    border-style: solid;
    border-radius: 3px;

    background-color: #000000;
`

export const ButtonText = styled.Text<ButtonTextProps>`
    color: ${props => {
        let colorText = '';
        switch (props.theme) {
            case 'base':
                colorText = 'white';
                break;
            case 'highlighted':
                colorText = 'yellow';
                break;
            default:
                colorText = 'white';
                break;
        }
        return colorText; 
    }};
    font-size: ${props => `${props.fontSize}px`};
`