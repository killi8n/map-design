import React from 'react'
import TabButton from "./TabButton"

export default {
    title: 'Example/TabButton',
    component: TabButton,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
  };

const Template = (args: any) => <TabButton {...args} />;

export const Primary: any = Template.bind({});
Primary.args = {
  primary: true,
  label: 'TabButton',
};