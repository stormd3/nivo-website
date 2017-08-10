import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MediaQuery from 'react-responsive'
import ChartHeader from '../../ChartHeader'
import ChartTabs from '../../ChartTabs'
import RadarControls from './RadarControls'
import { ResponsiveRadar } from 'nivo'
import generateCode from '../../../generateChartCode'
import ComponentPropsDocumentation from '../../ComponentPropsDocumentation'
import properties from './properties'
import { settingsMapper } from '../../../lib/settings'

const mapSettings = settingsMapper({
    colorBy: value => {
        if (value === 'd => d.color') return d => d.color
        return value
    },
    markersLabel: value => {
        if (value === `d => \`\${d.facet}: \${d.value}\``) return d => `${d.facet}: ${d.value}`
        if (value === `d => \`\${d.serie.id}: \${d.value}\``)
            return d => `${d.serie.id}: ${d.value}`
        return value
    },
})

export default class Radar extends Component {
    static propTypes = {
        facets: PropTypes.arrayOf(PropTypes.string).isRequired,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.string.isRequired,
                data: PropTypes.arrayOf(PropTypes.number).isRequired,
            })
        ),
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
            colorBy: 'id',
            fillOpacity: 0.1,

            animate: true,
            motionStiffness: 90,
            motionDamping: 15,
        },
    }

    handleSettingsUpdate = settings => {
        this.setState({ settings })
    }

    render() {
        const { data, facets, diceRoll } = this.props
        const { settings } = this.state

        const mappedSettings = mapSettings(settings)

        const code = generateCode('Radar', {
            facets,
            ...mappedSettings,
        })

        const header = (
            <ChartHeader
                chartClass="Radar"
                tags={['radar', 'radial', 'circle']}
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
                            <ResponsiveRadar facets={facets} data={data} {...mappedSettings} />
                        </ChartTabs>
                    </div>
                </div>
                <div className="chart-page_main">
                    <MediaQuery query="(min-width: 1000px)">
                        {header}
                    </MediaQuery>
                    <p>
                        Generates a radar chart from an array of data series having an id and an
                        array of values, it also requires an array of facets, it will compute the
                        radial shape for each data serie.<br />
                        Note that margin object does not take grid labels into account,&nbsp; so you
                        should adjust it to leave enough room for it.
                    </p>
                    <p className="description">
                        The responsive alternative of this component is&nbsp;
                        <code>&lt;ResponsiveRadar /&gt;</code>.
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
