import { Link } from 'gatsby'
import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import './RecomendedBlogs.css'

const RecomendedBlogs = () => {
    const data = useStaticQuery(graphql`
  query {
    allRecommendedJson {
      edges {
        node {
          date
          image
          title
          id
          author
        }
      }
    }
  }
`)
    return (
        <div className='recommended-blogs-wrapper'>
            {data.allRecommendedJson.edges.map((item) => (
                <div key={item.node.id} className="recommended-blog-container">
                    <div className='recommended-blog-image-wrapper'>
                        <StaticImage
                            src='https://images.unsplash.com/photo-1546193229-e200b04daf4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80'
                            alt={item.node.title}
                            placeholder="blurred"
                            layout="constrained"
                            className='recommended-image'
                        />{console.log(item.node)}
                    </div>
                    <div className='recommended-blog-content'>
                        <div className='recommended-blog-author-container'>
                            <p>{item.node.author}</p>
                            <p>{item.node.date}</p>
                        </div>
                        <p className='recommended-blog-title'>{item.node.title}</p>
                        <Link to="/" className='single-reommended-blog-go-to go-to-recommended'>
                            Към статията
                        </Link>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default RecomendedBlogs