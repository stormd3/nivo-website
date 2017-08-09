import React from 'react'
import { Link } from 'react-router-dom'
import { Bubble } from 'nivo'
import { marginProperties } from '../../componentProperties'

const defaults = Bubble.defaultProps

/*
[
    [
        'value',
        'string|function',
        true,
        <code className="code-string">"value"</code>,
        <span>
            define value accessor, if string given, will
            use <code>datum[value]</code>,<br />if
            function given, it will be invoked for each
            node and will receive the node as first
            argument, it must the node value.
        </span>,
    ],
    [
        'borderColor',
        'any',
        true,
        <code className="code-string">"inherit"</code>,
        <span>
            how to compute border color,{' '}
            <Link to="/guides/colors">
                see dedicated documentation
            </Link>.
        </span>,
    ],
    [
        'label',
        'string',
        true,
        <code className="code-string">"name"</code>,
        '',
    ],
    [
        'labelFormat',
        'string',
        false,
        '',
        <span>
            how to format label,{' '}
            <a
                href="https://github.com/mbostock/d3/wiki/Formatting#d3_format"
                target="_blank"
                rel="noopener noreferrer"
            >
                see d3.format() documentation
            </a>.
        </span>,
    ],
    [
        'labelTextColor',
        'any',
        true,
        <code className="code-string">"none"</code>,
        <span>
            how to compute text color,{' '}
            <Link to="/guides/colors">
                see dedicated documentation
            </Link>.
        </span>,
    ],
]
[
        'width',
        'height',
        [
            'root',
            'object',
            true,
            '',
            'the hierarchical data object.',
        ],
        [
            'value',
            'string|function',
            true,
            <code className="code-string">"value"</code>,
            <span>
                define value accessor, if string given, will
                use <code>datum[value]</code>,<br />if
                function given, it will be invoked for each
                node and will receive the node as first
                argument, it must the node value.
            </span>,
        ],
        [
            'namespace',
            'string',
            true,
            <code className="code-string">"html"</code>,
            <span>
                must be one of{' '}
                <code className="code-string">
                    "html"
                </code>{' '}
                or{' '}
                <code className="code-string">"svg"</code>,<br />when{' '}
                <code className="code-string">
                    "html"
                </code>{' '}
                used, the surrounding elements will be{' '}
                <code>&lt;div/&gt;</code> tags,<br />for{' '}
                <code className="code-string">"svg"</code>,
                you'll have a <code>&lt;g/&gt;</code> tag
                wrapped inside an <code>&lt;svg/&gt;</code>{' '}
                tag.
            </span>,
        ],
        [
            'padding',
            'number',
            true,
            <code className="code-number">1</code>,
            <span>
                sets the approximate padding between
                adjacent circles, in pixels. see{' '}
                <a
                    href="https://github.com/mbostock/d3/wiki/Pack-Layout#padding"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    official d3 documentation
                </a>.
            </span>,
        ],
        [
            'colors',
            '*',
            true,
            <code>Nivo.defaults.colorRange</code>,
            <span>
                colors used to colorize the circles,{' '}
                <Link to="/guides/colors">
                    see dedicated documentation
                </Link>.
            </span>,
        ],
        'animate',
        'motionStiffness',
        'motionDamping',
    ]}
 */

export default [
    {
        key: 'root',
        scopes: '*',
        description: 'The hierarchical data object.',
        type: '{Object}',
        required: true,
    },
    {
        key: 'width',
        scopes: ['api'],
        description: (
            <span>
                not required if using&nbsp;<code>&lt;ResponsiveBubble&nbsp;/&gt;</code>.
            </span>
        ),
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
                not required if using&nbsp;<code>&lt;ResponsiveBubble&nbsp;/&gt;</code>.
            </span>
        ),
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
        key: 'leavesOnly',
        scopes: '*',
        description: 'Only render leaf nodes (skip parent nodes).',
        type: '{boolean}',
        required: false,
        default: defaults.leavesOnly,
        controlType: 'switch',
        controlGroup: 'Base',
    },
    {
        key: 'colors',
        scopes: '*',
        description: (
            <span>
                colors used to colorize the circles,{' '}
                <Link to="/guides/colors">see dedicated documentation</Link>.
            </span>
        ),
        help: 'Defines how to compute node color.',
        required: false,
        default: 'Nivo.defaults.colorRange',
        controlType: 'colors',
        controlGroup: 'Base',
    },
    {
        key: 'colorBy',
        scopes: '*',
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
                    label: 'depth',
                    value: 'depth',
                },
                {
                    label: 'name',
                    value: 'name',
                },
                {
                    label: 'd => d.color',
                    value: 'd => d.color',
                },
            ],
        },
    },
    {
        key: 'padding',
        scopes: '*',
        description: (
            <span>
                sets the approximate padding between adjacent circles, in pixels. see{' '}
                <a
                    href="https://github.com/mbostock/d3/wiki/Pack-Layout#padding"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    official d3 documentation
                </a>.
            </span>
        ),
        help: 'Padding between each circle (animated).',
        type: '{number}',
        required: false,
        default: defaults.padding,
        controlType: 'range',
        controlGroup: 'Base',
        controlOptions: {
            unit: 'px',
            min: 0,
            max: 32,
        },
    },
    ...marginProperties,
    {
        key: 'borderWidth',
        scopes: ['Bubble', 'api'],
        description: 'Width of circle border.',
        type: '{number}',
        required: false,
        default: defaults.borderWidth,
        controlType: 'range',
        controlGroup: 'Border',
        controlOptions: {
            unit: 'px',
            min: 0,
            max: 10,
        },
    },
    {
        key: 'borderColor',
        scopes: ['Bubble', 'api'],
        description: 'Method to compute border color.',
        type: '{string|Function}',
        required: false,
        default: defaults.borderColor,
        controlType: 'color',
        controlGroup: 'Border',
    },
    {
        key: 'enableLabel',
        scopes: ['Bubble', 'api'],
        description: 'Enable/disable labels.',
        type: '{boolean}',
        required: false,
        default: defaults.enableLabel,
        controlType: 'switch',
        controlGroup: 'Labels',
    },
    {
        key: 'labelTextDY',
        scopes: ['Bubble', 'api'],
        description: 'Label y offset, used to vertically center text.',
        type: '{number}',
        required: false,
        default: defaults.labelTextDY,
        controlType: 'range',
        controlGroup: 'Labels',
        controlOptions: {
            unit: 'px',
            min: -12,
            max: 12,
        },
    },
    {
        key: 'labelTextColor',
        scopes: ['Bubble', 'api'],
        description: 'Method to compute label text color.',
        type: '{string|Function}',
        required: false,
        default: defaults.labelTextColor,
        controlType: 'color',
        controlGroup: 'Labels',
    },
    {
        key: 'labelSkipRadius',
        scopes: ['Bubble', 'api'],
        description: 'Skip label rendering if node radius is lower than given value, 0 to disable.',
        type: '{number}',
        required: false,
        default: defaults.labelSkipRadius,
        controlType: 'range',
        controlGroup: 'Labels',
        controlOptions: {
            unit: 'px',
            min: 0,
            max: 32,
        },
    },
    {
        key: 'animate',
        scopes: ['Bubble', 'BubblePlaceholders'],
        description: 'Enable/disable transitions.',
        type: '{boolean}',
        required: false,
        default: true,
        controlType: 'switch',
        controlGroup: 'Animation',
    },
]
