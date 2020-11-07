import React, { FC } from 'react';
import Text from '../Text'
import Button from '../Button';
import { TitleLine, Wrapper, TitleText } from './styled';
import { NewsHeaderProps } from './types';

const NewsHeader: FC<NewsHeaderProps> = ({ horizontalPadding, headerTitle, onPressMoreButton, showRightMoreButton }) => {
    return (
        <Wrapper horizontalPadding={horizontalPadding}>
            <TitleLine>
                <TitleText>{headerTitle}</TitleText>
                {showRightMoreButton && 
                    (
                        <Button
                            customStyles={{
                                marginLeft: 'auto'
                            }}
                            rounded
                        >
                            <Text
                                customStyles={{
                                    color: 'white',
                                    fontSize: 12,
                                    fontWeight: '600'
                                }}
                            >
                                더보기
                            </Text>
                        </Button>
                    )
                }
            </TitleLine>
        </Wrapper>
    );
};

export default NewsHeader;