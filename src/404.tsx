import * as React from 'react'

export interface NotFoundProps { tip: string }

export class NotFound extends React.Component<NotFoundProps, {}> {
    render() {
        return <h1>404 - {this.props.tip}</h1>
    }
}