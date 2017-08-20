/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import { Link } from 'react-router-dom'
import ChartHeader from '../../ChartHeader'
import ChartTabs from '../../ChartTabs'
import RadarControls from './RadarControls'
import { ResponsiveRadar } from 'nivo'
import generateCode from '../../../lib/generateChartCode'
import ComponentPropsDocumentation from '../../properties/ComponentPropsDocumentation'
import properties from './properties'
import { settingsMapper } from '../../../lib/settings'
import config from '../../../config'
import nivoTheme from '../../../nivoTheme'

const mapSettings = settingsMapper({
    colorBy: value => {
        if (value === 'd => d.color') return d => d.color
        return value
    },
    markersLabel: value => {
        if (value === `d => \`\${d.key}: \${d.value}\``) return d => `${d.key}: ${d.value}`
        if (value === `d => \`\${d.index}: \${d.value}\``) return d => `${d.index}: ${d.value}`
        return value
    },
})

export default class Radar extends Component {
    static propTypes = {
        data: PropTypes.arrayOf(PropTypes.object).isRequired,
        keys: PropTypes.arrayOf(PropTypes.string).isRequired,
        indexBy: PropTypes.string.isRequired,
    }

    state = {
        settings: {
            margin: {
                top: 70,
                right: 80,
                bottom: 40,
                left: 80,
            },

            curve: 'catmullRomClosed',

            // border
            borderWidth: 2,
            borderColor: 'inherit',

            // axes & grid
            gridLevels: 5,
            gridShape: 'circular',
            gridLabelOffset: 36,

            // markers
            enableMarkers: true,
            markersSize: 8,
            markersColor: 'inherit',
            markersBorderWidth: 0,
            markersBorderColor: '#fff',
            enableMarkersLabel: true,
            markersLabel: 'value',
            markersLabelYOffset: -12,

            colors: 'nivo',
            colorBy: 'key',
            fillOpacity: 0.1,

            animate: true,
            motionStiffness: 90,
            motionDamping: 15,

            isInteractive: true,
        },
    }

    handleSettingsUpdate = settings => {
        this.setState({ settings })
    }

    render() {
        const { data, keys, indexBy, diceRoll } = this.props
        const { settings } = this.state

        const mappedSettings = mapSettings(settings)

        const code = generateCode('Radar', {
            keys,
            indexBy,
            ...mappedSettings,
        })

        const header = (
            <ChartHeader
                chartClass="Radar"
                tags={['radar', 'radial', 'circle', 'isomorphic']}
                diceRoll={diceRoll}
            />
        )

        return (
            <div className="page_content grid">
                <div className="chart-page_aside">
                    <MediaQuery query="(max-width: 1000px)">
                        {header}
                    </MediaQuery>
                    <div className="main-chart">
                        <ChartTabs chartClass="radar" code={code} data={data}>
                            <ResponsiveRadar
                                data={data}
                                keys={keys}
                                indexBy={indexBy}
                                {...mappedSettings}
                                theme={nivoTheme}
                            />
                        </ChartTabs>
                    </div>
                </div>
                <div className="chart-page_main">
                    <MediaQuery query="(min-width: 1000px)">
                        {header}
                    </MediaQuery>
                    <p>
                        Generates a radar chart from an array of data.<br />
                        Note that margin object does not take grid labels into account,&nbsp; so you
                        should adjust it to leave enough room for it.
                    </p>
                    <p className="description">
                        The responsive alternative of this component is&nbsp;
                        <code>&lt;ResponsiveRadar /&gt;</code>.
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
                        <a href={`${config.nivoApiUrl}/samples/radar.svg`} target="_blank">
                            sample
                        </a>{' '}
                        or try it using <Link to="/radar/api">the dedicated API client</Link>.
                    </p>
                    <RadarControls
                        scope="Radar"
                        settings={settings}
                        onChange={this.handleSettingsUpdate}
                    />
                </div>
                <div className="grid_item grid_item-full">
                    <ComponentPropsDocumentation chartClass="Radar" properties={properties} />
                </div>
            </div>
        )
    }
}
