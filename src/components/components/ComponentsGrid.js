/*
 * This file is part of the nivo project.
 *
 * (c) 2016 Raphaël Benitte
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { getSectionItems } from '../../SiteMap'

const allItems = getSectionItems('Components').reduce((acc, item) => {
    if (item.children) {
        item.children.forEach(child => {
            acc.push({
                key: `${item.className}.${child.className}`,
                path: `${item.path}${child.path}`,
                label: child.label,
                className: item.className,
                type: child.className,
                tags: child.tags || [],
            })
        })
    }

    return acc
}, [])

const getFilterFunction = (term, filter) => {
    let predicates = []
    if (term.length > 0) {
        predicates.push(({ label }) => label.toLowerCase().includes(term.toLowerCase()))
    }
    if (filter !== null) {
        predicates.push(({ tags }) =>
            tags.map(tag => tag.toLowerCase()).includes(filter.toLowerCase())
        )
    }

    return item => predicates.every(predicate => predicate(item))
}

export default class ComponentsGrid extends Component {
    static propTypes = {
        filter: PropTypes.string,
        term: PropTypes.string.isRequired,
        onClick: PropTypes.func,
    }

    static defaultProps = {
        onClick: () => {},
    }

    render() {
        const { term, filter, onClick } = this.props

        let items = allItems
        if (term.length > 0 || filter !== null) {
            const filterFunction = getFilterFunction(term, filter)
            items = allItems.filter(filterFunction)
        }

        return (
            <div className="ComponentsGrid">
                {items.map(item => {
                    return (
                        <Link
                            to={item.path}
                            key={item.key}
                            className="ComponentsGrid__item"
                            onClick={onClick}
                        >
                            <span className="ComponentsGrid__item__icon">
                                <span className={`sprite-icons-${item.className}-red`} />
                            </span>
                            <span className="ComponentsGrid__item__label">
                                {item.label}
                            </span>
                        </Link>
                    )
                })}
            </div>
        )
    }
}
