import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import CollapsibleCard from '../CollapsibleCard'
import { Defs, ResponsiveBar, ResponsiveStream, patternSquaresDef, patternDotsDef } from 'nivo'
import { generateCountriesData } from 'nivo-generators'

const SAMPLE_SIZE = 160

const squaresConfigs = [
    { id: 'default', config: {} },
    { id: 'size', config: { size: 8 } },
    { id: 'padding', config: { padding: 12 } },
    { id: 'stagger', config: { stagger: true, padding: 2 } },
    { id: 'color', config: { color: '#e25d47' } },
    { id: 'background', config: { background: '#e25d47' } },
]

const dotsConfigs = [
    { id: 'default', config: {} },
    { id: 'size', config: { size: 8 } },
    { id: 'padding', config: { padding: 12 } },
    { id: 'stagger', config: { stagger: true, padding: 2 } },
    { id: 'color', config: { color: '#e25d47' } },
    { id: 'background', config: { background: '#e25d47' } },
]

export default class Patterns extends Component {
    state = {
        currentSquares: squaresConfigs[0].id,
        currentDots: dotsConfigs[0].id,
    }

    setCurrentSquares = currentSquares => {
        this.setState({ currentSquares })
    }

    setCurrentDots = currentDots => {
        this.setState({ currentDots })
    }

