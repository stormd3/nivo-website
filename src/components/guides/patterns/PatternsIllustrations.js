import React from 'react'
import {
    ResponsiveBar,
    ResponsiveStream,
    ResponsiveTreeMap,
    patternSquaresDef,
    patternDotsDef,
} from 'nivo'
import { generateCountriesData } from 'nivo-generators'

const PatternsIllustrations = () =>
    <div className="banner">
        <div className="guide__illustrations">
            <div className="guide__illustrations__item">
                <ResponsiveStream
                    margin={{ top: -2, right: -2, bottom: -2, left: -2 }}
                    data={generateCountriesData(['a', 'b', 'c'], { size: 7 })}
                    indexBy="country"
                    keys={['a', 'b', 'c']}
                    offsetType="expand"
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
            <div className="guide__illustrations__item">
                <ResponsiveBar
                    margin={{ top: 15, right: 10, bottom: -2, left: 10 }}
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
            <div className="guide__illustrations__item">
                <ResponsiveTreeMap
                    margin={{ top: -2, right: -2, bottom: -2, left: -2 }}
                    root={{
                        country: 'root',
                        children: generateCountriesData(['value'], { size: 9 }),
                    }}
                    identity="country"
                    value="value"
                    leavesOnly={true}
                    colorBy="country"
                    borderWidth={2}
                    borderColor="#333"
                    isInteractive={false}
                    animate={false}
                    enableLabels={false}
                />
            </div>
            <div className="guide__illustrations__legend">
                patterns applied to various nivo components.
            </div>
        </div>
    </div>

export default PatternsIllustrations
