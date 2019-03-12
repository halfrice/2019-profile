import React from "react"
import Header from "../components/header"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

export default class About extends React.Component {
  render() {
    return (
      <>
        <Header pageTitle="About" />
        <Img
          fluid={this.props.data.aboutImage.childImageSharp.fluid}
          css={css`
            margin-bottom: 1.5rem;
          `}
        />
        <p>
          {`Victus universis caro ferina est lactisque abundans copia qua sustentantur, et herbae multiplices et siquae alites capi per aucupium possint, et plerosque mos vidimus frumenti usum et vini penitus ignorantes.`}
        </p>
        <p>
          {`Ultima Syriarum est Palaestina per intervalla magna protenta, cultis abundans terris et nitidis et civitates habens quasdam egregias, nullam nulli cedentem sed sibi vicissim velut ad perpendiculum aemulas: Caesaream, quam ad honorem Octaviani principis exaedificavit Herodes, et Eleutheropolim et Neapolim itidemque Ascalonem Gazam aevo superiore exstructas.`}
        </p>
      </>
    )
  }
}

export const aboutImageQuery = graphql`
  query {
    aboutImage: file(relativePath: { regex: "/cyberpunk.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
