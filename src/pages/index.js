import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="enjoy gatsby-travels"
        info="Even with the growth of online travel booking sites, the travel agency industry is expected to grow over the next several years. Online booking has forced traditional travel agencies to market themselves in new ways, often by catering to niche markets."
      >
        <Link to="/tours" className="btn-white">
          explore tours
        </Link>
      </Banner>
    </SimpleHero>
    <About />
  </Layout>
)
