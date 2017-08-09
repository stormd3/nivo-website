/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import ChartControls from '../../controls/ChartControls'
import { getPropertiesGroupsControls } from '../../componentProperties'
import properties from './properties'

const groupsByScope = {
    Bubble: getPropertiesGroupsControls(properties, 'Bubble'),
    BubblePlaceholders: getPropertiesGroupsControls(properties, 'BubblePlaceholders'),
    api: getPropertiesGroupsControls(properties, 'api'),
}

export default class BubbleControls extends PureComponent {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        settings: PropTypes.object.isRequired,
        scope: PropTypes.oneOf(Object.keys(groupsByScope)).isRequired,
    }

    render() {
        const { settings, scope, onChange } = this.props

        const groups = groupsByScope[scope]

        return (
            <ChartControls
                ns="bubble"
                scope={scope}
                settings={settings}
                onChange={onChange}
                groups={groups}
            />
        )
    }
}
