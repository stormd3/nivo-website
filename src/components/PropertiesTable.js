import React, { Component, PropTypes } from 'react';
import { Link }                        from 'react-router';


class PropertiesTable extends Component {
    render() {
        const { properties } = this.props;

        return (
            <table>
                <thead>
                    <tr>
                        <th>property</th>
                        <th>type</th>
                        <th>required</th>
                        <th>default</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map(prop => {
                        if (prop === 'transitionDuration') {
                            prop = [prop, 'number', true, (<code>Nivo.defaults.{prop}</code>), (<Link to="animation">documentation</Link>)];
                        } else if (prop === 'transitionEasing') {
                            prop = [prop, 'string', true, (<code>Nivo.defaults.{prop}</code>), (<Link to="animation">documentation</Link>)];
                        } else if (prop === 'colors') {
                            prop = [prop, '*', true, (<code>Nivo.defaults.colorRange</code>), (<Link to="colors">documentation</Link>)];
                        }

                        return (
                            <tr key={prop[0]}>
                                <td><strong>{prop[0]}</strong></td>
                                <td><code>{prop[1]}</code></td>
                                <td>{prop[2] ? 'yes' : 'no'}</td>
                                <td>{prop[3]}</td>
                                <td>{prop[4]}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        );
    }
}


export default PropertiesTable;