    render() {
        const { currentSquares, currentDots } = this.state

        const squaresConfig = squaresConfigs.find(({ id }) => id === currentSquares)
        const squaresConfigId = `squares.${currentSquares}`

        const dotsConfig = dotsConfigs.find(({ id }) => id === currentDots)
        const dotsConfigId = `dots.${currentDots}`

        return (
            <div className="inner-content">
                <Helmet title="Patterns" />
                <div className="page_content">
                    <div className="guide__header">
                        <h1 className="page_header">Patterns</h1>
                    </div>
                </div>
                <div className="guide-description text-content">
                    <h2>Purpose</h2>
                    <p className="description">
                        Using patterns can be useful to <strong>group similar items</strong>, for
                        example imagine you want to build a pie chart displaying various foods, you
                        can use a color scale to assign a unique color to each one, then you can
                        group vegetables/fruits/meats/… using a similar pattern for each group
                        (while keeping color variation).
                    </p>
                    <h2>Using patterns in nivo</h2>
                    <p className="description">
                        Defining patterns in nivo is a <strong>2 steps process</strong>, first
                        you'll have to declare available definitions (the same goes for{' '}
                        <Link to="/guides/gradients">gradients</Link>) using dedicated helpers or
                        providing plain objects.<br />
                        Then you must define the rules to apply those definitions using the{' '}
                        <code className="code">fill</code> property.
                    </p>
                </div>
                <div className="banner anner--full-width">
                    <div className="guide__examples">
                        <div className="guide__examples__item">
                            <ResponsiveStream
                                margin={{ top: 15, right: -2, bottom: -2, left: -2 }}
                                data={generateCountriesData(['a', 'b', 'c'], { size: 7 })}
                                indexBy="country"
                                keys={['a', 'b', 'c']}
                                offsetType="none"
                                axisLeft={null}
                                axisBottom={null}
                                enableGridX={false}
                                defs={[
                                    patternDotsDef('example1.dots', {
                                        background: 'inherit',
                                        color: '#000',
                                        size: 6,
                                        padding: 2,
                                        stagger: true,
                                    }),
                                    patternSquaresDef('example1.squares', {
                                        background: 'inherit',
                                        color: '#000',
                                        stagger: true,
                                        padding: 2,
                                    }),
                                ]}
                                fill={[
                                    { match: { id: 'a' }, id: 'example1.dots' },
                                    { match: { id: 'b' }, id: 'example1.squares' },
                                    { match: { id: 'c' }, id: 'example1.dots' },
                                ]}
                                borderWidth={2}
                                borderColor="#333"
                                isInteractive={false}
                                animate={false}
                            />
                        </div>
                        <div className="guide__examples__item">
                            <ResponsiveBar
                                margin={{ top: 15, right: 10, left: 10 }}
                                data={generateCountriesData(['a'], { size: 7 })}
                                indexBy="country"
                                keys={['a']}
                                padding={0.2}
                                axisLeft={null}
                                axisBottom={null}
                                enableGridY={false}
                                enableLabel={false}
                                colorBy="index"
                                defs={[
                                    patternDotsDef('example1.dots', {
                                        background: 'inherit',
                                        color: '#000',
                                        size: 6,
                                        padding: 2,
                                        stagger: true,
                                    }),
                                    patternSquaresDef('example1.squares', {
                                        background: 'inherit',
                                        color: '#000',
                                        stagger: true,
                                        padding: 2,
                                    }),
                                ]}
                                fill={[
                                    { match: d => d.data.index % 2 === 1, id: 'example1.dots' },
                                    { match: d => d.data.index % 2 === 0, id: 'example1.squares' },
                                ]}
                                borderWidth={2}
                                borderColor="#333"
                                isInteractive={false}
                                animate={false}
                            />
                        </div>
                        <div className="guide__examples__item" />
                        <div className="guide__examples__legend">
                            patterns applied on various nivo components.
                        </div>
                    </div>
                </div>
                <div className="guide-description text-content">
                    <p className="description">
                        <strong>Separating pattern definitions from application</strong> allows us
                        to reuse those in various places, like fills and borders, and while
                        maintaining a direct mapping for a bar chart with 5 items can be simple
                        enough, when you're dealing with a complex heatmap with tens of nodes it can
                        quickly become cumbersome. Doing so also provides the ability to{' '}
                        <strong>use a pattern depending on chart element value</strong>. Last but
                        not least, <strong>patterns colors can be inherited</strong> from current
                        node ones.
                    </p>
                    <h2>Example</h2>
                    <pre className="code-block guide__code">
                        <span
                        >{`import { Stream, patternDotsDef, patternSquaresDef } from 'nivo'\n\n`}</span>
                        <span>{`const MyChart = () => (\n`}</span>
                        <span>{`  <Stream\n`}</span>
                        {`    data={[`}
                        <span className="guide__code__comment">{`/*…*/`}</span>
                        {`]}\n`}
                        <span>{`    keys={['react', 'vue', 'elm']}\n`}</span>
                        {`    `}
                        <span className="guide__code__comment">{`// defining patterns`}</span>
                        {'\n'}
                        {`    defs={[\n`}
                        {`      `}
                        <span className="guide__code__comment">{`// using helpers`}</span>
                        {'\n'}
                        {`      `}
                        <span className="guide__code__comment">{`// will use color from current element`}</span>
                        {'\n'}
                        {`      patternDotsDef('dots', { color: 'inherit' }),\n`}
                        {`      `}
                        <span className="guide__code__comment">{`// will use background color from current element`}</span>
                        {'\n'}
                        {`      patternSquaresDef('squares', { background: 'inherit' }),\n`}
                        {`      `}
                        <span className="guide__code__comment">{`// using plain object`}</span>
                        {'\n'}
                        {`      { id: 'custom', type: 'patternSquares', size: 24 },\n`}
                        {`    ]}\n`}
                        {`    `}
                        <span className="guide__code__comment">{`// defining rules to apply those patterns`}</span>
                        {'\n'}
                        {`    fill={[\n`}
                        {`      `}
                        <span className="guide__code__comment">{`// match using object query`}</span>
                        {'\n'}
                        {`      { match: { id: 'react' }, id: 'dots' },\n`}
                        {`      `}
                        <span className="guide__code__comment">{`// match using function`}</span>
                        {'\n'}
                        {`      { match: d => d.id === 'vue', id: 'squares' },\n`}
                        {`      `}
                        <span className="guide__code__comment">{`// match all, will only affect 'elm' because once`}</span>
                        {'\n'}
                        {`      `}
                        <span className="guide__code__comment">{`// a rule match, others are skipped`}</span>
                        {'\n'}
                        {`      { match: '*', id: 'custom' },\n`}
                        {`    ]}\n`}
                        {`  />\n`}
                        {`)`}
                    </pre>
                    <h2>Available patterns</h2>
                    <CollapsibleCard title="Squares: patternSquaresDef()" expandedByDefault={true}>
                        <div className="chart-controls_menu">
                            {squaresConfigs.map(({ id }) =>
                                <div
                                    key={id}
                                    className={classNames('no-select chart-controls_menu_item', {
                                        active: id === currentSquares,
                                    })}
                                    onClick={() => this.setCurrentSquares(id)}
                                >
                                    {id}
                                </div>
                            )}
                        </div>
                        <div className="pattern-examples__item">
                            <svg width={SAMPLE_SIZE} height={SAMPLE_SIZE}>
                                <Defs
                                    defs={[
                                        patternSquaresDef(squaresConfigId, squaresConfig.config),
                                    ]}
                                />
                                <rect
                                    width={SAMPLE_SIZE}
                                    height={SAMPLE_SIZE}
                                    fill={`url(#${squaresConfigId})`}
                                />
                            </svg>
                            <pre>
                                {'// helper\n'}
                                {`patternSquaresDef('${squaresConfigId}', ${JSON.stringify(
                                    squaresConfig.config,
                                    null,
                                    '  '
                                )})\n`}
                                {'// plain object\n'}
                                {JSON.stringify(
                                    patternSquaresDef(squaresConfigId, squaresConfig.config),
                                    null,
                                    '  '
                                )}
                            </pre>
                        </div>
                    </CollapsibleCard>
                    <CollapsibleCard title="Dots: patternDotsDef()" expandedByDefault={true}>
                        <div className="chart-controls_menu">
                            {dotsConfigs.map(({ id }) =>
                                <div
                                    key={id}
                                    className={classNames('no-select chart-controls_menu_item', {
                                        active: id === currentDots,
                                    })}
                                    onClick={() => this.setCurrentDots(id)}
                                >
                                    {id}
                                </div>
                            )}
                        </div>
                        <div className="pattern-examples__item">
                            <svg width={SAMPLE_SIZE} height={SAMPLE_SIZE}>
                                <Defs defs={[patternDotsDef(dotsConfigId, dotsConfig.config)]} />
                                <rect
                                    width={SAMPLE_SIZE}
                                    height={SAMPLE_SIZE}
                                    fill={`url(#${dotsConfigId})`}
                                />
                            </svg>
                            <pre>
                                {'// helper\n'}
                                {`patternDotsDef('${dotsConfigId}', ${JSON.stringify(
                                    dotsConfig.config,
                                    null,
                                    '  '
                                )})\n`}
                                {'// plain object\n'}
                                {JSON.stringify(
                                    patternDotsDef(dotsConfigId, dotsConfig.config),
                                    null,
                                    '  '
                                )}
                            </pre>
                        </div>
                    </CollapsibleCard>
                    <h2>Known limitations</h2>
                    <p className="description">
                        Please be aware that pattern usage has some limitations, it's{' '}
                        <strong>not supported for canvas</strong> chart implementations for now, and
                        tooltips involving colored chips will use plain element color.
                    </p>
                </div>
            </div>
        )
    }
}
