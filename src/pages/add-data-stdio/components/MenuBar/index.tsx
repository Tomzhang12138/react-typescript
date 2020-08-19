import * as React from 'react'
import { connect } from 'react-redux'

import { iRootState, Dispatch } from '@/store'
import { AddBox } from '@material-ui/icons'

import './index.less'

const mapState = (state: iRootState) => ({})

const mapDispatch = (dispatch: Dispatch) => ({})

interface IProps {
    prefixcls: string,
    handleClick: (type: string) => any
}

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch> & IProps

type Props = connectedProps

const menuList = [
  {
    icon:  <AddBox />,
    title: '添加页面',
    type: 'add_page'
  },
  {
    icon:  <AddBox />,
    title: '添加数据',
    type: 'add_data'
  }
]

class MenuBar extends React.Component<Props> {
    static defaultProps = {
        prefixcls: 'menu-bar'
    }
    componentDidMount() {}
    handleMenuClick = (type) => {
      this.props.handleClick(type)
    }
    render() {
        const { prefixcls } = this.props
        return (
            <div className={`${prefixcls}`}>
              {menuList.map(item => {
                return (
                  <div className={`${prefixcls}-item`} key={item.type}
                    onClick={() => this.handleMenuClick(item.type)}
                  >
                    <div className={`${prefixcls}-item-icon`}>
                      {item.icon}
                    </div>
                    <div className={`${prefixcls}-item-title`}>
                      {item.title}
                    </div>
                  </div>
                )
              })}
            </div>
        )
    }
}

export default connect(
	mapState,
	mapDispatch
)(MenuBar)
