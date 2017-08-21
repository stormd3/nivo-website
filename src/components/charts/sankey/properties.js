/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import dedent from 'dedent-js'
import { SankeyDefaultProps as defaults } from 'nivo'
import { marginProperties } from '../../../lib/componentProperties'

export default [
    {
        key: 'data',
        scopes: '*',
        description: (
            <div>
                Chart data, which must conform to this structure:
                <pre className="code code-block">
                    {dedent`
                        {
                            nodes: Array.<{
                                id: {string|number}
                            }>,
                            links: Array.<{
                                source: {string|number}, // ref to node id
                                target: {string|number}, // ref to node id
                                value: {number}
                            }}>
                        }
                    `}
                </pre>
            </div>
        ),
        type: '{Object}',
        required: true,
    },
    {
        key: 'width',
        scopes: ['api'],
        description: (
            <span>
                not required if using&nbsp;<code>&lt;ResponsiveSankey&nbsp;/&gt;</code>.
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
                not required if using&nbsp;<code>&lt;ResponsiveSankey&nbsp;/&gt;</code>.
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
        key: 'colors',
        scopes: '*',
        description: 'Defines how to compute nodes color.',
        type: '{string|Function|Array}',
        required: false,
        default: 'nivo',
        controlType: 'colors',
        controlGroup: 'Nodes',
    },
    {
        key: 'nodeOpacity',
        scopes: '*',
        description: 'Node opacity (0~1).',
        required: false,
        default: defaults.nodeOpacity,
        type: '{number}',
        controlType: 'range',
        controlGroup: 'Nodes',
        controlOptions: {
            min: 0,
            max: 1,
            step: 0.05,
        },
    },
    {
        key: 'nodeWidth',
        scopes: '*',
        description: 'Node width (px).',
        required: false,
        default: defaults.nodeWidth,
        type: '{number}',
        controlType: 'range',
        controlGroup: 'Nodes',
        controlOptions: {
            unit: 'px',
            min: 2,
            max: 100,
        },
    },
    {
        key: 'nodePadding',
        scopes: '*',
        description: 'Node padding (px).',
        required: false,
        default: defaults.nodePadding,
        type: '{number}',
        controlType: 'range',
        controlGroup: 'Nodes',
        controlOptions: {
            unit: 'px',
            min: 0,
            max: 60,
        },
    },
    {
        key: 'nodeBorderWidth',
        scopes: '*',
        description: 'Node border width (px).',
        required: false,
        default: defaults.nodeBorderWidth,
        type: '{number}',
        controlType: 'range',
        controlGroup: 'Nodes',
        controlOptions: {
            unit: 'px',
            min: 0,
            max: 10,
        },
    },
    {
        key: 'nodeBorderColor',
        scopes: '*',
        description: (
            <span>
                how to compute node border color,{' '}
                <Link to="/guides/colors">see dedicated documentation</Link>.
            </span>
        ),
        help: 'Method to compute node border color.',
        type: '{string|Function}',
        required: false,
        default: defaults.nodeBorderColor,
        controlType: 'color',
        controlGroup: 'Nodes',
    },
    {
        key: 'linkOpacity',
        scopes: '*',
        description: 'Link opacity (0~1).',
        required: false,
        default: defaults.linkOpacity,
        type: '{number}',
        controlType: 'range',
        controlGroup: 'Links',
        controlOptions: {
            min: 0,
            max: 1,
            step: 0.05,
        },
    },
    ...marginProperties,
    {
        key: 'animate',
        scopes: ['Sankey'],
        description: 'Enable/disable transitions.',
        type: '{boolean}',
        required: false,
        default: true,
        controlType: 'switch',
        controlGroup: 'Animation',
    },
]
