/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MediaQuery from 'react-responsive'
import { ResponsiveChord } from 'nivo'
import ChartHeader from '../../ChartHeader'
import ChartTabs from '../../ChartTabs'
import ChordControls from './ChordControls'
import generateCode from '../../../lib/generateChartCode'
import config from '../../../config'
import ComponentPropsDocumentation from '../../properties/ComponentPropsDocumentation'
import properties from './properties'

const matrix = [
    [11975, 5871, 8916, 2868, 1967, 2987, 4300],
    [1951, 10048, 2060, 6171, 1967, 2987, 4300],
    [8010, 16145, 8090, 8045, 1967, 2987, 4300],
    [1013, 990, 940, 6907, 2306, 1200, 900],
    [1013, 990, 940, 6907, 800, 3400, 1200],
    [1013, 990, 940, 6907, 1967, 2987, 4300],
    [1013, 990, 940, 6907, 3000, 3456, 876],
]

class Bars extends Component {
    state = {
        settings: {
            margin: {
                top: 20,
                right: 20,
                bottom: 20,
                left: 20,
            },
            padAngle: 0.02,
            innerRadiusRatio: 0.96,
            innerRadiusOffset: 0.01,
            ribbonOpacity: 0.5,
            ribbonBorderWidth: 1,
            arcOpacity: 1,
            arcBorderWidth: 1,
            colors: 'nivo',
        },
    }

    handleSettingsUpdate = settings => {
        this.setState({ settings })
    }

    render() {
        const { data } = this.props
        const { settings } = this.state

        const code = generateCode('Chord', settings)

        const header = <ChartHeader chartClass="Chord" tags={['relational', 'isomorphic', 'api']} />

        return (
            <div className="page_content grid">
                <div className="chart-page_aside">
                    <MediaQuery query="(max-width: 1000px)">
                        {header}
                    </MediaQuery>
                    <div className="main-chart">
                        <ChartTabs chartClass="chord" code={code} data={matrix}>
                            <ResponsiveChord data={matrix} {...settings} />
                        </ChartTabs>
                    </div>
                </div>
                <div className="chart-page_main">
                    <MediaQuery query="(min-width: 1000px)">
                        {header}
                    </MediaQuery>
                    <p className="description">
                        Chord diagram, uses{' '}
                        <a
                            href="https://github.com/d3/d3-chord"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            d3-chord
                        </a>, see{' '}
                        <a
                            href="http://bl.ocks.org/mbostock/4062006"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            this block
                        </a>. The responsive alternative of this component is{' '}
                        <code>&lt;ResponsiveChord /&gt;</code>.
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
                            href={`${config.nivoApiUrl}/samples/chord`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            sample
                        </a>{' '}
                        or <Link to="/chord/api">try it using the API client</Link>.
                    </p>
                    <ChordControls
                        scope="Chord"
                        settings={settings}
                        onChange={this.handleSettingsUpdate}
                    />
                </div>
                <div className="grid_item grid_item-full">
                    <ComponentPropsDocumentation chartClass="Chord" properties={properties} />
                </div>
            </div>
        )
    }
}

export default Bars
