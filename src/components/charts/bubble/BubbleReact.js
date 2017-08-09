/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { Component } from 'react'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { ResponsiveBubble } from 'nivo'
import ChartHeader from '../../ChartHeader'
import ChartTabs from '../../ChartTabs'
import generateCode from '../../../generateChartCode'
import BubbleControls from './BubbleControls'
import ComponentPropsDocumentation from '../../ComponentPropsDocumentation'
import properties from './properties'

export default class BubbleReact extends Component {
    state = {
        settings: {
            margin: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            },
            identity: 'name',
            value: 'loc',
            colors: 'nivo',
            colorBy: 'depth',
            padding: 1,
            enableLabel: true,
            leavesOnly: false,
            label: 'name',
            labelSkipRadius: 8,
            labelTextColor: 'inherit:darker(.8)',
            labelTextDY: 4,
            borderWidth: 0,
            borderColor: 'inherit:darker(.3)',
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

        const colorBy = settings.colorBy === 'd => d.color' ? d => d.color : settings.colorBy

        const code = generateCode('Bubble', { ...settings, colorBy })

        return (
            <div className="page_content grid">
                <div className="chart-page_aside">
                    <MediaQuery query="(max-width: 1000px)">
                        <ChartHeader
                            chartClass="Bubble"
                            tags={['bubble', 'hierarchy', 'react', 'isomorphic']}
                            diceRoll={diceRoll}
                        />
                    </MediaQuery>
                    <div className="main-chart">
                        <ChartTabs chartClass="bubble" code={code} data={root}>
                            <ResponsiveBubble
                                root={_.cloneDeep(root)}
                                {...settings}
                                colorBy={colorBy}
                            />
                        </ChartTabs>
                    </div>
                </div>
                <div className="chart-page_main">
                    <MediaQuery query="(min-width: 1000px)">
                        <ChartHeader
                            chartClass="Bubble"
                            tags={['bubble', 'hierarchy', 'react', 'isomorphic']}
                            diceRoll={diceRoll}
                        />
                    </MediaQuery>
                    <p className="description">
                        Use React for rendering and react-motion for transitions.
                    </p>
                    <p className="description">
                        This chart offer various implementations, you can render it using{' '}
                        <Link to="/bubble/d3">pure d3</Link> or{' '}
                        <Link to="/bubble">let react handles all the rendering</Link> and you can
                        even <Link to="/bubble/placeholders">render whatever you want</Link> instead
                        of the boring circles.
                    </p>
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
