import React, { FC } from 'react'
import ButtonComponent from '../../components/Button'

const BaseTemplate: FC = (_: any) => {
    return (
        <ButtonComponent
            theme='base'
            buttonText='Base Button'
            fontSize={20}
        />
    )
}

const HighlightedTemplate: FC = (_: any) => {
    return (
        <ButtonComponent
            theme='highlighted'
            buttonText='Highlighted Button'
            fontSize={20}
        />
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