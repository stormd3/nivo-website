import React from 'react'

const PatternsExample = () =>
    <pre className="code-block guide__code">
        <span>{`import { Stream, patternDotsDef, patternSquaresDef } from 'nivo'\n\n`}</span>
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

export default PatternsExample
