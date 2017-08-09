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
import { generateLibTree } from 'nivo-generators'

class ChordPage extends Component {
    state = {
        libTree: generateLibTree(),
    }

    handleDiceRoll = () => {
        this.setState({ libTree: generateLibTree() })
    }

    render() {
        const { childRoutes } = this.props
        const { libTree } = this.state

        return (
            <div className="inner-content chord_page">
                <Helmet title="Chord component" />
                {childRoutes.map(childRoute => {
                    return React.cloneElement(childRoute, {
                        component: null,
                        render: () =>
                            <childRoute.props.component root={libTree} diceRoll={this.diceRoll} />,
                    })
                })}
            </div>
        )
    }
}

export default ChordPage
