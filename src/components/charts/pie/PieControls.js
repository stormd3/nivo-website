import React, { Component } from 'react'
import ChartControls from '../../controls/ChartControls'
import { getPropertiesGroupsControls } from '../../componentProperties'
import properties from './properties'

export default class PieControls extends Component {
    render() {
        const { scope, settings, onChange } = this.props

        const groups = getPropertiesGroupsControls(properties, scope)

        return (
            <ChartControls
                ns="bar"
                scope={scope}
                settings={settings}
                onChange={onChange}
                groups={groups}
            />
        )
    }
}
