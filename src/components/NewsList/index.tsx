import React, { FC } from 'react';
import { Wrapper } from './styled';
import { NewsListProps } from './types';

const NewsList: FC<NewsListProps> = ({ horizontalPadding, children }) => {
    return (
        <Wrapper horizontalPadding={horizontalPadding}>
            {children}
        </Wrapper>
    );
};

export default NewsList;