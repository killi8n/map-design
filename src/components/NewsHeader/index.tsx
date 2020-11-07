import React, { FC } from 'react';
import { TitleLine, Wrapper, TitleText } from './styled';
import { NewsHeaderProps } from './types';
import NewsSectionMoreButton from '../NewsSectionMoreButton';
import { View } from 'react-native';

const NewsHeader: FC<NewsHeaderProps> = ({ horizontalPadding, headerTitle, onPressMoreButton, showRightMoreButton }) => {
    return (
        <Wrapper horizontalPadding={horizontalPadding}>
            <TitleLine>
                <TitleText>{headerTitle}</TitleText>
                {showRightMoreButton && (
                    <View style={{ marginLeft: "auto" }}>
                        <NewsSectionMoreButton onPress={onPressMoreButton} />
                    </View>
                )}
            </TitleLine>
        </Wrapper>
    );
};

export default NewsHeader;