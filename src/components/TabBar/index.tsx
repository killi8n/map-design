import React from 'react'
import * as Components from './styled'
import { TabBarProps } from './types'

const TabBar: React.FC<TabBarProps> = ({ children }) => {
    return (
        <Components.Wrapper
            style={{
                shadowColor: '#000000',
                shadowOffset: { width: 1, height: 1 },
                shadowOpacity: 0.2,
                shadowRadius: 3,
                elevation: 5
            }}
        >
            {children}
        </Components.Wrapper>
    )
}

export default TabBar

