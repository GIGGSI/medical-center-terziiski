import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"

import './SingleRecommendedBlog.css'

const SingleRecommendedBlog = () => {
    return (
        <div className='single-recommended-blog-wrapper'>
            <p className='single-recommended-blog-title'>Препоръчани за вас</p>
            <div className='single-recommended-blog-image-container'>
                <StaticImage
                    src='https://images.unsplash.com/photo-1638365436603-2f9fd7b00845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
                    alt=" single blog post"
                    placeholder="blurred"
                    layout="constrained"
                />
            </div>
            <div className='single-recommended-info'>
                <p>Д-р Яна Терзийска</p>
                <p>22.02.2023г.</p>
            </div>
            <p className='single-recommended-blog-post-title'>Чести Притеснения и страхове на родителите</p>
            <Link to='/' className='single-reommended-blog-go-to'>
                Към статията
            </Link>
        </div>
    )
}

export default SingleRecommendedBlog