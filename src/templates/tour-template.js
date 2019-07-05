import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import styles from "../css/template.module.css"
import Img from "gatsby-image"
import { FaMoneyBillWave, FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Day from "../components/SingleTour/Day"

const Template = ({ data }) => {
  const {
    name,
    price,
    duration,
    start,
    description: { description },
    images,
  } = data.tour

  const [mainImage, ...tourImages] = images

  return (
    <Layout>
      <StyledHero img={mainImage.fluid} />
      <section className={styles.template}>
        <div className={styles.center}>
          <div className={styles.images}>
            {tourImages.map((item, index) => {
              return (
                <Img
                  key={index}
                  fluid={item.fluid}
                  alt="single tour"
                  className={styles.image}
                />
              )
            })}
          </div>
          <h2>{name}</h2>
          <div className={styles.info}>
            <p>
              <FaMoneyBillWave className={styles.icon} />
              starting from ${price}
            </p>
            {/* <p>
              <FaMap className={styles.icon} />
              starting from ${price}
            </p> */}
          </div>
          <h4>Starts at : {start}</h4>
          <h4>Duration : {duration} hours.</h4>
          <p className={styles.description}>{description}</p>
          <AniLink
            fade
            to="/tours"
            className={styles.center}
            className="btn-primary "
          >
            Back to Tours
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    tour: contentfulTours(slug: { eq: $slug }) {
      name
      price
      duration
      start(formatString: "dddd MMMM DD, YYYY hh.mm")
      description {
        description
      }
      images {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default Template
