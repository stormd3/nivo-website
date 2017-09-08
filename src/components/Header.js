import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { getSectionItems } from '../SiteMap'

const miscItems = getSectionItems('misc')

export default class Header extends Component {
    static propTypes = {
        onNavToggle: PropTypes.func.isRequired,
    }

    render() {
        const { onNavToggle } = this.props

        return (
            <header>
                <span className="nav_toggle" onClick={onNavToggle} />
                <Link className="brand" to="/" />
                <nav>
                    {miscItems.map(item =>
                        <Link key={item.className} to={item.path}>
                            {item.label}
                        </Link>
                    )}
                    <a
                        href="http://nivo.rocks/storybook/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        storybook
                    </a>
                    <a
                        href="https://github.com/plouc/nivo"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        GitHub
                    </a>
                    <a
                        href="https://twitter.com/benitteraphael"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Twitter
                    </a>
                </nav>
            </header>
        )
    }
}
