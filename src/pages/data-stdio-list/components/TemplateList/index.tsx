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

const listData = [
  {
    img: 'https://ssl.gstatic.com/analytics/rap/20200817_00020005/static/pngs/datastudio_welcome.png',
    title: '教程报告',
    subTitle: '数据洞察',
    type: 'data-stdio',
    id: 1
  },
  {
    img: 'https://ssl.gstatic.com/analytics/rap/20200817_00020005/static/pngs/datastudio_welcome.png',
    title: '教程报告',
    subTitle: '数据洞察',
    type: 'data-stdio',
    id: 2
  },
  {
    img: 'https://ssl.gstatic.com/analytics/rap/20200817_00020005/static/pngs/datastudio_welcome.png',
    title: '教程报告',
    subTitle: '数据洞察',
    type: 'data-stdio',
    id: 3
  },
  {
    img: 'https://ssl.gstatic.com/analytics/rap/20200817_00020005/static/pngs/datastudio_welcome.png',
    title: '教程报告',
    subTitle: '数据洞察',
    type: 'data-stdio',
    id: 4
  },
  {
    img: 'https://ssl.gstatic.com/analytics/rap/20200817_00020005/static/pngs/datastudio_welcome.png',
    title: '教程报告',
    subTitle: '数据洞察',
    type: 'data-stdio',
    id: 5
  }
]

const addTemplateData = {
  img: 'https://ssl.gstatic.com/analytics/rap/20200817_00020005/static/pngs/blank_google_add_2x.png',
  title: '空白报告',
  subTitle: '数据洞察',
  type: 'add',
  id: 0
}

function TemplateItem({ prefixcls, itemData }) {
  return (
    <div className={`${prefixcls}-item`}>
      <div className={`${prefixcls}-item-img`}>
        <img src={itemData.img} />
      </div>
      <div className={`${prefixcls}-item-title`}>
        {itemData.title}
      </div>
      <div className={`${prefixcls}-item-subTitle`}>
        {itemData.subTitle}
      </div>
    </div>
  )
}

class TemplateList extends React.Component<Props> {
    static defaultProps = {
        prefixcls: 'template-list'
    }
    componentDidMount() {}
    render() {
        const { prefixcls } = this.props
        return (
            <div className={`${prefixcls}`}>
              <h4 className={`${prefixcls}-title`}>
                从模板开始
              </h4>
              <div className={`${prefixcls}-list`}>
                <TemplateItem prefixcls={prefixcls} itemData={addTemplateData} />
                {listData.map(item => {
                  return  <TemplateItem key={item.id} prefixcls={prefixcls} itemData={item} />
                })}
              </div>
            </div>
        )
    }
}

export default connect(
	mapState,
	mapDispatch
)(TemplateList)
