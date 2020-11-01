import styled from 'styled-components/native'

export const Wrapper = styled.View<{ horizontalPadding?: number }>`
    padding-left: ${props => `${props.horizontalPadding ?? 0}px`};
    padding-right: ${props => `${props.horizontalPadding ?? 0}px`};
`

export const TitleLine = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 15px;
`;
export const TitleText = styled.Text`
    font-size: 18px;
    font-weight: 700;
`;
export const MoreButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    margin-left: auto;
    background-color: black;
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 3px;
    padding-bottom: 3px;
    border-style: solid;
    border-radius: 3px;
`;
export const MoreText = styled.Text`
    color: white;
    font-size: 12px;
    font-weight: 600;
`;