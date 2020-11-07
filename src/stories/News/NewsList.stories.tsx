import React, { FC } from 'react';
import { NewsItem, NewsList as NewsListStorybookComponent } from '../../components'

const newsList = [
    {
        title: "뉴스아이템 1",
        subTitle: "2012-03-13 | 143",
        thumbnailUri: 'https://avatars1.githubusercontent.com/u/69133174?s=400&v=4',
        rankNumber: "1"
    },
    {
        title: "뉴스아이템 2",
        subTitle: "2012-03-23 | 13",
        thumbnailUri: 'https://avatars1.githubusercontent.com/u/69133174?s=400&v=4',
        rankNumber: "2"
    },
    {
        title: "뉴스아이템 3",
        subTitle: "2012-03-23 | 1433",
        thumbnailUri: 'https://avatars1.githubusercontent.com/u/69133174?s=400&v=4',
        rankNumber: "3"
    },
    {
        title: "뉴스아이템 4",
        subTitle: "2012-03-29 | 43",
        thumbnailUri: 'https://avatars1.githubusercontent.com/u/69133174?s=400&v=4',
        rankNumber: "4"
    }
]

const Template: FC = (_: any) => {
    return (
        <>
        <NewsListStorybookComponent>
            {
                newsList.map((newsItem, index) => {
                    return (
                        <NewsItem
                            key={index}
                            title={newsItem.title}
                            subTitle={newsItem.subTitle}
                            type="hiphople"
                            onPress={() => {}}
                            thumnailSource={{
                                uri: newsItem.thumbnailUri
                            }}
                        />
                    )
                })
            }
        </NewsListStorybookComponent>
        <NewsListStorybookComponent>
            {
                newsList.map((newsItem, index) => {
                    return (
                        <NewsItem
                            key={index}
                            title={newsItem.title}
                            subTitle={newsItem.subTitle}
                            type="billboard"
                            onPress={() => {}}
                            thumnailSource={{
                                uri: newsItem.thumbnailUri
                            }}
                            rankNumber={newsItem.rankNumber}
                        />
                    )
                })
            }
        </NewsListStorybookComponent>
        </>
    )
}

export const NewsList: any = Template.bind({})
NewsList.args = {
    label: 'NewsList'
}

export default {
    title: 'News/NewsList',
    component: NewsListStorybookComponent
}