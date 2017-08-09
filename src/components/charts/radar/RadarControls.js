import React, { PureComponent } from 'react'
import ChartControls from '../../controls/ChartControls'
import { getPropertiesGroupsControls } from '../../componentProperties'
import properties from './properties'

const groupsByScope = {
    Radar: getPropertiesGroupsControls(properties, 'Radar'),
}

export default class RadarControls extends PureComponent {
    render() {
        const { scope, settings, onChange } = this.props

        const groups = groupsByScope[scope]

        return (
            <ChartControls
                ns="radar"
                scope={scope}
                settings={settings}
                onChange={onChange}
                groups={groups}
            />
        )
    }
}
