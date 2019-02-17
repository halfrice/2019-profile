import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

export default class Projects extends React.Component {
  render() {
    return (
      <Layout>
        <Header pageTitle="Projects" />
        <Img
          fluid={this.props.data.projects.childImageSharp.fluid}
          css={css`
            margin-bottom: 1.5rem;
          `}
        />
        <p>
          {`Sed maximum est in amicitia parem esse inferiori. Saepe enim excellentiae quaedam sunt, qualis erat Scipionis in nostro, ut ita dicam, grege. Numquam se ille Philo, numquam Rupilio, numquam Mummio anteposuit, numquam inferioris ordinis amicis, Q. vero Maximum fratrem, egregium virum omnino, sibi nequaquam parem, quod is anteibat aetate, tamquam superiorem colebat suosque omnes per se posse esse ampliores volebat.`}
        </p>
      </Layout>
    )
  }
}

export const projectsImageQuery = graphql`
  query {
    projects: file(relativePath: { regex: "/code.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
