import React, { FC } from 'react';
import { NewsThumbnail, Wrapper, MetaLine, TitleText, MetaText, RankNumberText } from './styled';
import { NewsItemProps } from './types';

const NewsItem: FC<NewsItemProps> = ({ onPress, thumnailSource, title, type, subTitle, rankNumber }) => {
    return (
        <Wrapper
            onPress={onPress}
            type={type}
        >
            <NewsThumbnail type={type} source={thumnailSource} />
            {
                type === "billboard" && typeof rankNumber !== "undefined" && <RankNumberText>{rankNumber}</RankNumberText>
            }
            <MetaLine type={type}>
                <TitleText numberOfLines={1}>{title}</TitleText>
                <MetaText>
                    {subTitle}
                </MetaText>
            </MetaLine>
        </Wrapper>
    )
};

export default NewsItem;