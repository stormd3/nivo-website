import React, { PureComponent } from 'react'
import _ from 'lodash'

const defaultValue = value => {
    if (_.isPlainObject(value)) {
        return `${JSON.stringify(value)}`
    } else if (_.isArray(value)) {
        return `[${value.join(', ')}}]`
    } else if (_.isString(value)) {
        return (
            <code className="code-string">
                '{value}'
            </code>
        )
    } else if (_.isNumber(value)) {
        return (
            <code className="code-number">
                {value}
            </code>
        )
    } else if (_.isBoolean(value)) {
        return (
            <code className="code-boolean">
                {value ? 'true' : 'false'}
            </code>
        )
    } else if (_.isFunction(value)) {
        return `{${value.toString()}}`
    }

    return value
}

export default class ComponentPropsTable extends PureComponent {
    render() {
        const { properties } = this.props

        return (
            <table>
                <thead>
                    <tr>
                        <th>property</th>
                        <th>type</th>
                        <th>required</th>
                        <th>default</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map(prop =>
                        <tr key={prop.key}>
                            <td>
                                {prop.key}
                            </td>
                            <td>
                                <code>
                                    {prop.type || 'n/a'}
                                </code>
                            </td>
                            <td>
                                {prop.required ? 'yes' : 'no'}
                            </td>
                            <td>
                                {prop.default !== undefined
                                    ? defaultValue(prop.default)
                                    : 'n/a'}
                            </td>
                            <td>
                                {prop.description}
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
}
