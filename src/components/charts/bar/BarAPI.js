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
import BarControls from './BarControls'

export default class BarsAPI extends Component {
    render() {
        return (
            <APIClient
                componentName="Bar"
                apiPath="/charts/bar"
                dataProperty="data"
                controls={BarControls}
                defaultProps={{
                    width: 1200,
                    height: 500,
                    margin: {
                        top: 40,
                        right: 50,
                        bottom: 40,
                        left: 50,
                    },
                    data: JSON.stringify(this.props.data, null, '  '),
                    keys: this.props.keys,
                    indexBy: 'country',
                    colors: 'nivo',
                    colorBy: 'id',
                    xPadding: 0.2,
                    groupMode: 'stacked',
                    layout: 'vertical',
                    enableGridX: false,
                    enableGridY: true,
                    enableLabels: true,
                    labelsTextColor: 'inherit:darker(1.6)',
                    labelsLinkColor: 'inherit',
                }}
            />
        )
    }
}
