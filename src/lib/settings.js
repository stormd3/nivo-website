import _ from 'lodash'

export const settingsMapper = (mapping, { exclude = [] } = {}) => settings => {
    const overrides = {}

    Object.keys(settings).forEach(key => {
        if (mapping[key]) {
            overrides[key] = mapping[key](settings[key], settings)
        }
    })

    return Object.assign({}, _.omit(settings, exclude), overrides)
}
