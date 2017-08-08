import React from 'react'
import { Chord } from 'nivo'
import { marginProperties } from '../../componentProperties'

const defaults = Chord.defaultProps

export default [
    {
        key: 'width',
        scopes: ['api'],
        description: (
            <span>
                not required if using&nbsp;<code>&lt;ResponsiveChord&nbsp;/&gt;</code>.
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
                not required if using&nbsp;<code>&lt;ResponsiveChord&nbsp;/&gt;</code>.
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
        key: 'padAngle',
        scopes: '*',
        description: 'Padding angle.',
        required: false,
        default: defaults.padAngle,
        type: '{number}',
        controlType: 'range',
        controlGroup: 'Base',
        controlOptions: {
            min: 0,
            max: 1,
            step: 0.01,
        },
    },
    {
        key: 'colors',
        scopes: '*',
        description: 'Defines how to compute arc/ribbon color.',
        type: '{string|Function}',
        required: false,
        default: 'Nivo.defaults.colorRange',
        controlType: 'colors',
        controlGroup: 'Base',
    },
    ...marginProperties,
    {
        key: 'innerRadiusRatio',
        scopes: '*',
        description: 'Inner radius ratio.',
        required: false,
        default: defaults.innerRadiusRatio,
        type: '{number}',
        controlType: 'range',
        controlGroup: 'Radius',
        controlOptions: {
            min: 0,
            max: 1,
            step: 0.01,
        },
    },
    {
        key: 'innerRadiusOffset',
        scopes: '*',
        description: 'Inner radius offset.',
        required: false,
        default: defaults.innerRadiusOffset,
        type: '{number}',
        controlType: 'range',
        controlGroup: 'Radius',
        controlOptions: {
            min: 0,
            max: 1,
            step: 0.01,
        },
    },
    {
        key: 'ribbonOpacity',
        scopes: '*',
        description: 'Ribbons opacity.',
        required: false,
        default: defaults.ribbonOpacity,
        type: '{number}',
        controlType: 'range',
        controlGroup: 'Ribbons',
        controlOptions: {
            min: 0,
            max: 1,
            step: 0.05,
        },
    },
    {
        key: 'ribbonBorderWidth',
        scopes: '*',
        description: 'Ribbons border width.',
        required: false,
        default: defaults.ribbonBorderWidth,
        type: '{number}',
        controlType: 'range',
        controlGroup: 'Ribbons',
        controlOptions: {
            unit: 'px',
            min: 0,
            max: 12,
            step: 1,
        },
    },
    {
        key: 'arcOpacity',
        scopes: '*',
        description: 'Arcs opacity.',
        required: false,
        default: defaults.arcOpacity,
        type: '{number}',
        controlType: 'range',
        controlGroup: 'Arcs',
        controlOptions: {
            min: 0,
            max: 1,
            step: 0.05,
        },
    },
    {
        key: 'arcBorderWidth',
        scopes: '*',
        description: 'Arcs border width.',
        required: false,
        default: defaults.arcBorderWidth,
        type: '{number}',
        controlType: 'range',
        controlGroup: 'Arcs',
        controlOptions: {
            unit: 'px',
            min: 0,
            max: 12,
        },
    },
]
