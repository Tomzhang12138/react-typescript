import * as React from 'react'

import ListScroll from './listScroll'
import './index.less'

export interface ListProps { }

export default class List extends React.Component<ListProps, {}> {
    componentDidMount() {
        const container = document.getElementById('m-listContainer')
        const lis = document.querySelectorAll('#m-listContainer img')

        const renderPage = (firstIndex: number) => {
            lis.forEach((item, idx) => {
                const li = item as HTMLImageElement
                li.src = li.dataset.src + '?random=' + (firstIndex + idx)
            })
        }

        renderPage(0)

        const renderFunction = (firstIndex: number) => {
            renderPage(firstIndex)
        }

        const listScrollIns = new ListScroll({
            firstItemId: 'item-first',
            lastItemId: 'item-last',
            container,
            listSize: 21,
            itemHeight: 150,
            renderFunction
        })

        listScrollIns.startObserver()
    }
    render() {
        return (
            <div id="J_wrap" className="wrap">
                <ul id="m-listContainer">
                    <li id="item-first">
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li>
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li>
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li>
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li>
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li>
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li>
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li>
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li>
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li>
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li>
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li>
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li>
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li>
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li>
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li>
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li>
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li>
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li>
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                    <li id="item-last">
                        <img src='' data-src='https://picsum.photos/375/150' />
                    </li>
                </ul>
            </div>
        )
    }
}