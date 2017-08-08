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
import BubbleControls from './BubbleControls'

class BubbleAPI extends Component {
    render() {
        return (
            <APIClient
                componentName="Bubble"
                apiPath="/charts/bubble"
                dataProperty="root"
                controls={BubbleControls}
                defaultProps={{
                    width: 600,
                    height: 600,
                    margin: {
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                    },
                    root: JSON.stringify(this.props.root, null, '  '),
                    identity: 'name',
                    value: 'loc',
                    colors: 'nivo',
                    colorBy: 'depth',
                    padding: 1,
                    enableLabel: true,
                    leavesOnly: false,
                    label: 'name',
                    labelSkipRadius: 8,
                    labelTextColor: 'inherit:darker(.8)',
                    labelTextDY: 4,
                    borderWidth: 0,
                    borderColor: 'inherit:darker(.3)',
                }}
            />
        )
    }
}

export default BubbleAPI
