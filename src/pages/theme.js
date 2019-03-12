import React from "react"
import Header from "../components/header"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import ThemeContext from "../theme/theme-context"

export default class Contact extends React.Component {
  render() {
    return (
      <>
        <ThemeContext.Consumer>
          {({ themeName, theme }) => (
            <>
              <Header pageTitle="Theme" />
              <Img
                fluid={this.props.data.themeImage.childImageSharp.fluid}
                css={css`
                  margin-bottom: 1.5rem;
                `}
              />
              <h3>{`How to apply a theme to a Gatsby React App`}</h3>
              <p>{`themeName: ${themeName}`}</p>
              <p>theme: {JSON.stringify(theme, null, 1)}</p>
            </>
          )}
        </ThemeContext.Consumer>
      </>
    )
  }
}

export const themeImageQuery = graphql`
  query {
    themeImage: file(relativePath: { regex: "/motorcycle.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1280, maxHeight: 640) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
