/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react'
import omit from 'lodash/omit'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { ResponsiveLine } from 'nivo'
import ChartHeader from '../../ChartHeader'
import ChartTabs from '../../ChartTabs'
import LineControls from './LineControls'
import generateCode from '../../../lib/generateChartCode'
import ComponentPropsDocumentation from '../../properties/ComponentPropsDocumentation'
import properties from './props'
import config from '../../../config'
import nivoTheme from '../../../nivoTheme'
import defaultProps from './defaultProps'
import propsMapper from './propsMapper'

export default class Line extends Component {
    state = {
        settings: omit(defaultProps, ['width', 'height']),
    }

    handleSettingsUpdate = settings => {
        this.setState({ settings })
    }

    render() {
        const { data, diceRoll } = this.props
        const { settings } = this.state

        const mappedSettings = propsMapper(settings)

        const code = generateCode('Line', mappedSettings)

        const header = (
            <ChartHeader
                chartClass="Line"
                tags={['basic', 'isomorphic', 'api']}
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
                            <ResponsiveLine data={data} {...mappedSettings} theme={nivoTheme} />
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
                            href={`${config.nivoApiUrl}/samples/line.svg`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            sample
                        </a>{' '}
                        or <Link to="/line/api">try it using the API client</Link>. You can also see
                        more example usages in{' '}
                        <a
                            href={`${config.storybookUrl}?selectedKind=Line&selectedStory=default`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            the storybook
                        </a>.
                    </p>
                </div>
                <div className="grid_item grid_item-full">
                    <ComponentPropsDocumentation chartClass="Line" properties={properties} />
                </div>
            </div>
        )
    }
}
