import * as React from 'react'
import { connect } from 'react-redux'

import { iRootState, Dispatch } from '@/store'

import MenuBar from './components/MenuBar'
import DataSourceSelector from './components/DataSourceSelector'
import DataDisplay from './components/DataDisplay'


import './index.less'

const mapState = (state: iRootState) => ({})

const mapDispatch = (dispatch: Dispatch) => ({})

interface IProps {
    prefixcls: string
}

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch> & IProps

type Props = connectedProps

class DataStdioList extends React.Component<Props> {
    state = {
      dataSourceVisible: true
    }
    static defaultProps = {
        prefixcls: 'add-stdio'
    }
    componentDidMount() {}
    hiddenDataSource = () => {
      this.setState({
        dataSourceVisible: false
      })
    }
    handleMenuClick = (type) => {
      if (type === 'add_data') {
        this.setState({
          dataSourceVisible: true
        })
      }
    }
    render() {
        const { prefixcls } = this.props
        let { dataSourceVisible } = this.state
        return (
            <div className={`${prefixcls}`}>
              <MenuBar handleClick={this.handleMenuClick} />
              <DataDisplay />
              <DataSourceSelector visible={dataSourceVisible} onClose={this.hiddenDataSource} />
            </div>
        )
    }
}

export default connect(
	mapState,
	mapDispatch
)(DataStdioList)
