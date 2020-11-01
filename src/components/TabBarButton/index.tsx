import React, { FC } from 'react'
import * as Components from './styled'
import { TabBarButtonProps } from './types';

const TabBarButton: FC<TabBarButtonProps> = ({ onPress, isActive, title }) => {
    return (
        <Components.TabBarButton onPress={onPress}>
            <Components.TabBarTitle isActive={isActive}>
                {title}
            </Components.TabBarTitle>
        </Components.TabBarButton>
    );
};

export default TabBarButton;