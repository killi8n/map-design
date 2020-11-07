import React, { FC } from 'react';
import { BaseText } from './styled'
import { TextProps } from './types'

const Text: FC<TextProps> = ({ children, customStyles }) => {
    return (
        <BaseText style={customStyles}>
            {children}
        </BaseText>
    );
};

export default Text;