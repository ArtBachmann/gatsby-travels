// This version in more straightforward by teacher's opinion.

import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getSiteData = graphql`
  {
    site {
      siteMetadata {
        description
        title
        author
      }
    }
  }
`

const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(getSiteData)

  console.log(siteMetadata)
  return (
    <div>
      <h3>title:{siteMetadata.title}</h3>
      <h3>author:{siteMetadata.author}</h3>
    </div>
  )
}

export default Header
