import React from 'react'
import TabBarButtonStorybookComponent from '../../components/TabBarButton'

const Template = () => {
    return (
        <TabBarButtonStorybookComponent
            title="마이페이지"
            onPress={() => {}}
            isActive
        />
    );
};

export default {
    title: 'TabBar/TabBarButton',
    component: TabBarButtonStorybookComponent,
    argTypes: {
      backgroundColor: { control: 'color' },
    }
};

export const TabBarButton = Template.bind({})
