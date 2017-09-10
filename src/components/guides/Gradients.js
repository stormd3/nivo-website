import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { ResponsiveStream, ResponsiveBar, linearGradientDef } from 'nivo'
import { generateCountriesData } from 'nivo-generators'

export default class Gradients extends Component {
    render() {
        return (
            <div className="inner-content">
                <Helmet title="Gradients" />
                <div className="page_content">
                    <div className="guide__header">
                        <h1 className="page_header">Gradients</h1>
                    </div>
                </div>
                <div className="guide-description text-content">
                    <p className="description">
                        While gradients rarely add meaning to your data, it's an easy way to enhance
                        the look of your charts.
                    </p>
                    <h2>Using gradients in nivo</h2>
                    <p className="description">
                        Defining gradients in nivo is a <strong>2 steps process</strong>, first
                        you'll have to declare available definitions (the same goes for{' '}
                        <Link to="/guides/patterns">patterns</Link>) using dedicated helpers or
                        providing plain objects.<br />
                        Then you must define the rules to apply those definitions using the{' '}
                        <code className="code">fill</code> property.
                    </p>
                </div>
                <div className="banner anner--full-width">
                    <div className="guide__examples">
                        <div className="guide__examples__item">
                            <ResponsiveStream
                                margin={{ top: 15, right: -1, bottom: -1, left: -1 }}
                                data={generateCountriesData(['a', 'b', 'c'], { size: 7 })}
                                indexBy="country"
                                keys={['a', 'b', 'c']}
                                offsetType="none"
                                axisLeft={null}
                                axisBottom={null}
                                enableGridX={false}
                                defs={[
                                    linearGradientDef('example1', [
                                        { offset: 0, color: 'inherit' },
                                        { offset: 30, color: 'inherit' },
                                        { offset: 100, color: 'inherit', opacity: 0 },
                                    ]),
                                ]}
                                fill={[{ match: '*', id: 'example1' }]}
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
                                    linearGradientDef('example1', [
                                        { offset: 0, color: 'inherit' },
                                        { offset: 40, color: 'inherit' },
                                        { offset: 100, color: 'inherit', opacity: 0.3 },
                                    ]),
                                ]}
                                fill={[{ match: '*', id: 'example1' }]}
                                borderWidth={1}
                                borderColor="inherit:darker(0.4)"
                                isInteractive={false}
                                animate={false}
                            />
                        </div>
                        <div className="guide__examples__item" />
                        <div className="guide__examples__legend">
                            gradients applied on various nivo components.
                        </div>
                    </div>
                </div>
                <div className="guide-description text-content">
                    <p className="description">
                        <strong>Separating gradient definitions from application</strong> allows us
                        to reuse those in various places, like fills and borders, and while
                        maintaining a direct mapping for a bar chart with 5 items can be simple
                        enough, when you're dealing with a complex heatmap with tens of nodes it can
                        quickly become cumbersome. Doing so also provides the ability to{' '}
                        <strong>use a gradient depending on chart element value</strong>. Last but
                        not least, <strong>gradient colors can be inherited</strong> from current
                        node ones.
                    </p>
                    <h2>Example</h2>
                    <pre className="code-block guide__code">
                        <span>{`import { Stream, linearGradientDef } from 'nivo'\n\n`}</span>
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
                        {`      linearGradientDef('gradientA', { color: 'inherit' }),\n`}
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
                    <h2>Known limitations</h2>
                    <p className="description">
                        Please be aware that gradient usage has some limitations, it's{' '}
                        <strong>not supported for canvas</strong> chart implementations for now, and
                        tooltips involving colored chips will use plain element color.
                    </p>
                </div>
            </div>
        )
    }
}
