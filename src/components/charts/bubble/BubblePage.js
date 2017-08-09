import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { generateLibTree } from 'nivo-generators'

export default class BubblePage extends Component {
    state = {
        libTree: generateLibTree(),
    }

    diceRoll = () => {
        this.setState({ libTree: generateLibTree() })
    }

    render() {
        const { childRoutes } = this.props
        const { libTree } = this.state

        return (
            <div className="inner-content bubble_page">
                <Helmet title="Bubble component" />
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
