import * as React from 'react'

import { Hello } from '@/components/hello'

import { extend, padLeft } from '@/helpers'

export interface AboutProps { }

export default class About extends React.Component<AboutProps, {}> {
    componentDidMount() {
        class Person {
            constructor(public name: string) { }
        }
        interface Loggable {
            log(info: string): void
        }
        class ConsoleLogger implements Loggable {
            log(info: string) {
                console.log(`log: ${info}`)
            }
        }
        let jim = extend(new Person("Jim"), new ConsoleLogger())
        let n = jim.name
        jim.log(n)
        let padString = padLeft('hello world', 'hello')
        console.log(padString)
    }
    render() {
        return <Hello compiler='Typescript-About' framework='React' />
    }
}