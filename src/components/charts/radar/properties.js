import React from 'react'
import {
    RadarDefaultProps as defaults,
    RadarMarkers,
    closedCurvePropKeys,
} from 'nivo'
import { marginProperties } from '../../componentProperties'

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
        key: 'width',
        scopes: ['api'],
        description: (
            <span>
                not required if using&nbsp;<code>&lt;ResponsivePie&nbsp;/&gt;</code>.
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
                not required if using&nbsp;<code>&lt;ResponsivePie&nbsp;/&gt;</code>.
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
        required: false,
        default: 'Nivo.defaults.colorRange',
        controlType: 'colors',
        controlGroup: 'Base',
    },
    {
        key: 'colorBy',
        description:
            'Property to use to determine node color. If a function is provided, it will receive current node data and must return a color',
        type: '{string|Function}',
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
        description: 'Shape border width.',
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
        description:
            'Determine shape of the grid, must be one of: circular, linear.',
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
        description: 'Label offset from outer radius.',
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
        description: 'Size of the markers.',
        type: '{number}',
        required: false,
        default: markersDefaults.size,
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
        default: markersDefaults.color,
        controlType: 'color',
        controlGroup: 'Markers',
    },
    {
        key: 'markersBorderWidth',
        description: 'Width of the markers border.',
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
        key: 'animate',
        description: 'Enable/disable transitions.',
        type: '{boolean}',
        required: false,
        default: defaults.animate,
        controlType: 'switch',
        controlGroup: 'Animation',
    },
]
