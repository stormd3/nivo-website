/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react'
import classNames from 'classnames'

const tabs = ['chart', 'code', 'data']

export default class ChartTabs extends Component {
    state = {
        tab: 'chart',
    }

    handleTabToggle = tab => {
        this.setState({ tab })
    }

    render() {
        const { chartClass, data, code, children } = this.props
        const { tab: currentTab } = this.state

        let content
        if (currentTab === 'chart') {
            content = children
        } else if (currentTab === 'code') {
            content = (
                <div className="code-snippet">
                    <pre>
                        {code}
                    </pre>
                </div>
            )
        } else if (currentTab === 'data') {
            content = (
                <div className="json-data_json">
                    <textarea value={JSON.stringify(data, null, '  ')} />
                </div>
            )
        }

        return (
            <div className="chart-tabs">
                <div className="chart-tabs_menu">
                    {tabs.map(tab => {
                        const icon = tab === 'chart' ? chartClass : tab

                        return (
                            <span
                                key={tab}
                                onClick={e => {
                                    this.handleTabToggle(tab)
                                }}
                                className={classNames('chart-tabs_menu_item', {
                                    active: tab === currentTab,
                                })}
                            >
                                <span className={`nivo-icon nivo-icon-${icon}`} />
                            </span>
                        )
                    })}
                </div>
                {content}
            </div>
        )
    }
}
