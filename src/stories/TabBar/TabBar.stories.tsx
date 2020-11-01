import React, { FC, useState } from 'react'
import TabBarStorybookComponent from '../../components/TabBar'
import TabBarButtonStorybookComponent from '../../components/TabBarButton'

export default {
  title: 'TabBar/TabBar',
  component: TabBarStorybookComponent,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
  subcomponents: { TabBarButton: TabBarButtonStorybookComponent }
};

const mockRoutes = [
  {
    title: "뉴스"
  },
  {
    title: "게시판"
  },
  {
    title: "마이페이지"
  }
]

const Template: FC = (_: any) => {
  const [activeIndex, setActiveIndex] = useState<number>(0)
  return (
    <TabBarStorybookComponent>
      {
        mockRoutes.map((route, index) => {
          const handlePress = () => {
            setActiveIndex(index)
          }
          return (
            <TabBarButtonStorybookComponent
              key={index}
              onPress={handlePress}
              title={route.title}
              isActive={activeIndex === index}
            />
          )
        })
      }
    </TabBarStorybookComponent>
  )
};

export const TabBar: any = Template.bind({});
TabBar.args = {
  primary: true,
  label: 'TabBar',
};