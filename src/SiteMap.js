/*
 * This file is part of the nivo project.
 *
 * (c) 2016-today Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React from 'react'
import { Route } from 'react-router-dom'

import BarPage from './components/charts/bar/BarPage'
import Bar from './components/charts/bar/Bar'
import BarCanvas from './components/charts/bar/BarCanvas'
import BarAPI from './components/charts/bar/BarAPI'
import HeatMapPage from './components/charts/heatmap/HeatMapPage'
import HeatMap from './components/charts/heatmap/HeatMap'
import HeatMapCanvas from './components/charts/heatmap/HeatMapCanvas'
import HeatMapAPI from './components/charts/heatmap/HeatMapAPI'
import LinePage from './components/charts/line/LinePage'
import Line from './components/charts/line/Line'
import LineAPI from './components/charts/line/LineAPI'
import StreamPage from './components/charts/stream/StreamPage'
import Stream from './components/charts/stream/Stream'
import PiePage from './components/charts/pie/PiePage'
import Pie from './components/charts/pie/Pie'
import PieAPI from './components/charts/pie/PieAPI'
import RadarPage from './components/charts/radar/RadarPage'
import Radar from './components/charts/radar/Radar'
import RadarAPI from './components/charts/radar/RadarAPI'
import BubblePage from './components/charts/bubble/BubblePage'
import Bubble from './components/charts/bubble/Bubble'
import BubbleAPI from './components/charts/bubble/BubbleAPI'
import BubblePlaceholders from './components/charts/bubble/BubblePlaceholders'
import SankeyPage from './components/charts/sankey/SankeyPage'
import Sankey from './components/charts/sankey/Sankey'
import SankeyAPI from './components/charts/sankey/SankeyAPI'
import SunburstPage from './components/charts/sunburst/SunburstPage'
import Sunburst from './components/charts/sunburst/Sunburst'
import SunburstAPI from './components/charts/sunburst/SunburstAPI'
import TreeMapPage from './components/charts/treemap/TreeMapPage'
import TreeMapReact from './components/charts/treemap/TreeMapReact'
import TreeMapHTML from './components/charts/treemap/TreeMapHTML'
import TreeMapPlaceholders from './components/charts/treemap/TreeMapPlaceholders'
import TreeMapAPI from './components/charts/treemap/TreeMapAPI'
import CalendarPage from './components/charts/calendar/CalendarPage'
import Calendar from './components/charts/calendar/Calendar'
import CalendarAPI from './components/charts/calendar/CalendarAPI'
import ChordPage from './components/charts/chord/ChordPage'
import Chord from './components/charts/chord/Chord'
import ChordCanvas from './components/charts/chord/ChordCanvas'
import ChordAPI from './components/charts/chord/ChordAPI'
import VoronoiPage from './components/charts/voronoi/VoronoiPage'
import Voronoi from './components/charts/voronoi/Voronoi'
import Colors from './components/guides/colors/Colors'
import Gradients from './components/guides/gradients/Gradients'
import Patterns from './components/guides/patterns/Patterns'
import About from './components/pages/About'
import Components from './components/components/Components'

const SITEMAP = [
    {
        label: 'Components',
        children: [
            {
                className: 'bar',
                path: '/bar',
                label: 'Bar',
                component: BarPage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: 'Bar',
                        component: Bar,
                        exact: true,
                        tags: ['svg'],
                    },
                    {
                        className: 'canvas',
                        path: '/canvas',
                        label: 'BarCanvas',
                        component: BarCanvas,
                        tags: ['canvas'],
                    },
                    {
                        className: 'api',
                        path: '/api',
                        label: 'Bar API',
                        component: BarAPI,
                        tags: ['api'],
                    },
                ],
            },
            {
                className: 'bubble',
                path: '/bubble',
                label: 'Bubble',
                component: BubblePage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: 'Bubble',
                        component: Bubble,
                        exact: true,
                        tags: ['svg'],
                    },
                    {
                        className: 'placeholders',
                        path: '/placeholders',
                        label: 'BubblePlaceholders',
                        component: BubblePlaceholders,
                        tags: ['placeholders'],
                    },
                    {
                        className: 'api',
                        path: '/api',
                        label: 'Bubble API',
                        component: BubbleAPI,
                        tags: ['api'],
                    },
                ],
            },
            {
                className: 'calendar',
                path: '/calendar',
                label: 'Calendar',
                component: CalendarPage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: 'Calendar',
                        component: Calendar,
                        exact: true,
                        tags: ['svg'],
                    },
                    {
                        className: 'api',
                        path: '/api',
                        label: 'Calendar API',
                        component: CalendarAPI,
                        tags: ['api'],
                    },
                ],
            },
            {
                className: 'chord',
                path: '/chord',
                label: 'Chord',
                component: ChordPage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: 'Chord',
                        component: Chord,
                        exact: true,
                        tags: ['svg'],
                    },
                    {
                        className: 'canvas',
                        path: '/canvas',
                        label: 'ChordCanvas',
                        component: ChordCanvas,
                        tags: ['canvas'],
                    },
                    {
                        className: 'api',
                        path: '/api',
                        label: 'Chord API',
                        component: ChordAPI,
                        tags: ['api'],
                    },
                ],
            },
            {
                className: 'heatmap',
                path: '/heatmap',
                label: 'HeatMap',
                component: HeatMapPage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: 'HeatMap',
                        component: HeatMap,
                        exact: true,
                        tags: ['svg'],
                    },
                    {
                        className: 'canvas',
                        path: '/canvas',
                        label: 'HeatMapCanvas',
                        component: HeatMapCanvas,
                        tags: ['canvas'],
                    },
                    {
                        className: 'api',
                        path: '/api',
                        label: 'HeatMap API',
                        component: HeatMapAPI,
                        tags: ['api'],
                    },
                ],
            },
            {
                className: 'line',
                path: '/line',
                label: 'Line',
                component: LinePage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: 'Line',
                        component: Line,
                        exact: true,
                        tags: ['svg'],
                    },
                    {
                        className: 'api',
                        path: '/api',
                        label: 'Line API',
                        component: LineAPI,
                        tags: ['api'],
                    },
                ],
            },
            {
                className: 'pie',
                path: '/pie',
                label: 'Pie',
                component: PiePage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: 'Pie',
                        component: Pie,
                        exact: true,
                        tags: ['svg'],
                    },
                    {
                        className: 'api',
                        path: '/api',
                        label: 'Pie API',
                        component: PieAPI,
                        tags: ['api'],
                    },
                ],
            },
            {
                className: 'radar',
                path: '/radar',
                label: 'Radar',
                component: RadarPage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: 'Radar',
                        component: Radar,
                        exact: true,
                        tags: ['svg'],
                    },
                    {
                        className: 'api',
                        path: '/api',
                        label: 'Radar API',
                        component: RadarAPI,
                        tags: ['api'],
                    },
                ],
            },
            {
                className: 'sankey',
                path: '/sankey',
                label: 'Sankey',
                component: SankeyPage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: 'Sankey',
                        component: Sankey,
                        exact: true,
                        tags: ['svg'],
                    },
                    {
                        className: 'api',
                        path: '/api',
                        label: 'Sankey API',
                        component: SankeyAPI,
                        tags: ['api'],
                    },
                ],
            },
            {
                className: 'stream',
                path: '/stream',
                label: 'Stream',
                component: StreamPage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: 'Stream',
                        component: Stream,
                        exact: true,
                        tags: ['svg'],
                    },
                ],
            },
            {
                className: 'sunburst',
                path: '/sunburst',
                label: 'Sunburst',
                component: SunburstPage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: 'Sunburst',
                        component: Sunburst,
                        exact: true,
                        tags: ['svg'],
                    },
                    {
                        className: 'api',
                        path: '/api',
                        label: 'Sunburst API',
                        component: SunburstAPI,
                        tags: ['api'],
                    },
                ],
            },
            {
                className: 'treemap',
                path: '/treemap',
                label: 'TreeMap',
                component: TreeMapPage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: 'TreeMap',
                        component: TreeMapReact,
                        exact: true,
                        tags: ['svg'],
                    },
                    {
                        className: 'html',
                        path: '/html',
                        label: 'TreeMapHTML',
                        component: TreeMapHTML,
                        tags: ['html'],
                    },
                    {
                        className: 'placeholders',
                        path: '/placeholders',
                        label: 'TreeMapPlaceholders',
                        component: TreeMapPlaceholders,
                        tags: ['placeholders'],
                    },
                    {
                        className: 'api',
                        path: '/api',
                        label: 'TreeMap API',
                        component: TreeMapAPI,
                        tags: ['api'],
                    },
                ],
            },
            {
                className: 'voronoi',
                path: '/voronoi',
                label: 'Voronoi',
                component: VoronoiPage,
                children: [
                    {
                        className: 'react',
                        path: '/',
                        label: 'Voronoi',
                        component: Voronoi,
                        isIndex: true,
                        tags: ['svg'],
                    },
                ],
            },
        ],
    },
    {
        label: 'Guides',
        // those items must not be nested
        children: [
            {
                className: 'colors',
                path: '/guides/colors',
                label: 'Colors',
                component: Colors,
                description: 'Understanding nivo color related properties.',
            },
            {
                className: 'gradients',
                path: '/guides/gradients',
                label: 'Gradients',
                component: Gradients,
                description: 'Using gradients to fill your charts.',
            },
            {
                className: 'patterns',
                path: '/guides/patterns',
                label: 'Patterns',
                component: Patterns,
                description: 'Using patterns to fill your charts.',
            },
        ],
    },
    {
        label: 'misc',
        // those items must not be nested
        children: [
            {
                className: 'components',
                path: '/components',
                label: 'Components',
                component: Components,
            },
            {
                className: 'guides',
                label: 'Guides',
            },
            {
                className: 'about',
                path: '/about',
                label: 'About',
                component: About,
            },
        ],
    },
    {
        label: 'extras',
        // those items must not be nested
        children: [
            {
                className: 'about',
                path: '/about',
                label: 'About',
                component: About,
            },
            {
                className: 'storybook',
                path: 'http://nivo.rocks/storybook/',
                label: 'Storybook',
            },
            {
                className: 'nivo',
                path: 'https://github.com/plouc/nivo',
                label: 'nivo repository',
            },
            {
                className: 'nivo-api',
                path: 'https://github.com/plouc/nivo-api',
                label: 'nivo-api repository',
            },
            {
                className: 'nivo-website',
                path: 'https://github.com/plouc/nivo-website',
                label: 'nivo-website repository',
            },
        ],
    },
]

export const getSectionItems = sectionLabel => {
    const section = SITEMAP.find(({ label }) => label === sectionLabel)

    return section.children
}

export const getRoutes = () => {
    const routes = []
    const routePaths = []

    SITEMAP.forEach(item => {
        if (item.children && item.children.length > 0) {
            item.children.forEach(sectionItem => {
                const routeChildren = []

                if (sectionItem.children) {
                    sectionItem.children.forEach(childItem => {
                        routeChildren.push(
                            <Route
                                key={`${sectionItem.path}${childItem.path}`}
                                path={`${sectionItem.path}${childItem.path}`}
                                component={childItem.component}
                                exact={!!childItem.exact}
                            />
                        )
                    })
                }

                if (
                    !sectionItem.path ||
                    !sectionItem.component ||
                    routePaths.includes(sectionItem.path)
                )
                    return

                routePaths.push(sectionItem.path)
                routes.push(
                    <Route
                        key={sectionItem.path}
                        path={sectionItem.path}
                        render={() => <sectionItem.component childRoutes={routeChildren} />}
                    />
                )
            })
        }
    })

    return routes
}

export const guideItems = getSectionItems('Guides')
export const miscItems = getSectionItems('misc')

miscItems.find(({ label }) => label === 'Guides').children = guideItems
