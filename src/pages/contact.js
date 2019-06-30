import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from "gatsby"

const contact = () => {
  return (
    <Layout>
      Hello from contact page!!!
      <Link to="/">Back Home</Link>
    </Layout>
  )
}

export default contact
