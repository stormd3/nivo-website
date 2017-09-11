/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react'
import cloneDeep from 'lodash/cloneDeep'
import range from 'lodash/range'
import random from 'lodash/random'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { ResponsiveBubbleCanvas } from 'nivo'
import ChartHeader from '../../ChartHeader'
import ChartTabs from '../../ChartTabs'
import generateCode from '../../../lib/generateChartCode'
import BubbleControls from './BubbleControls'
import ComponentPropsDocumentation from '../../properties/ComponentPropsDocumentation'
import properties from './props'
import nivoTheme from '../../../nivoTheme'
import propsMapper from './propsMapper'

const NODE_COUNT = 1200

const generateData = () => range(NODE_COUNT).map(i => ({
    id: `node.${i}`,
    value: random(10, 100000),
}))

export default class BubbleCanvas extends Component {
    state = {
        settings: {
            margin: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            },

            colors: 'd320b',
            colorBy: 'id',
            padding: 1,
            leavesOnly: true,

            // labels
            enableLabel: false,
            label: 'id',
            labelSkipRadius: 10,
            labelTextColor: {
                type: 'inherit:darker',
                gamma: 0.8,
            },

            borderWidth: 0,
            borderColor: {
                type: 'inherit:darker',
                gamma: 0.3,
            },

            // motion
            animate: true,
            motionStiffness: 90,
            motionDamping: 12,

            // interactivity
            isInteractive: true,

            // zooming
            isZoomable: true,
        },
    }

    handleSettingsUpdate = settings => {
        this.setState({ settings })
    }

    render() {
        const { diceRoll } = this.props
        const { settings } = this.state

        const root = {
            id: 'root',
            children: generateData(),
        }

        const mappedSettings = propsMapper(settings)

        const code = generateCode('BubbleCanvas', mappedSettings)

        return (
            <div className="page_content grid">
                <div className="chart-page_aside">
                    <MediaQuery query="(max-width: 1000px)">
                        <ChartHeader
                            chartClass="BubbleCanvas"
                            tags={['hierarchy', 'canvas']}
                            diceRoll={diceRoll}
                        />
                    </MediaQuery>
                    <div className="main-chart">
                        <ChartTabs chartClass="bubble" code={code} data={root} nodeCount={NODE_COUNT}>
                            <ResponsiveBubbleCanvas
                                root={cloneDeep(root)}
                                {...mappedSettings}
                                theme={nivoTheme}
                            />
                        </ChartTabs>
                    </div>
                </div>
                <div className="chart-page_main">
                    <MediaQuery query="(min-width: 1000px)">
                        <ChartHeader
                            chartClass="BubbleCanvas"
                            tags={['hierarchy', 'canvas']}
                            diceRoll={diceRoll}
                        />
                    </MediaQuery>
                    <div className="chart-description">
                        <p className="description">
                            A variation around the <Link to="/bubble">Bubble</Link> component. Well
                            suited for large data sets as it does not impact DOM tree depth and does
                            not involve React diffing stuff for children (not that useful when using
                            canvas), however you'll lose the isomorphic ability and transitions (for
                            now).
                        </p>
                        <p className="description">
                            The responsive alternative of this component is{' '}
                            <code>&lt;ResponsiveBubbleCanvas/&gt;</code>.
                        </p>
                    </div>
                    <BubbleControls
                        scope="Bubble"
                        settings={settings}
                        onChange={this.handleSettingsUpdate}
                    />
                </div>
                <div className="grid_item grid_item-full">
                    <ComponentPropsDocumentation chartClass="Bubble" properties={properties} />
                </div>
            </div>
        )
    }
}
