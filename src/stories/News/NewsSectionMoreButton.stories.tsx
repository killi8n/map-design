import NewsSectionMoreButtonComponent from "../../components/NewsSectionMoreButton"

const HeaderTemplate = (_: any) => {
    return (
        <NewsSectionMoreButtonComponent />
    )
}

const BottomTemplate = (_: any) => {
    return (
        <NewsSectionMoreButtonComponent isBottom />
    )
}

export const HeaderButton = HeaderTemplate.bind({})
export const BottomButton = BottomTemplate.bind({})

export default {
    title: 'News/NewsSectionMoreButton',
    component: NewsSectionMoreButtonComponent
}