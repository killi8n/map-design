import React, { FC } from 'react';
import { BaseToucableOpacity, ButtonText } from './styled';
import { ButtonProps } from './types';

const Button: FC<ButtonProps> = ({ theme = 'base', buttonText, fontSize }) => {
    return (
        <BaseToucableOpacity>
            <ButtonText numberOfLines={0} theme={theme} fontSize={fontSize}>
                {buttonText}
            </ButtonText>
        </BaseToucableOpacity>
    );
};

export default Button;
