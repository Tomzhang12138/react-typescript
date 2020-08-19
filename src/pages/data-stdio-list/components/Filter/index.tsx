import * as React from 'react'
import { connect } from 'react-redux'
import { Button, ButtonGroup } from '@material-ui/core'
import { AddBox } from '@material-ui/icons'

import { iRootState, Dispatch } from '@/store'

import './index.less'

const mapState = (state: iRootState) => ({})

const mapDispatch = (dispatch: Dispatch) => ({})

interface IProps {
    prefixcls?: string
}

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch> & IProps

type Props = connectedProps

class Filter extends React.Component<Props> {
    static defaultProps = {
        prefixcls: 'filter'
    }
    componentDidMount() {}
    render() {
        const { prefixcls } = this.props
        return (
            <div className={`${prefixcls}`}>
              <ButtonGroup color="primary" aria-label="outlined primary button group">
                <Button>报告</Button>
                <Button>数据源</Button>
                <Button>数据探索区</Button>
              </ButtonGroup>
            </div>
        )
    }
}

export default connect(
	mapState,
	mapDispatch
)(Filter)
