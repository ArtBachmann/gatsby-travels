import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  query {
    site {
      siteMetadata {
        description
        title
        author
      }
    }
  }
`

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={data => {
        console.log(data)
        return (
          <div>
            <h3>title: {data.site.siteMetadata.title}</h3>
            <h3>author: {data.site.siteMetadata.author}</h3>
          </div>
        )
      }}
    />
  )
}

export default RegularHeader
