/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react'
import APIClient from '../../api-client/APIClient'
import RadarControls from './RadarControls'

export default class RadarAPI extends Component {
    render() {
        return (
            <APIClient
                componentName="Radar"
                apiPath="/charts/radar"
                dataProperty="data"
                controls={RadarControls}
                defaultProps={{
                    width: 600,
                    height: 600,
                    data: JSON.stringify(this.props.data, null, '  '),
                    facets: this.props.facets,

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
                }}
            />
        )
    }
}
