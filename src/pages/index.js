import React from "react"
import Header from "../components/header"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

export default class Index extends React.Component {
  render() {
    return (
      <>
        <Header pageTitle="Blog" />
        <Img
          fluid={this.props.data.splashImage.childImageSharp.fluid}
          css={css`
            margin-bottom: 1.5rem;
          `}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Sed maximum est in amicitia parem esse inferiori. Saepe enim
          excellentiae quaedam sunt, qualis erat Scipionis in nostro, ut ita
          dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio
          anteposuit, numquam inferioris ordinis amicis, Q. vero Maximum
          fratrem, egregium virum omnino, sibi nequaquam parem, quod is anteibat
          aetate, tamquam superiorem colebat suosque omnes per se posse esse
          ampliores volebat
        </p>
      </>
    )
  }
}

export const splashImageQuery = graphql`
  query {
    splashImage: file(relativePath: { regex: "/splash.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
