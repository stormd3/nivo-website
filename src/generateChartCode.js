/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import _ from 'lodash'

const generate = (name, props, children = []) => {
    const properties = []
    _.forOwn(props, (_value, key) => {
        if (_value === undefined) return

        let value
        if (_.isPlainObject(_value)) {
            value = `{${JSON.stringify(_value)}`
        } else if (_.isArray(_value)) {
            value = `{[${_value.join(', ')}}]`
        } else if (_.isString(_value)) {
            value = `"${_value}"`
        } else if (_.isBoolean(_value)) {
            value = `{${_value ? 'true' : 'false'}}`
        } else if (_.isNumber(_value)) {
            value = `{${_value}}`
        } else if (_.isFunction(_value)) {
            value = `{${_value.toString()}}`
        } else {
            value = _value
        }

        properties.push(`${key}=${value}`)
    })

    const imports = [name, ...children.map(([c]) => c)].map(
        i => `import { ${i} } from 'nivo'`
    )

    return `import { render } from 'react-dom'
${imports.join('\n')}

render((
    <${name}
        ${properties.join('\n        ')}
    />
), document.getElementById('chart'))`
}

export default generate
