import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import { Button, MenuList, MenuItem } from '@material-ui/core'
import { AddBox } from '@material-ui/icons'

import { iRootState, Dispatch } from '@/store'

import './index.less'

const mapState = (state: iRootState) => ({})

const mapDispatch = (dispatch: Dispatch) => ({})

interface IProps {
    prefixcls?: string
}

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch> & IProps & RouteComponentProps

type Props = connectedProps

class SubMenu extends React.Component<Props> {
    static defaultProps = {
        prefixcls: 'sub-menu'
    }
    componentDidMount() {}
    linkToAdd = () => {
      this.props.history.push('/add-data-stdio')
    }
    render() {
        const { prefixcls } = this.props
        return (
            <div className={`${prefixcls}`}>
              <div className={`${prefixcls}-top`}>
                <Button color='primary' variant='outlined' onClick={this.linkToAdd} startIcon={<AddBox />}>
                  创建
                </Button>
                <MenuList autoFocusItem={true}>
                  <MenuItem>
                    最近
                  </MenuItem>
                  <MenuItem>
                    与我共享
                  </MenuItem>
                  <MenuItem>
                    归我所有
                  </MenuItem>
                  <MenuItem>
                    回收站
                  </MenuItem>
                </MenuList>
              </div>
            </div>
        )
    }
}

export default withRouter(connect(
	mapState,
	mapDispatch
)(SubMenu))
