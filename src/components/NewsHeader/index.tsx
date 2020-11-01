import React, { FC } from 'react';
import { MoreButton, MoreText, TitleLine, Wrapper, TitleText } from './styled';
import { NewsHeaderProps } from './types';

const NewsHeader: FC<NewsHeaderProps> = ({ horizontalPadding, headerTitle, onPressMoreButton }) => {
    return (
        <Wrapper horizontalPadding={horizontalPadding}>
            <TitleLine>
                <TitleText>{headerTitle}</TitleText>
                <MoreButton
                    onPress={onPressMoreButton}
                >
                    <MoreText>더보기</MoreText>
                </MoreButton>
            </TitleLine>
        </Wrapper>
    );
};

export default NewsHeader;