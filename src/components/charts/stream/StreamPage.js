import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { range, random } from 'lodash'

const keys = ['Raoul', 'Josiane', 'Marcel', 'René', 'Paul', 'Jacques']
const generateData = () =>
    range(16).map(() =>
        keys.reduce((layer, key) => {
            layer[key] = random(10, 200)
            return layer
        }, {})
    )

export default class StreamPage extends Component {
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
            <div className="inner-content line_page">
                <Helmet title="Stream component" />
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
