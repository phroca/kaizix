/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 
 function Seo({ description, lang, meta, title, pathname }) {
   const { site } = useStaticQuery(
     graphql`
       query {
         site {
           siteMetadata {
             title
             description
             image
             siteUrl
           }
         }
       }
     `
   )
    const siteUrl = site.siteMetadata.siteUrl
    const image = site.siteMetadata.image
    const seo = {
        title: title || site.siteMetadata?.title,
        description: description || site.siteMetadata.description,
        image: `${siteUrl}${image}`,
        url: `${siteUrl}${pathname || ``}`,
    }
 
   return (
     <>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
     </>
   )
 }
 
 Seo.defaultProps = {
   lang: `fr`,
   meta: [],
   description: ``,
 }
 
 Seo.propTypes = {
   description: PropTypes.string,
   lang: PropTypes.string,
   meta: PropTypes.arrayOf(PropTypes.object),
   title: PropTypes.string.isRequired,
 }
 
 export default Seo
 