import { Dimensions } from 'react-native';
import styled from 'styled-components/native'

export const Wrapper = styled.TouchableOpacity<{ type: "billboard" | "hiphople" }>`
    width: 100%;
    flex-direction: row;
    align-items: ${props => props.type === "billboard" ? "center" : "flex-start"};
    margin-bottom: 12px;
`;

export const RankNumberText = styled.Text`
    margin-left: 10px;
    margin-right: 5px;
    font-weight: 800;
    font-size: 15px;
`;

export const NewsThumbnail = styled.Image<{ type: "billboard" | "hiphople" }>`
    width: 50px;
    height: 50px;
    border-radius: ${props => props.type === "billboard" ? '25px' : '3px'};
    margin-right: ${props => props.type === "hiphople" ? '4px' : '0px'};
`

export const MetaLine = styled.View<{ type: "billboard" | "hiphople" }>`
    flex-direction: column;
    justify-content: ${props => props.type === "billboard" ? "center" : "flex-start"};
    margin-left: ${props => props.type === "billboard" ? '5px' : '0px'};
`;

export const TitleText = styled.Text`
    margin-right: 5px;
    margin-bottom: 3px;
    font-size: 14px;
    font-weight: bold;
    width: ${Dimensions.get('window').width - 45 - 15 * 2 - 15 - 5}px;
`;

export const MetaText = styled.Text`
    font-size: 11px;
`;