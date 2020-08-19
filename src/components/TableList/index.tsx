import * as React from 'react'
import { connect } from 'react-redux'
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, TableSortLabel } from '@material-ui/core'

import { iRootState, Dispatch } from '@/store'

import './index.less'

const mapState = (state: iRootState) => ({})

const mapDispatch = (dispatch: Dispatch) => ({})

interface IProps {
    prefixcls?: string
}

interface IState {
  sort: string
}

interface DataItem {
  id: number
  name: string
  owner: string
  last_time: string
}

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch> & IProps

type Props = connectedProps

function createData(id, name, owner, last_time) {
  return {
    id,
    name,
    owner,
    last_time
  }
}

let dataList: DataItem[] = [
  createData(1, '未命名报告1', 'zhangbei', '2020年8月18日'),
  createData(2, '未命名报告2', 'zhangbei', '2020年8月18日'),
  createData(3, '未命名报告3', 'zhangbei', '2020年8月18日'),
  createData(4, '未命名报告4', 'zhangbei', '2020年8月18日'),
  createData(5, '未命名报告5', 'zhangbei', '2020年8月18日'),
]

class TableList extends React.Component<Props, IState> {
    state = {
      sort: 'asc'
    } as IState
    static defaultProps = {
      prefixcls: 'table-list'
    }
    componentDidMount() {}
    sortData = () => {
      let { sort } = this.state
      sort = sort === 'asc' ? 'desc' : 'asc'
      dataList = dataList.sort((item1: DataItem, item2: DataItem) => {
        if (sort === 'asc') {
          return item1.id - item2.id
        }
        return item2.id - item1.id
      })
      this.setState({
        sort
      })
    }
    render() {
        const { prefixcls } = this.props
        let { sort } = this.state
        return (
            <div className={`${prefixcls}`}>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>名称</TableCell>
                      <TableCell align="right">归任何人所有</TableCell>
                      <TableCell align="right">
                        <TableSortLabel
                          active={true}
                          direction={sort === 'asc' ? 'asc' : 'desc'}
                          onClick={this.sortData}
                        >
                          我上次打开的时间
                        </TableSortLabel>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {dataList.map((row) => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.name}
                        </TableCell>
                        <TableCell align="right">{row.owner}</TableCell>
                        <TableCell align="right">{row.last_time}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
        )
    }
}

export default connect(
	mapState,
	mapDispatch
)(TableList)
