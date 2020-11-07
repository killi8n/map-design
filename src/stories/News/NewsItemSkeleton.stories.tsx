import NewsItemSkeletonComponent from '../../components/NewsItemSkeleton'

const Template = (_: any) => {
    return (
        <NewsItemSkeletonComponent />
    )
}

export const NewsItemSkeleton = Template.bind({})
export default {
    title: 'News/NewsItemSkeleton',
    component: NewsItemSkeleton
}
