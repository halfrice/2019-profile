import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"

export default class Contact extends React.Component {
  render() {
    return (
      <Layout>
        <Header pageTitle="Contact" />
        <Img
          fluid={this.props.data.contactImage.childImageSharp.fluid}
          css={css`
            margin-bottom: 1.5rem;
          `}
        />
        <h3>{`¿Qué es Lorem Ipsum?`}</h3>
        <p>
          {`Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas "Letraset", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.`}
        </p>
      </Layout>
    )
  }
}

export const contactImageQuery = graphql`
  query {
    contactImage: file(relativePath: { regex: "/lambos.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
