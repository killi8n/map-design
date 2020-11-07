import React, { FC } from 'react';
import { BaseToucableOpacity } from './styled';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ children, rounded, customStyles }) => {
    return (
        <BaseToucableOpacity
            style={customStyles}
            rounded={rounded}
        >
            {children}
        </BaseToucableOpacity>
    );
};

export default Button;
