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

const keys = [
    'hot dogs',
    'burgers',
    'sandwich',
    'kebab',
    'fries',
    'donut',
    'junk',
    'sushi',
    'ramen',
    'curry',
    'udon',
    'bagel',
]
const generateData = () => generateCountriesData(keys, { size: 9, min: 0, max: 100 })

export default class HeatMapPage extends Component {
    state = {
        data: generateData(),
    }

    diceRoll = () => {
        this.setState({ data: generateData() })
    }

    render() {
        const { childRoutes } = this.props
        const { data } = this.state

        return (
            <div className="inner-content">
                <Helmet title="HeatMap components" />
                {childRoutes.map(childRoute => {
                    return React.cloneElement(childRoute, {
                        component: null,
                        render: () =>
                            <childRoute.props.component
                                data={data}
                                keys={keys}
                                diceRoll={this.diceRoll}
                            />,
                    })
                })}
            </div>
        )
    }
}
