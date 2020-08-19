import * as React from 'react'
import { connect } from 'react-redux'
import { Drawer, Tabs, Tab } from '@material-ui/core'
import { iRootState, Dispatch } from '@/store'
import TableList from '@/components/TableList'

import './index.less'

const mapState = (state: iRootState) => ({})

const mapDispatch = (dispatch: Dispatch) => ({})

interface IProps {
    prefixcls: string
    visible: boolean
    onClose: () => any
}

type connectedProps = ReturnType<typeof mapState> & ReturnType<typeof mapDispatch> & IProps

type Props = connectedProps

function createData(id, title, img, developer) {
  return {
    id,
    title,
    img,
    developer
  }
}
const dataList = [
  createData(1, 'Google Analytics', 'https://www.gstatic.com/recaptcha/api2/logo_48.png', 'Google'),
  createData(2, 'Google Analytics', 'https://www.gstatic.com/recaptcha/api2/logo_48.png', 'Google'),
  createData(3, 'Google Analytics', 'https://www.gstatic.com/recaptcha/api2/logo_48.png', 'Google'),
  createData(4, 'Google Analytics', 'https://www.gstatic.com/recaptcha/api2/logo_48.png', 'Google'),
  createData(5, 'Google Analytics', 'https://www.gstatic.com/recaptcha/api2/logo_48.png', 'Google')
]

class DataSourceSelector extends React.Component<Props> {
    state = {
      activeTab: 'data'
    }
    static defaultProps = {
        prefixcls: 'data-source'
    }
    componentDidMount() {}
    handleChangeTab = (_, activeTab) => {
      this.setState({
        activeTab
      })
    }
    render() {
        const { prefixcls, visible, onClose } = this.props
        let { activeTab } = this.state 
        return (
           <Drawer anchor="bottom" open={visible} onClose={onClose}>
            <div className={`${prefixcls}`}>
              <div className={`${prefixcls}-title`}>
                将数据添加到报告
              </div>
              <div className={`${prefixcls}-tabs`}>
                <Tabs value={activeTab}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={this.handleChangeTab}
                >
                  <Tab label="连接到数据" value='data'>
                  </Tab>
                  <Tab label="我的数据源" value='my'>
                  </Tab>
                </Tabs>
                {activeTab === 'data' &&
                  <div className={`${prefixcls}-data-list`}>
                    {dataList.map(item => {
                      return (
                        <div key={item.id} className={`${prefixcls}-data-item`}>
                          <div className={`${prefixcls}-data-item-left`}>
                            <img src={item.img} />
                          </div>
                          <div className={`${prefixcls}-data-item-right`}>
                            <div className={`${prefixcls}-data-item-title`}>
                              {item.title}
                            </div>
                            <div className={`${prefixcls}-data-item-developer`}>
                              {item.developer}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                }
                {activeTab === 'my' &&
                  <TableList />
                }
              </div>
            </div>
           </Drawer>
        )
    }
}

export default connect(
	mapState,
	mapDispatch
)(DataSourceSelector)
