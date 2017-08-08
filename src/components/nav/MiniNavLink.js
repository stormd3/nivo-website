/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class MiniNavLink extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)

        this.state = { clickFeedback: false }
    }

    handleClick(e) {
        const { onClick } = this.props

        /*
        if (this.timer) {
            clearInterval(this.timer)
        }

        this.timer = setTimeout(() => {
            this.setState({ clickFeedback: false })
        }, 1200)

        this.setState({ clickFeedback: true })
        */

        if (onClick) {
            e.preventDefault()
            onClick()
        }
    }

    componentWillUnmount() {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    render() {
        const { path, className, label, style, exact } = this.props
        const { clickFeedback } = this.state

        return (
            <NavLink
                className={`mini-nav_item mini-nav_item-${className} ${clickFeedback
                    ? ' click'
                    : ''}`}
                to={path}
                activeClassName="active"
                onClick={this.handleClick}
                style={style}
                exact={!!exact}
            >
                <span className="mini-nav_item_feedback" />
                <span className={`nivo-icon nivo-icon-${className}`} />
                <span className="mini-nav_item_label">
                    {label}
                </span>
            </NavLink>
        )
    }
}

export default MiniNavLink
