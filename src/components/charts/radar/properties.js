/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react'
import dedent from 'dedent-js'
import {
    RadarDefaultProps as defaults,
    RadarMarkers,
    closedCurvePropKeys,
    MarkersItemDefaultProps as markerDefaults,
} from 'nivo'
import { marginProperties } from '../../../lib/componentProperties'

const markersDefaults = RadarMarkers.defaultProps

const curveOptions = []
closedCurvePropKeys.forEach((curve, i) => {
    curveOptions.push(
        <code key={curve}>
            '{curve}'
        </code>
    )
    if (i < closedCurvePropKeys.length - 1) {
        curveOptions.push(<span key={`${curve}.comma`}>,&nbsp;</span>)
    }
})

export default [
    {
        key: 'data',
        scopes: '*',
        description: (
            <div>
                Chart data. If using objects indexBy & keys should be strings, if using array they
                should be numbers.<br />
                For example, given this config:
                <pre className="code code-block">{dedent`
                [
                  { language: 'javascript', john: 12, sarah: 32, bob: 27 },
                  { language: 'golang', john: 25, sarah: 15, bob: 3 },
                  { language: 'python', john: 5, sarah: 22, bob: 31 },
                  { language: 'java', john: 19, sarah: 17, bob: 9 }
                ]
                keys: ['john', 'sarah', 'bob']
                indexBy: 'language'
                `}</pre>
                We'll have a radar chart representing programing skills for each user by language (3
                layers and 4 dimensions).
            </div>
        ),
        type: '{Array.<Object|Array>}',
        required: true,
    },
    {
        key: 'indexBy',
        scopes: '*',
        description: 'Key to use to index the data, this key must exist in each data item.',
        type: '{string|number}',
        required: false,
        default: defaults.indexBy,
    },
    {
        key: 'keys',
        scopes: '*',
        description:
            'Keys to use to determine each serie. Those keys should exist in each data item.',
        type: '{Array.<string|number>}',
        required: false,
        default: defaults.keys,
    },
    {
        key: 'width',
        scopes: ['api'],
        description: (
            <span>
                not required if using&nbsp;<code>&lt;ResponsiveRadar&nbsp;/&gt;</code>.
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
                not required if using&nbsp;<code>&lt;ResponsiveRadar&nbsp;/&gt;</code>.
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
        key: 'curve',
        scopes: '*',
        description: (
            <span>
                Defines the curve factory to use for the line generator.<br />
                Must be one of: {curveOptions}.
            </span>
        ),
        help: 'Curve interpolation.',
        type: '{string}',
        required: false,
        default: defaults.curve,
        controlType: 'choices',
        controlGroup: 'Base',
        controlOptions: {
            choices: closedCurvePropKeys.map(key => ({
                label: key,
                value: key,
            })),
        },
    },
    {
        key: 'colors',
        description: 'Defines how to compute slice color.',
        type: '{string|Function|Array}',
        required: false,
        default: 'nivo',
        controlType: 'colors',
        controlGroup: 'Base',
    },
    {
        key: 'colorBy',
        description: (
            <span>
                Property to use to determine node color.<br />
                If a function is provided, it will receive current node data and must return a
                color.<br />
                By default it will use the key of each serie and pick a color from colors according
                to this key.
            </span>
        ),
        type: '{string|Function}',
        required: false,
        default: 'key',
        controlType: 'choices',
        controlGroup: 'Base',
        controlOptions: {
            choices: [
                {
                    label: 'key',
                    value: 'key',
                },
            ],
        },
    },
    {
        key: 'fillOpacity',
        description: 'Shape fill opacity.',
        type: '{number}',
        required: false,
        default: defaults.borderWidth,
        controlType: 'range',
        controlGroup: 'Base',
        controlOptions: {
            min: 0,
            max: 1,
            step: 0.05,
        },
    },
    {
        key: 'borderWidth',
        description: 'Shape border width (px).',
        type: '{number}',
        required: false,
        default: defaults.borderWidth,
        controlType: 'range',
        controlGroup: 'Base',
        controlOptions: {
            unit: 'px',
            min: 0,
            max: 12,
            step: 1,
        },
    },
    {
        key: 'borderColor',
        description: 'Method to compute border color.',
        type: '{string|Function}',
        required: false,
        default: defaults.borderColor,
        controlType: 'color',
        controlGroup: 'Base',
    },
    ...marginProperties,
    {
        key: 'gridLevels',
        description: 'Number of levels to display for grid',
        type: '{number}',
        required: false,
        default: defaults.gridLevels,
        controlType: 'range',
        controlGroup: 'Grid',
        controlOptions: {
            min: 1,
            max: 12,
        },
    },
    {
        key: 'gridShape',
        description: 'Determine shape of the grid, must be one of: circular, linear.',
        help: 'Determine shape of the grid.',
        type: '{string}',
        required: false,
        default: defaults.gridShape,
        controlType: 'choices',
        controlGroup: 'Grid',
        controlOptions: {
            choices: [
                { label: 'circular', value: 'circular' },
                { label: 'linear', value: 'linear' },
            ],
        },
    },
    {
        key: 'gridLabelOffset',
        description: 'Label offset from outer radius (px).',
        type: '{number}',
        required: false,
        default: defaults.gridLabelOffset,
        controlType: 'range',
        controlGroup: 'Grid',
        controlOptions: {
            unit: 'px',
            min: 0,
            max: 60,
        },
    },
    {
        key: 'enableMarkers',
        scopes: '*',
        description: 'Enable/disable markers.',
        type: '{boolean}',
        required: false,
        default: defaults.enableMarkers,
        controlType: 'switch',
        controlGroup: 'Markers',
    },
    {
        key: 'markersSize',
        description: 'Size of the markers (px).',
        type: '{number}',
        required: false,
        default: markersDefaults.size,
        controlType: 'range',
        controlGroup: 'Markers',
        controlOptions: {
            unit: 'px',
            min: 2,
            max: 64,
        },
    },
    {
        key: 'markersColor',
        scopes: '*',
        description: 'Method to compute markers color.',
        type: '{string|Function}',
        required: false,
        default: markersDefaults.color,
        controlType: 'color',
        controlGroup: 'Markers',
    },
    {
        key: 'markersBorderWidth',
        description: 'Width of the markers border (px).',
        type: '{number}',
        required: false,
        default: markersDefaults.borderWidth,
        controlType: 'range',
        controlGroup: 'Markers',
        controlOptions: {
            unit: 'px',
            min: 0,
            max: 10,
        },
    },
    {
        key: 'markersBorderColor',
        scopes: '*',
        description: 'Method to compute markers border color.',
        type: '{string|Function}',
        required: false,
        default: markersDefaults.borderColor,
        controlType: 'color',
        controlGroup: 'Markers',
    },
    {
        key: 'enableMarkersLabel',
        scopes: '*',
        description: 'Enable/disable markers label.',
        type: '{boolean}',
        required: false,
        default: markersDefaults.enableLabel,
        controlType: 'switch',
        controlGroup: 'Markers',
    },
    {
        key: 'markersLabel',
        description:
            'Property to use to determine marker label. If a function is provided, it will receive current value and serie and must return a label.',
        type: '{string}',
        required: false,
        default: markersDefaults.label,
        controlType: 'choices',
        controlGroup: 'Markers',
        controlOptions: {
            choices: [
                'value',
                'index',
                'key',
                `d => \`\${d.key}: \${d.value}\``,
                `d => \`\${d.index}: \${d.value}\``,
            ].map(choice => ({
                label: choice,
                value: choice,
            })),
        },
    },
    {
        key: 'markersLabelYOffset',
        description: 'Label Y offset from marker shape (px).',
        type: '{number}',
        required: false,
        default: markerDefaults.labelYOffset,
        controlType: 'range',
        controlGroup: 'Markers',
        controlOptions: {
            unit: 'px',
            min: -24,
            max: 24,
        },
    },
    {
        key: 'isInteractive',
        scopes: ['Radar'],
        description: 'Enable/disable interactivity.',
        type: '{boolean}',
        required: false,
        default: defaults.isInteractive,
        controlType: 'switch',
        controlGroup: 'Interactivity',
    },
    {
        key: 'animate',
        scopes: ['Radar'],
        description: 'Enable/disable transitions using react-motion.',
        type: '{boolean}',
        required: false,
        default: true,
        controlType: 'switch',
        controlGroup: 'Animation',
    },
]
