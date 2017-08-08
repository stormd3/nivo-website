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
import { ResponsiveBar } from 'nivo'
import ChartHeader from '../../ChartHeader'
import ChartTabs from '../../ChartTabs'
import BarControls from './BarControls'
import config from '../../../config'
import generateCode from '../../../generateChartCode'
import ComponentPropsDocumentation from '../../ComponentPropsDocumentation'
import properties from './properties'

class Bars extends Component {
    state = {
        settings: {
            margin: {
                top: 50,
                right: 60,
                bottom: 50,
                left: 60,
            },
            colors: 'nivo',
            colorBy: 'serie.id',

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

            xPadding: 0.2,
            groupMode: 'stacked',
            enableGridX: false,
            enableGridY: true,
            enableLabels: true,
            labelsTextColor: 'inherit:darker(1.6)',
            labelsLinkColor: 'inherit',
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

        let colorBy
        if (settings.colorBy === 'd => d.color') {
            colorBy = d => d.color
        } else if (settings.colorBy === 'd => d.serie.color') {
            colorBy = d => d.serie.color
        } else {
            colorBy = settings.colorBy
        }

        const header = (
            <ChartHeader
                chartClass="Bar"
                tags={['bars', 'basics', 'isomorphic']}
                diceRoll={diceRoll}
            />
        )

        const code = generateCode('Bar', {
            ..._.omit(settings, [
                'enable axisTop',
                'enable axisRight',
                'enable axisBottom',
                'enable axisLeft',
            ]),
            axisTop: settings['enable axisTop'] ? settings.axisTop : undefined,
            axisRight: settings['enable axisRight']
                ? settings.axisRight
                : undefined,
            axisBottom: settings['enable axisBottom']
                ? settings.axisBottom
                : undefined,
            axisLeft: settings['enable axisLeft']
                ? settings.axisLeft
                : undefined,
            colorBy,
        })

        return (
            <div className="page_content grid">
                <div className="chart-page_main">
                    <MediaQuery query="(max-width: 1000px)">
                        {header}
                    </MediaQuery>
                    <div className="main-chart main-chart-horizontal">
                        <ChartTabs chartClass="bar" code={code} data={data}>
                            <ResponsiveBar
                                data={data}
                                {...settings}
                                axisTop={
                                    settings['enable axisTop']
                                        ? settings.axisTop
                                        : undefined
                                }
                                axisRight={
                                    settings['enable axisRight']
                                        ? settings.axisRight
                                        : undefined
                                }
                                axisBottom={
                                    settings['enable axisBottom']
                                        ? settings.axisBottom
                                        : undefined
                                }
                                axisLeft={
                                    settings['enable axisLeft']
                                        ? settings.axisLeft
                                        : undefined
                                }
                                colorBy={colorBy}
                            />
                        </ChartTabs>
                    </div>
                    <BarControls
                        scope="Bar"
                        settings={settings}
                        onChange={this.handleSettingsUpdate}
                    />
                </div>
                <div className="chart-page_aside">
                    <MediaQuery query="(min-width: 1000px)">
                        {header}
                    </MediaQuery>
                    <p className="description">
                        Bar chart with grouping ability, stacked or side by
                        side.
                    </p>
                    <p className="description">
                        The responsive alternative of this component is{' '}
                        <code>&lt;ResponsiveBar /&gt;</code>.
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
                            href={`${config.nivoApiUrl}/samples/bar`}
                            target="_blank"
                        >
                            sample
                        </a>{' '}
                        or{' '}
                        <Link to="/bar/api">try it using the API client</Link>.
                    </p>
                </div>
                <div className="grid_item grid_item-full">
                    <ComponentPropsDocumentation
                        chartClass="bar"
                        properties={properties}
                    />
                </div>
            </div>
        )
    }
}

export default Bars
