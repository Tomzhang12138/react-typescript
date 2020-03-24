import * as React from 'react'
import { connect } from 'react-redux'
import Button from '@material-ui/core/Button'

import { iRootState, Dispatch } from '@/store'

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
       enum color { Red, White, Blank }
       console.log(color)
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
