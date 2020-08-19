import * as React from 'react'
import { connect } from 'react-redux'

import { iRootState, Dispatch } from '@/store'
import TableList from '@/components/TableList'

import './index.less'

const mapState = (state: iRootState) => ({})

const mapDispatch = (dispatch: Dispatch) => ({})

interface IProps {
    prefixcls: string
}

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch> & IProps

type Props = connectedProps

class DataDisplay extends React.Component<Props> {
    static defaultProps = {
        prefixcls: 'data-display'
    }
    componentDidMount() {}
    render() {
        const { prefixcls } = this.props
        return (
            <div className={`${prefixcls}`}>
              <div className={`${prefixcls}-container`}>
                <TableList />
              </div>
            </div>
        )
    }
}

export default connect(
	mapState,
	mapDispatch
)(DataDisplay)
