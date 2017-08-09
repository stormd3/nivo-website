import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { ResponsiveBubblePlaceholders } from 'nivo'
import ChartHeader from '../../ChartHeader'
import ChartTabs from '../../ChartTabs'
import generateCode from '../../../generateChartCode'
import BubbleControls from './BubbleControls'
import ComponentPropsDocumentation from '../../ComponentPropsDocumentation'
import properties from './properties'

export default class BubblePlaceholdersPage extends Component {
    state = {
        settings: {
            margin: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            },
            namespace: 'html',
            identity: 'name',
            value: 'loc',
            padding: 1,
            leavesOnly: false,
            colors: 'nivo',
            colorBy: 'depth',
            animate: true,
            motionStiffness: 120,
            motionDamping: 10,
        },
    }

    handleSettingsUpdate = settings => {
        this.setState({ settings })
    }

    render() {
        const { root, diceRoll } = this.props
        const { settings } = this.state

        const code = generateCode('BubblePlaceholders', settings)

        return (
            <div className="page_content grid">
                <div className="chart-page_aside">
                    <MediaQuery query="(max-width: 1000px)">
                        <ChartHeader
                            chartClass="BubblePlaceholders"
                            tags={['bubble', 'hierarchy', 'placeholders', 'isomorphic']}
                            diceRoll={diceRoll}
                        />
                    </MediaQuery>
                    <div className="main-chart">
                        <ChartTabs chartClass="bubble" code={code} data={root}>
                            <ResponsiveBubblePlaceholders root={_.cloneDeep(root)} {...settings}>
                                {nodes =>
                                    nodes.map(node => {
                                        return (
                                            <div
                                                key={node.key}
                                                style={{
                                                    position: 'absolute',
                                                    top: node.style.y - node.style.r,
                                                    left: node.style.x - node.style.r,
                                                    width: node.style.r * 2,
                                                    height: node.style.r * 2,
                                                    borderRadius: node.style.r,
                                                    border: `2px solid ${node.style.color}`,
                                                    backgroundSize: 'contain',
                                                    backgroundImage: `url(http://placekitten.com/240/240)`,
                                                }}
                                            />
                                        )
                                    })}
                            </ResponsiveBubblePlaceholders>
                        </ChartTabs>
                    </div>
                </div>
                <div className="chart-page_main">
                    <MediaQuery query="(min-width: 1000px)">
                        <ChartHeader
                            chartClass="BubblePlaceholders"
                            tags={['bubble', 'hierarchy', 'placeholders', 'isomorphic']}
                            diceRoll={diceRoll}
                        />
                    </MediaQuery>
                    <p className="description">
                        Take total control over Bubble component (kittens compliant).
                    </p>
                    <p className="description">
                        This chart offer various implementations, you can render it using{' '}
                        <Link to="/bubble/d3">pure d3</Link> or{' '}
                        <Link to="/bubble">let react handles all the rendering</Link> and you can
                        even <Link to="/bubble/placeholders">render whatever you want</Link> instead
                        of the boring circles.
                    </p>

                    <BubbleControls
                        scope="BubblePlaceholders"
                        settings={settings}
                        onChange={this.handleSettingsUpdate}
                    />
                </div>
                <div className="grid_item grid_item-full">
                    <ComponentPropsDocumentation
                        chartClass="BubblePlaceholders"
                        properties={properties}
                    />
                </div>
            </div>
        )
    }
}
