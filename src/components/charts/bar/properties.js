import React from 'react'
import dedent from 'dedent-js'
import { Bar } from 'nivo'
import { marginProperties, axesProperties } from '../../componentProperties'

const defaults = Bar.defaultProps

export default [
    {
        key: 'data',
        scopes: '*',
        description: (
            <div>
                Chart data, which must conform to this structure:
                <pre className="code code-block">
                    {dedent`
                        Array.<{
                            id: {string|number}
                            data: Array.<{ x: {string|number}, y: {number} }}>
                        }>
                    `}
                </pre>
            </div>
        ),
        type: 'see description',
        required: true,
    },
    {
        key: 'width',
        scopes: ['api'],
        description: (
            <span>
                not required if using&nbsp;<code>&lt;ResponsiveBar&nbsp;/&gt;</code>.
            </span>
        ),
        help: 'Chart width.',
        type: '{number}',
        required: true,
        controlType: 'range',
        controlGroup: 'Base',
        controlOptions: {
            unit: 'px',
            min: 100,
            max: 1000,
            step: 5,
        },
    },
    {
        key: 'height',
        scopes: ['api'],
        description: (
            <span>
                not required if using&nbsp;<code>&lt;ResponsiveBar&nbsp;/&gt;</code>.
            </span>
        ),
        help: 'Chart height.',
        type: '{number}',
        required: true,
        controlType: 'range',
        controlGroup: 'Base',
        controlOptions: {
            unit: 'px',
            min: 100,
            max: 1000,
            step: 5,
        },
    },
    {
        key: 'groupMode',
        scopes: '*',
        description: `How to group bars, must be one of: 'grouped', 'stacked'.`,
        type: '{string}',
        required: false,
        default: defaults.groupMode,
        controlType: 'choices',
        controlGroup: 'Base',
        controlOptions: {
            choices: [
                { label: 'stacked', value: 'stacked' },
                { label: 'grouped', value: 'grouped' },
            ],
        },
    },
    {
        key: 'colors',
        scopes: '*',
        description: 'Defines how to compute bars color.',
        type: '{string|Function|Array}',
        required: false,
        default: defaults.colors,
        controlType: 'colors',
        controlGroup: 'Base',
    },
    {
        key: 'colorBy',
        scopes: '*',
        description: 'Property to use to determine node color.',
        required: false,
        default: defaults.colorBy,
        controlType: 'choices',
        controlGroup: 'Base',
        controlOptions: {
            choices: [
                {
                    label: 'serie.id',
                    value: 'serie.id',
                },
                {
                    label: 'd => d.serie.color',
                    value: 'd => d.serie.color',
                },
                {
                    label: 'd => d.color',
                    value: 'd => d.color',
                },
            ],
        },
    },
    {
        key: 'xPadding',
        scopes: '*',
        description: 'Padding between each bar.',
        type: '{number}',
        required: false,
        default: defaults.xPadding,
        controlType: 'range',
        controlGroup: 'Base',
        controlOptions: {
            min: 0,
            max: 0.9,
            step: 0.05,
        },
    },
    ...marginProperties,
    {
        key: 'enableLabels',
        scopes: '*',
        description: 'Enable/disable labels.',
        type: '{boolean}',
        required: false,
        default: defaults.enableLabels,
        controlType: 'switch',
        controlGroup: 'Labels',
    },
    {
        key: 'labelsTextColor',
        scopes: '*',
        description: 'Defines how to compute label text color.',
        type: '{string|Function}',
        required: false,
        default: defaults.labelsTextColor,
        controlType: 'color',
        controlGroup: 'Labels',
    },
    {
        key: 'labelsLinkColor',
        scopes: '*',
        description: 'Defines how to compute label link color.',
        type: '{string|Function}',
        required: false,
        default: defaults.labelsLinkColor,
        controlType: 'color',
        controlGroup: 'Labels',
    },
    ...axesProperties,
    {
        key: 'enableGridX',
        scopes: '*',
        description: 'Enable/disable x grid.',
        type: '{boolean}',
        required: false,
        default: defaults.enableGridX,
        controlType: 'switch',
        controlGroup: 'Grid',
    },
    {
        key: 'enableGridY',
        scopes: '*',
        description: 'Enable/disable y grid.',
        type: '{boolean}',
        required: false,
        default: defaults.enableGridY,
        controlType: 'switch',
        controlGroup: 'Grid',
    },
    /*
    {
        name: 'Axes',
        controls: axesControls,
    },
    */
    {
        key: 'animate',
        scopes: ['Bar'],
        description: 'Enable/disable transitions.',
        type: '{boolean}',
        required: false,
        default: defaults.animate,
        controlType: 'switch',
        controlGroup: 'Animation',
    },
]
