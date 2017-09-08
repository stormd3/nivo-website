/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { settingsMapper, mapAxis, mapInheritedColor } from '../../../lib/settings'

export default settingsMapper(
    {
        colorBy: value => {
            if (value === `({ id, data }) => data[\`\${id}Color\`]`)
                return ({ id, data }) => data[`${id}Color`]
            return value
        },
        axisTop: mapAxis('top'),
        axisRight: mapAxis('right'),
        axisBottom: mapAxis('bottom'),
        axisLeft: mapAxis('left'),
        labelTextColor: mapInheritedColor,
    },
    {
        exclude: ['enable axisTop', 'enable axisRight', 'enable axisBottom', 'enable axisLeft'],
    }
)
