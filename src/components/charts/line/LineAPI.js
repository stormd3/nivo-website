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
import LineControls from './LineControls'

class LineAPI extends Component {
    render() {
        return (
            <APIClient
                componentName="Line"
                apiPath="/charts/line"
                dataProperty="data"
                controls={LineControls}
                defaultProps={{
                    width: 600,
                    height: 400,
                    data: JSON.stringify(this.props.data, null, '  '),
                    margin: {
                        top: 40,
                        right: 50,
                        bottom: 40,
                        left: 50,
                    },

                    // axes
                    axes: {
                        top: {
                            enabled: false,
                            orient: 'top',
                            tickSize: 5,
                            tickPadding: 5,
                        },
                        right: {
                            enabled: false,
                            orient: 'right',
                            tickSize: 5,
                            tickPadding: 5,
                        },
                        bottom: {
                            enabled: true,
                            orient: 'bottom',
                            tickSize: 5,
                            tickPadding: 5,
                        },
                        left: {
                            enabled: true,
                            orient: 'left',
                            tickSize: 5,
                            tickPadding: 5,
                        },
                    },
                    enableGridX: true,
                    enableGridY: true,
                    stacked: true,

                    curve: 'linear',
                    colors: 'nivo',
                    colorBy: 'id',

                    // markers
                    enableMarkers: true,
                    markersSize: 14,
                    markersColor: 'inherit:darker(.5)',
                    markersBorderWidth: 3,
                    markersBorderColor: '#fff',

                    // motion
                    animate: false,
                }}
            />
        )
    }
}

export default LineAPI
