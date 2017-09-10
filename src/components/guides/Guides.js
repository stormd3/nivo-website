import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { Link } from 'react-router-dom'
import { guideItems } from '../../SiteMap'

export default class Guides extends Component {
    render() {
        return (
            <div className="inner-content">
                <Helmet title="Guides" />
                <div className="page_content">
                    <div className="chart_header">
                        <h1 className="page_header">Guides</h1>
                    </div>

                    <div className="intro">
                        <p className="description">
                            Those guides will help you implementing common features in nivo.
                        </p>
                    </div>

                    {guideItems.map(item =>
                        <div key={item.className}>
                            <Link to={item.path}>
                                {item.label}
                            </Link>
                            <p>
                                {item.description}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
