import React from 'react';
import { NewsHeader as NewsHeaderStorybookComponent } from '../../components';

const Template = () => {
    return (
        <NewsHeaderStorybookComponent
            horizontalPadding={15}
            headerTitle="힙합엘이 뉴스"
            onPressMoreButton={() => {}}
        />
    );
};

export default {
    title: 'News/NewsHeader',
    component: NewsHeaderStorybookComponent
}

export const NewsHeader: any = Template.bind({})
NewsHeader.args = {
    primary: true,
    label: 'NewsHeader'
}
