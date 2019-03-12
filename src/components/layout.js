import React from "react"
import { css } from "@emotion/core"
import Navbar from "./navbar/navbar"
import Footer from "./footer/footer"
import ThemeProvider from "../theme/theme-provider"

import { rhythm } from "../utils/typography"
import ThemeContext from "../theme/theme-context"

class Layout extends React.Component {
  render() {
    return (
      <ThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <div
              className="app"
              css={css`
                background: ${theme.background};
                color: ${theme.color};
                min-height: 100vh;
                max-height: 100%;
              `}
            >
              <Navbar />
              <div
                className="temp"
                css={css`
                  margin: 0 auto;
                  max-width: ${rhythm(48)};
                  /* box-shadow: 0 0 3rem rgba(0, 0, 0, 0.6);
                  -moz-box-shadow: 0 0 3rem rgba(0, 0, 0, 0.6);
                  -webkit-box-shadow: 0 0 3rem rgba(0, 0, 0, 0.6); */
                `}
              >
                <div
                  className="content"
                  css={css`
                    margin: 0 auto;
                    max-width: ${rhythm(48)};
                    padding: ${rhythm(1.5)} ${rhythm(0.75)} ${rhythm(3.0)};
                  `}
                >
                  {this.props.children}
                </div>
                <Footer />
              </div>
            </div>
          )}
        </ThemeContext.Consumer>
      </ThemeProvider>
    )
  }
}

export default Layout
