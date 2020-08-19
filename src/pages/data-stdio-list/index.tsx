import * as React from 'react'
import { connect } from 'react-redux'

import { iRootState, Dispatch } from '@/store'
import TableList from '@/components/TableList'
import SubMenu from './components/SubMenu'
import Filter from './components/Filter'
import TemplateList from './components/TemplateList'


import './index.less'

const mapState = (state: iRootState) => ({})

const mapDispatch = (dispatch: Dispatch) => ({})

interface IProps {
    prefixcls: string
}

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch> & IProps

type Props = connectedProps

class DataStdioList extends React.Component<Props> {
    static defaultProps = {
        prefixcls: 'data-stdio'
    }
    componentDidMount() {}
    render() {
        const { prefixcls } = this.props
        return (
            <div className={`${prefixcls}`}>
                <SubMenu />
                <div className={`${prefixcls}-main`}>
                    <Filter />
                    <TemplateList />
                    <TableList />
                </div>
            </div>
        )
    }
}

export default connect(
	mapState,
	mapDispatch
)(DataStdioList)
