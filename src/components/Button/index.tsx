import React, { FC } from 'react';
import { BaseToucableOpacity } from './styled';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ children, rounded, customStyles, onPress }) => {
    return (
        <BaseToucableOpacity
            style={customStyles}
            rounded={rounded}
            onPress={onPress}
        >
            {children}
        </BaseToucableOpacity>
    );
};

export default Button;
