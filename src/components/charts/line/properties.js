import React from 'react'
import dedent from 'dedent-js'
import {
    LineDefaultProps as defaults,
    lineCurvePropKeys,
    MarkersItemDefaultProps as markerDefaults,
} from 'nivo'
import { marginProperties, axesProperties } from '../../componentProperties'

const curveOptions = []
lineCurvePropKeys.forEach((curve, i) => {
    curveOptions.push(
        <code key={curve}>
            '{curve}'
        </code>
    )
    if (i < lineCurvePropKeys.length - 1) {
        curveOptions.push(<span key={`${curve}.comma`}>,&nbsp;</span>)
    }
})

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
                not required if using&nbsp;<code>&lt;ResponsiveLine&nbsp;/&gt;</code>.
            </span>
        ),
        help: 'Chart width (px).',
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
                not required if using&nbsp;<code>&lt;ResponsiveLine&nbsp;/&gt;</code>.
            </span>
        ),
        help: 'Chart height (px).',
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
        key: 'stacked',
        scopes: '*',
        description: 'Enable/disable stacked mode.',
        type: '{boolean}',
        required: false,
        default: defaults.stacked,
        controlType: 'switch',
        controlGroup: 'Base',
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
            choices: lineCurvePropKeys.map(key => ({
                label: key,
                value: key,
            })),
        },
    },
    {
        key: 'colors',
        scopes: '*',
        description: 'Defines how to compute line color.',
        type: '{string|Function}',
        required: false,
        default: defaults.colors,
        controlType: 'colors',
        controlGroup: 'Base',
    },
    {
        key: 'colorBy',
        scopes: '*',
        description: 'Property to use to determine line color.',
        required: false,
        default: defaults.colorBy,
        controlType: 'choices',
        controlGroup: 'Base',
        controlOptions: {
            choices: [
                {
                    label: 'id',
                    value: 'id',
                },
                {
                    label: 'd => d.color',
                    value: 'd => d.color',
                },
            ],
        },
    },
    ...marginProperties,
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
        default: defaults.markersSize,
        controlType: 'range',
        controlGroup: 'Markers',
        controlOptions: {
            unit: 'px',
            min: 2,
            max: 20,
        },
    },
    {
        key: 'markersColor',
        scopes: '*',
        description: 'Method to compute markers color.',
        type: '{string|Function}',
        required: false,
        default: defaults.markersColor,
        controlType: 'color',
        controlGroup: 'Markers',
    },
    {
        key: 'markersBorderWidth',
        description: 'Width of the markers border (px).',
        type: '{number}',
        required: false,
        default: defaults.markersBorderWidth,
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
        default: defaults.markersBorderColor,
        controlType: 'color',
        controlGroup: 'Markers',
    },
    {
        key: 'enableMarkersLabel',
        scopes: '*',
        description: 'Enable/disable markers label.',
        type: '{boolean}',
        required: false,
        default: defaults.enableMarkersLabel,
        controlType: 'switch',
        controlGroup: 'Markers',
    },
    {
        key: 'markersLabel',
        description:
            'Property to use to determine marker label. If a function is provided, it will receive current value and serie and must return a label.',
        type: '{string}',
        required: false,
        //default: markersDefaults.label,
        controlType: 'choices',
        controlGroup: 'Markers',
        controlOptions: {
            choices: ['y', 'x', 'serie.id', `d => \`\${d.x}: \${d.y}\``].map(choice => ({
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
    {
        key: 'isInteractive',
        scopes: ['Line'],
        description: 'Enable/disable interactivity.',
        type: '{boolean}',
        required: false,
        default: defaults.isInteractive,
        controlType: 'switch',
        controlGroup: 'Interactivity',
    },
    {
        key: 'enableStackTooltip',
        scopes: ['Line'],
        description: `Enable/disable stack tooltip ('isInteractive' must also be 'true').`,
        type: '{boolean}',
        required: false,
        default: defaults.enableStackTooltip,
        controlType: 'switch',
        controlGroup: 'Interactivity',
    },
    {
        key: 'animate',
        scopes: ['Line'],
        description: 'Enable/disable transitions. ',
        type: '{boolean}',
        required: false,
        default: defaults.animate,
        controlType: 'switch',
        controlGroup: 'Animation',
    },
]
