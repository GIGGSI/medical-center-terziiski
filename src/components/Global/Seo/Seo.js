import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const query = graphql`
{
    site{
        siteMetadata {
            title
            description
        }
    }
}
`
const Seo = ({ title, description }) => {
    const { site: { siteMetadata } } = useStaticQuery(query)
    const metaDescription = description || siteMetadata.description
    return (
        <Helmet htmlAttributes={{ lang: 'en' }}
            title={`${title} | ${siteMetadata.title}`}
            meta={[{ name: `description`, content: metaDescription }]}
        >

        </Helmet>
    )
}

export default Seo