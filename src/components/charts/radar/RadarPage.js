/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { generateSerie, randColor } from 'nivo-generators'

const facets = ['fruity', 'bitter', 'heavy', 'strong', 'sunny']
const generateData = () =>
    ['chardonay', 'carmenere', 'syrah'].map(id => ({
        id,
        color: randColor(),
        data: generateSerie(facets.length),
    }))

export default class PiePage extends Component {
    state = {
        data: generateData(),
    }

    diceRoll = () => {
        this.setState({
            data: generateData(),
        })
    }

    handleDataUpdate = data => {
        this.setState({ data })
    }

    render() {
        const { childRoutes } = this.props
        const { data } = this.state

        return (
            <div className="inner-content radar_page">
                <Helmet title="Radar components" />
                {childRoutes.map(childRoute => {
                    return React.cloneElement(childRoute, {
                        component: null,
                        render: () =>
                            <childRoute.props.component
                                data={data}
                                facets={facets}
                                diceRoll={this.diceRoll}
                                onDataUpdate={this.handleDataUpdate}
                            />,
                    })
                })}
            </div>
        )
    }
}
