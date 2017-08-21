/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import classNames from 'classnames'
import CollapsibleCard from '../CollapsibleCard'
import SliderControl from './SliderControl'
import SwitchControl from './SwitchControl'
import ColorsControl from './ColorsControl'
import ColorControl from './ColorControl'
import TextControl from './TextControl'
import Select from 'react-select'

export default class ChartControls extends Component {
    static propTypes = {
        settings: PropTypes.object.isRequired,
        onChange: PropTypes.func.isRequired,
        groups: PropTypes.array.isRequired,
        ns: PropTypes.string.isRequired,
        mapValues: PropTypes.object.isRequired,
    }

    static defaultProps = {
        mapValues: {},
    }

    constructor(props) {
        super(props)

        this.state = {
            openedGroup: props.group || 'Base',
        }
    }

    mapValue = (key, value) => {
        const { settings, mapValues } = this.props
        const mapper = _.get(mapValues, key)
        if (mapper === undefined) return value
        return mapper(value, settings)
    }

    handleGroupToggle = groupName => {
        this.setState({ openedGroup: groupName })
    }

    handleSwitchUpdate = key => e => {
        const { onChange, settings } = this.props
        onChange(_.merge({}, settings, _.set({}, key, e.target.checked)))
    }

    handleRangeUpdate = key => e => {
        const { onChange, settings } = this.props
        onChange(_.merge({}, settings, _.set({}, key, Number(e.target.value))))
    }

    handleTextUpdate = key => e => {
        const { onChange, settings } = this.props
        onChange(_.merge({}, settings, _.set({}, key, e.target.value)))
    }

    handleDirectUpdate = key => value => {
        const { onChange, settings } = this.props
        onChange(_.merge({}, settings, _.set({}, key, value)))
    }

    handleSelectUpdate = key => value => {
        const { onChange, settings } = this.props
        onChange(_.merge({}, settings, _.set({}, key, value.value)))
    }

    renderControl(groupName, config) {
        const { ns, settings } = this.props

        const id = `${ns}-${_.snakeCase(groupName)}-${config.name}`

        switch (config.type) {
            case 'choices':
                return (
                    <div className="chart-controls_item" key={config.name}>
                        <label className="control_label" htmlFor={id}>
                            {config.name}:&nbsp;<code className="code code-string">
                                "{_.get(settings, config.name)}"
                            </code>
                        </label>
                        <Select
                            id={id}
                            name={id}
                            value={_.get(settings, config.name)}
                            options={config.choices}
                            clearable={false}
                            onChange={this.handleSelectUpdate(config.name)}
                        />
                        <div className="control-help">
                            {config.help}
                        </div>
                    </div>
                )

            case 'range':
                return (
                    <SliderControl
                        {..._.pick(config, ['min', 'max', 'unit', 'step', 'help'])}
                        key={config.name}
                        id={id}
                        label={config.name}
                        value={_.get(settings, config.name)}
                        onChange={this.handleRangeUpdate(config.name)}
                    />
                )

            case 'switch':
                return (
                    <SwitchControl
                        key={config.name}
                        id={id}
                        label={config.name}
                        value={_.get(settings, config.name)}
                        onChange={this.handleSwitchUpdate(config.name)}
                        help={config.help}
                    />
                )

            case 'text':
                return (
                    <TextControl
                        key={config.name}
                        id={id}
                        label={config.name}
                        value={_.get(settings, config.name)}
                        onChange={this.handleTextUpdate(config.name)}
                        help={config.help}
                    />
                )

            case 'colors':
                return (
                    <div className="chart-controls_item" key={config.name}>
                        <ColorsControl
                            value={_.get(settings, config.name)}
                            onChange={this.handleDirectUpdate(config.name)}
                        />
                    </div>
                )

            case 'color':
                return (
                    <div className="chart-controls_item" key={config.name}>
                        <ColorControl
                            label={config.name}
                            help={config.help}
                            value={_.get(settings, config.name)}
                            onChange={this.handleDirectUpdate(config.name)}
                        />
                    </div>
                )

            default:
                return null
        }
    }

    render() {
        const { groups: _groups, scope } = this.props
        const { openedGroup } = this.state

        const groups = _groups.filter(group => {
            return !group.scopes || group.scopes.includes(scope)
        })

        return (
            <CollapsibleCard title="Settings" expandedByDefault={true}>
                <div className="chart-controls_menu">
                    {groups.map(group => {
                        return (
                            <div
                                key={group.name}
                                className={classNames('chart-controls_menu_item', {
                                    active: openedGroup === group.name,
                                })}
                                onClick={e => {
                                    this.handleGroupToggle(group.name)
                                }}
                            >
                                {group.name}
                            </div>
                        )
                    })}
                </div>
                {groups.map(group => {
                    return (
                        <div
                            key={group.name}
                            style={{
                                display: openedGroup === group.name ? 'block' : 'none',
                            }}
                        >
                            <div className="chart-controls">
                                {group.controls.map(control =>
                                    this.renderControl(group.name, control)
                                )}
                            </div>
                        </div>
                    )
                })}
            </CollapsibleCard>
        )
    }
}
