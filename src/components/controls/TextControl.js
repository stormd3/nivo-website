import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TextControl extends Component {
    static propTypes = {
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        value: PropTypes.bool.isRequired,
        onChange: PropTypes.func.isRequired,
        help: PropTypes.string.isRequired,
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.value !== this.props.value
    }

    render() {
        const { id, label, value, onChange, help } = this.props

        return (
            <div className="chart-controls_item">
                <input id={id} type="text" checked={value} onChange={onChange} />
                <label htmlFor={id} />
                &nbsp;
                <label htmlFor={id}>{label}</label>
                <div className="control-help">{help}</div>
            </div>
        )
    }
}
