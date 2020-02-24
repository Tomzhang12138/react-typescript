import * as React from 'react'

import { Hello } from '../components/hello'

export interface AboutProps { }

export default class About extends React.Component<AboutProps, {}> {
    render() {
        return <Hello compiler='Typescript-About' framework='React' />
    }
}