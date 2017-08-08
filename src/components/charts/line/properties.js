import React from 'react'
import { Line, LineDefaultProps as defaults, curvePropKeys } from 'nivo'
import { marginProperties, axesProperties } from '../../componentProperties'

const curveOptions = []
curvePropKeys.forEach((curve, i) => {
    curveOptions.push(
        <code key={curve}>
            '{curve}'
        </code>
    )
    if (i < curvePropKeys.length - 1) {
        curveOptions.push(<span key={`${curve}.comma`}>,&nbsp;</span>)
    }
})

export default [
    // ['data', 'array', true, '', <div>The chart data.</div>],
    {
        key: 'width',
        scopes: ['api'],
        description: (
            <span>
                not required if using&nbsp;<code>&lt;ResponsiveLine&nbsp;/&gt;</code>.
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
                not required if using&nbsp;<code>&lt;ResponsiveLine&nbsp;/&gt;</code>.
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
            choices: curvePropKeys.map(key => ({
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
        default: 'Nivo.defaults.colorRange',
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
        description: 'Size of the markers.',
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
        description: 'Width of the markers border.',
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
        key: 'animate',
        scopes: ['Line'],
        description: 'Enable/disable transitions.',
        type: '{boolean}',
        required: false,
        default: defaults.animate,
        controlType: 'switch',
        controlGroup: 'Animation',
    },
]
