import React, { FC } from 'react'
import ButtonComponent from '../../components/Button'
import TextComponent from '../../components/Text'

const BaseTemplate: FC = (_: any) => {
    return (
        <ButtonComponent rounded>
            <TextComponent
                customStyles={{
                    color: 'white'
                }}
            >
                Base Button
            </TextComponent>
        </ButtonComponent>
    )
}

const HighlightedTemplate: FC = (_: any) => {
    return (
        <ButtonComponent rounded>
            <TextComponent
                customStyles={{
                    color: 'yellow'
                }}
            >
                Highlighted Button
            </TextComponent>
        </ButtonComponent>
    )
}

export const Base: any = BaseTemplate.bind({})
Base.args = {
    label: 'Base',
    theme: 'base'
}

export const Highlighted: any = HighlightedTemplate.bind({})
Highlighted.args = {
    label: 'Highlighted',
    theme: 'highlighted'
}

export default {
    title: 'Base/Button',
    component: ButtonComponent,
    argsTypes: {},
    subcomponents: {}
}