import React from 'react'

import './BlogSection.css'
import RecomendedBlogs from './RecomendedBlogs/RecomendedBlogs'
import SingleRecommendedBlog from './SingleRecommendedBlog/SingleRecommendedBlog'

const BlogSection = () => {
    return (
        <div className='blog-section-wrapper'>
            <div className='bog-section-title-container'>
                <h1>Блог</h1>
                <h3 className='subTitle'>Открийте здравни новини и препоръки, от нашите специалисти.</h3>

                    <SingleRecommendedBlog />
            </div>
            <div className='blog-section-recommended-blogs'>
                <p className='blog-section-recommended-blogs-info'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,                 </p>
                <div className='blgo-section-recommended-blog-see-all'>Вижте всички</div>
                <RecomendedBlogs />

            </div>


        </div>
    )
}

export default BlogSection