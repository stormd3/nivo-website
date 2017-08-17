/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { generateCountriesData } from 'nivo-generators'

const keys = ['hot dogs', 'burgers', 'sandwich', 'kebab', 'fries', 'donut']
const generateData = () => generateCountriesData(keys, { size: 7 })

export default class BarsPage extends Component {
    state = {
        data: generateData(),
    }

    diceRoll = () => {
        this.setState({ data: generateData() })
    }

    handleDataUpdate = data => {
        this.setState({ data })
    }

    render() {
        const { childRoutes } = this.props
        const { data } = this.state

        return (
            <div className="inner-content bars_page">
                <Helmet title="Bar components" />
                {childRoutes.map(childRoute => {
                    return React.cloneElement(childRoute, {
                        component: null,
                        render: () =>
                            <childRoute.props.component
                                data={data}
                                keys={keys}
                                diceRoll={this.diceRoll}
                                onDataUpdate={this.handleDataUpdate}
                            />,
                    })
                })}
            </div>
        )
    }
}
