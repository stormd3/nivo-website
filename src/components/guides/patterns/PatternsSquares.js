import React, { Component } from 'react'
import classNames from 'classnames'
import CollapsibleCard from '../../CollapsibleCard'
import { Defs, patternSquaresDef } from 'nivo'

const SAMPLE_SIZE = 120

const configs = [
    { id: 'default', config: {} },
    { id: 'size', config: { size: 8 } },
    { id: 'padding', config: { padding: 12 } },
    { id: 'stagger', config: { stagger: true, padding: 2 } },
    { id: 'color', config: { color: '#e25d47' } },
    { id: 'background', config: { background: '#e25d47' } },
]

export default class PatternsSquares extends Component {
    state = {
        current: configs[0].id,
    }

    setCurrent = current => {
        this.setState({ current })
    }

    render() {
        const { current } = this.state

        const config = configs.find(({ id }) => id === current)
        const configId = `squares.${current}`

        return (
            <CollapsibleCard title="Squares: patternSquaresDef()" expandedByDefault={true}>
                <div className="tabs__menu">
                    {configs.map(({ id }) =>
                        <div
                            key={id}
                            className={classNames('no-select tabs__menu__item', {
                                '_is-active': id === current,
                            })}
                            onClick={() => this.setCurrent(id)}
                        >
                            {id}
                        </div>
                    )}
                </div>
                <div className="fill-sample">
                    <svg className="fill-sample__preview" width={SAMPLE_SIZE} height={SAMPLE_SIZE}>
                        <Defs defs={[patternSquaresDef(configId, config.config)]} />
                        <rect width={SAMPLE_SIZE} height={SAMPLE_SIZE} fill={`url(#${configId})`} />
                    </svg>
                    <pre className="fill-sample__code">
                        {'// helper\n'}
                        {`patternSquaresDef('${configId}', ${JSON.stringify(
                            config.config,
                            null,
                            '  '
                        )})\n`}
                        {'// plain object\n'}
                        {JSON.stringify(patternSquaresDef(configId, config.config), null, '  ')}
                    </pre>
                </div>
            </CollapsibleCard>
        )
    }
}
