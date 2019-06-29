import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import SimpleHero from "../components/SimpleHero"
import Banner from "../components/Banner"
import About from "../components/Home/About"
import Services from "../components/Home/Services"

export default () => (
  <Layout>
    <SimpleHero>
      <Banner
        title="Lammaslammen vuodenajat"
        info="Lammaslampi (ruots. Lammträsk) on pieni järvi Länsi-Vantaan Hämeenkylän kaupunginosan Pähkinärinteen asuinalueen äärellä. Lampi on ruskeavetinen ja rehevä, ja kuuluu Pitkäjärven valuma-alueeseen."
      >
        <Link to="/tours" className="btn-white">
          Tutustu ympäristöön
        </Link>
      </Banner>
    </SimpleHero>
    <About />
    <Services />
  </Layout>
)
