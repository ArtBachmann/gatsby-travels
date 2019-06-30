import React from "react"
import Title from "../Title"
import styles from "../../css/about.module.css"
// import img from "../../images/defaultBcg.jpeg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const getAbout = graphql`
  query aboutImage {
    aboutImage: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 600) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

const About = () => {
  const { aboutImage } = useStaticQuery(getAbout)
  return (
    <section className={styles.about}>
      <Title
        title="Lammaslammen"
        subtitle="ympärillä on pääasiallisesti hoidettua puistoaluetta."
      />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            {/* <img src={img} alt="about gatsby company" /> */}
            <Img
              fluid={aboutImage.childImageSharp.fluid}
              alt="Lammaslampi at summer sunshime"
            />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>kuvia kauniista luonnosta...</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            non cupiditate expedita?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
            non cupiditate expedita?
          </p>
          <button type="button" className="btn-primary">
            lue
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
