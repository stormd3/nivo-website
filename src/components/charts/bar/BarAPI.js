/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { Component } from 'react'
import APIClient from '../../api-client/APIClient'
import BarControls from './BarControls'

class BarsAPI extends Component {
    render() {
        return (
            <APIClient
                componentName="Bar"
                apiPath="/charts/bar"
                dataProperty="data"
                controls={BarControls}
                defaultProps={{
                    width: 600,
                    height: 400,
                    margin: {
                        top: 40,
                        right: 50,
                        bottom: 40,
                        left: 50,
                    },
                    data: JSON.stringify(this.props.data, null, '  '),
                    colors: 'nivo',
                    colorBy: 'serie.id',
                    xPadding: 0.2,
                    groupMode: 'stacked',
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

export default BarsAPI
