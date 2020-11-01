import React from 'react';
import { NewsItem as NewsItemStorybookComponent } from '../../components';

const Template = () => {
    return (
        <>
        <NewsItemStorybookComponent
            type="billboard"
            onPress={() => {}}
            title="뉴스 타이틀"
            subTitle="2012-03-13 | 1234"
            rankNumber="13"
            thumnailSource={{
                uri: 'https://avatars1.githubusercontent.com/u/69133174?s=400&v=4'
            }}
        />
        <NewsItemStorybookComponent
            type="hiphople"
            onPress={() => {}}
            title="뉴스 타이틀"
            subTitle="2012-03-13 | 1234"
            rankNumber="13"
            thumnailSource={{
                uri: 'https://avatars1.githubusercontent.com/u/69133174?s=400&v=4'
            }}
        />
        </>
    );
};

export default {
    title: 'News/NewsItem',
    component: NewsItemStorybookComponent
}

export const NewsItem: any = Template.bind({})
NewsItem.args = {
    primary: true,
    label: 'NewsItem'
}