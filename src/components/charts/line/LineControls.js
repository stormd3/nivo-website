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
    Line: getPropertiesGroupsControls(properties, 'Line'),
    api: getPropertiesGroupsControls(properties, 'api'),
}

export default class LineControls extends PureComponent {
    static propTypes = {
        settings: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
        scope: PropTypes.oneOf(Object.keys(groupsByScope)).isRequired,
    }

    render() {
        const { settings, onChange, scope } = this.props

        const groups = groupsByScope[scope]

        return <ChartControls ns="line" settings={settings} onChange={onChange} groups={groups} />
    }
}
