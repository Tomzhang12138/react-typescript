import * as React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

import { iRootState, Dispatch } from '../store'

const mapState = (state: iRootState) => ({
	dolphins: state.dolphins,
	sharks: state.sharks,
})

const mapDispatch = (dispatch: Dispatch) => ({
	incrementDolphins: dispatch.dolphins.increment,
	incrementDolphinsAsync: dispatch.dolphins.incrementAsync,
	incrementSharks: () => dispatch.sharks.increment(1),
	incrementSharksAsync: () => dispatch.sharks.incrementAsync(1),
	incrementSharksAsync2: () =>
		dispatch({ type: 'sharks/incrementAsync', payload: 2 }),
})

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch>
type Props = connectedProps

class Home extends React.Component<Props> {
    componentDidMount() {
        let isDone: boolean = false
        let decimal: number = 12
        let name: string = 'tom'
        let list: number[] = [1]
        let list2: Array<number> = [2]
        let list3: any[] = [1, '34', false]
        let tuple1: [string, number]
        tuple1 = ['23', 23]
        enum Color { Red = 2, Yellow, Blue }
        let colorName: string = Color[2]
        let notSure: any = 34
        notSure = '23'
        notSure = false
        let isVoid: void = undefined
        isVoid = null
        let isNull: null = null
        let isUndefined: undefined = undefined
        console.log(isDone, decimal, name, list, list2, tuple1, colorName, notSure, isVoid, isNull, isUndefined)
        function hello(): void {
            console.log('hello world')
        }
        function error(message: string): never {
            throw new Error(message)
        }
        function fail() {
            return error('error happen')
        }
        function inFiniteLoop(): never {
            while(true) {

            }
        }
        let someValue: any = '343434'
        let someLength: number = (someValue as string).length
        interface LabelValue {
            label: string
        }
        function printLabel(labelObj: LabelValue): void {
            console.log(labelObj.label)
        }
        let myObj = {size: 10, label: "Size 10 Object"}
        printLabel(myObj)
        interface SquareConfig {
            color?: string,
            width?: number,
            [propName: string]: any;
        }
        function createSquare(config: SquareConfig): { color: string, area:number } {
            let newSquare = { color: 'white', area: 100}
            if (config.color) {
                newSquare.color = config.color
            }
            if (config.width) {
                newSquare.area = config.width * config.width
            }
            return newSquare
        }
        let newSquare = createSquare({ color: 'blank' })
        interface Point {
            readonly x: number,
            readonly y: number
        }
        let p1: Point = { x: 5, y: 6 }
        let readList: ReadonlyArray<number> = [1,2,3]
        interface SearchFunc {
            (source: string, substring: string): boolean
        }
        let mySearch: SearchFunc = function(source: string, substring: string): boolean {
            let result = source.search(substring)
            return result > -1
        }
        interface StringArray {
            [index: number]: string
        }
        let myStringArr: StringArray = ['bob', 'arrau']
        interface ClockInterface {
            currentTime: Date,
            setTime(d: Date): void
        }

        interface ClockConstructor {
            new (hour: number, minute: number): ClockInterface
        }

        function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
            return new ctor(hour, minute)
        }
        class Clock implements ClockInterface {
            currentTime: Date
            constructor(h: number, m: number) {}
            setTime(d: Date) {
                this.currentTime = d
            }
        }
        let clock1 = createClock(Clock, 12, 12)
        interface Shape {
            color: string
        }
        interface PenWidth {
            penWidth: number
        }
        interface Square extends Shape, PenWidth {
            width: number
        }
        let square1: Square = {
            width: 10,
            color: 'white',
            penWidth: 2
        }
    }
    classTs = () => {
        class Animal {
            name: string
            constructor(theName: string) {
                this.name = theName
            }
            move(instance: number = 5) {
                console.log(`${this.name} move ${instance}`)
            }
        }
        class Snake extends Animal {
            constructor(theName: string) {
                super(theName)
            }
            move(instance: number = 10) {
                console.log('slighting....')
                super.move(instance)
            }
        }
        class Horse extends Animal {
            constructor(theName: string) {
                super(theName)
            }
            move(instance: number = 45) {
                console.log('running...')
                super.move(instance)
            }
        }
        let sam = new Snake("Sammy the Python")
        let tom: Animal = new Horse("Tommy the Palomino")

        sam.move()
        tom.move(34)

        class Person {
            protected name: string
            protected constructor(theName: string) {
                this.name = theName
            }
        }
        class Employee extends Person {
            private department: string
            constructor(name: string, department: string) {
                super(name)
                this.department = department
            }
            public getElevatorPitch() {
                return `Hello, my name is ${this.name} and I work in ${this.department}.`
            }
        }
        let howard = new Employee("Howard", "Sales")
        howard.getElevatorPitch()
    }
    alertTest = () => {
        alert(1212)
    }
    render() {
        return (
            <div>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div>
                        <h3>Dolphins</h3>
                        <h1>{this.props.dolphins}</h1>
                        <Button variant="contained" color="primary" onClick={this.props.incrementDolphins}>+1</Button>
                        <Button variant="contained" color="primary" onClick={this.props.incrementDolphinsAsync}>Async +1</Button>
                    </div>
                    <div style={{ width: 200 }}>
                        <h3>Sharks</h3>
                        <h1>{this.props.sharks}</h1>
                        <Button variant="contained" color="primary" onClick={this.props.incrementSharks}>+1</Button>
                        <Button variant="contained" color="primary" onClick={this.props.incrementSharksAsync}>Async +1</Button>
                        <Button variant="contained" color="primary" onClick={this.props.incrementSharksAsync2}>Async +2</Button>
                    </div>
                    <p>Using Rematch Models</p>
                </div>
                <Button onClick={this.alertTest}>Alert</Button>
            </div>
        )
    }
}

export default connect(
	mapState,
	mapDispatch
)(Home)
