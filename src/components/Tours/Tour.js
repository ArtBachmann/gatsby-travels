import React from "react"
import Image from "gatsby-image"
import styles from "../../css/tour.module.css"
import { FaMap } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const Tour = ({ tour }) => {
  const { name, price, start, hours, slug, images } = tour
  console.log(name)
  let mainImage = images[2].fluid
  return (
    <article className={styles.tour}>
      <div className={styles.imgContainer}>
        <Image fluid={mainImage} className={styles.img} alt="summer tour 1" />
        <AniLink fade className={styles.link} to={`/tours/${slug}`}>
          details
        </AniLink>
      </div>
      <div className={styles.footer}>
        <h3>{name}</h3>
        <div className={styles.details}>
          <h5>Begins at {start}</h5>
          <h6>{hours} hours </h6>
          <h6>from {price}</h6>
        </div>
      </div>
    </article>
  )
}

export default Tour
