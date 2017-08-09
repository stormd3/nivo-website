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
import { ResponsiveLine } from 'nivo'
import ChartHeader from '../../ChartHeader'
import ChartTabs from '../../ChartTabs'
import LineControls from './LineControls'
import generateCode from '../../../generateChartCode'
import ComponentPropsDocumentation from '../../ComponentPropsDocumentation'
import properties from './properties'
import config from '../../../config'

export default class Line extends Component {
    state = {
        settings: {
            margin: {
                top: 50,
                right: 60,
                bottom: 50,
                left: 60,
            },

            // axes
            'enable axisTop': false,
            axisTop: {
                orient: 'top',
                tickSize: 5,
                tickPadding: 5,
                legend: '',
                legendOffset: 36,
            },
            'enable axisRight': false,
            axisRight: {
                orient: 'right',
                tickSize: 5,
                tickPadding: 5,
                legend: '',
                legendOffset: 0,
            },
            'enable axisBottom': true,
            axisBottom: {
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                legend: 'country code',
                legendOffset: 36,
            },
            'enable axisLeft': true,
            axisLeft: {
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                legend: 'count',
                legendOffset: -40,
            },
            enableGridX: true,
            enableGridY: true,

            stacked: true,

            curve: 'linear',
            colors: 'nivo',
            colorBy: 'id',

            // markers
            enableMarkers: true,
            markersSize: 12,
            markersColor: 'inherit:darker(.3)',
            markersBorderWidth: 2,
            markersBorderColor: '#fff',

            // motion
            animate: true,
            motionStiffness: 90,
            motionDamping: 15,
        },
    }

    handleSettingsUpdate = settings => {
        this.setState({ settings })
    }

    render() {
        const { data, diceRoll } = this.props
        const { settings } = this.state

        const colorBy = settings.colorBy === 'd => d.color' ? d => d.color : settings.colorBy

        const code = generateCode('Line', {
            ..._.omit(settings, [
                'enable axisTop',
                'enable axisRight',
                'enable axisBottom',
                'enable axisLeft',
            ]),
            axisTop: settings['enable axisTop'] ? settings.axisTop : undefined,
            axisRight: settings['enable axisRight'] ? settings.axisRight : undefined,
            axisBottom: settings['enable axisBottom'] ? settings.axisBottom : undefined,
            axisLeft: settings['enable axisLeft'] ? settings.axisLeft : undefined,
            colorBy,
        })

        const header = (
            <ChartHeader
                chartClass="Line"
                tags={['line', 'basics', 'isomorphic', 'nivo-api']}
                diceRoll={diceRoll}
            />
        )

        return (
            <div className="page_content grid">
                <div className="chart-page_main">
                    <MediaQuery query="(max-width: 1000px)">
                        {header}
                    </MediaQuery>
                    <div className="main-chart main-chart-horizontal">
                        <ChartTabs chartClass="line" code={code} data={data}>
                            <ResponsiveLine
                                data={data}
                                {...settings}
                                axisTop={settings['enable axisTop'] ? settings.axisTop : null}
                                axisRight={settings['enable axisRight'] ? settings.axisRight : null}
                                axisBottom={
                                    settings['enable axisBottom'] ? settings.axisBottom : null
                                }
                                axisLeft={settings['enable axisLeft'] ? settings.axisLeft : null}
                                colorBy={colorBy}
                            />
                        </ChartTabs>
                    </div>
                    <LineControls
                        scope="Line"
                        settings={settings}
                        onChange={this.handleSettingsUpdate}
                    />
                </div>
                <div className="chart-page_aside">
                    <MediaQuery query="(min-width: 1000px)">
                        {header}
                    </MediaQuery>
                    <p className="description">Line chart with stacking ability.</p>
                    <p>
                        Given an array of data series having an id and a nested array of points
                        (with x, y properties), it will compute the line for each data serie.&nbsp;
                        If stacked is true, y values will be automatically aggregated.
                    </p>
                    <p className="description">
                        The responsive alternative of this component is{' '}
                        <code>&lt;ResponsiveLine /&gt;</code>.
                    </p>
                    <p className="description">
                        This component is available in the{' '}
                        <a
                            href="https://github.com/plouc/nivo-api"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            nivo-api
                        </a>, see{' '}
                        <a
                            href={`${config.nivoApiUrl}/samples/line`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            sample
                        </a>{' '}
                        or <Link to="/line/api">try it using the API client</Link>.
                    </p>
                </div>
                <div className="grid_item grid_item-full">
                    <ComponentPropsDocumentation chartClass="Line" properties={properties} />
                </div>
            </div>
        )
    }
}
