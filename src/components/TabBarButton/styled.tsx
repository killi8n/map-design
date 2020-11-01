import styled from 'styled-components/native'

export const TabBarButton = styled.TouchableOpacity`
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 85px;
    background: #000000;
`;

export const TabBarTitle = styled.Text<{ isActive: boolean }>`
    text-align: center;
    margin-top: auto;
    margin-bottom: 20.5px;
    font-weight: ${(props) => (props.isActive ? '800' : '600')};
    font-size: 15px;
    color: ${(props) => (props.isActive ? 'yellow' : 'white')};
`;