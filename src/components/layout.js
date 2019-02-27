import React from "react"
import { css } from "@emotion/core"
import Navbar from "./navbar/navbar"
import Footer from "./footer/footer"

import { rhythm } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div
        className="app"
        css={css`
          background-color: #000;
          color: #fff;
          min-height: 100%;
          width: 100%;
          // box-shadow: 0 0 3rem rgba(0, 0, 0, 0.6);
          // -moz-box-shadow: 0 0 3rem rgba(0, 0, 0, 0.6);
          // -webkit-box-shadow: 0 0 3rem rgba(0, 0, 0, 0.6);
        `}
      >
        <Navbar />
        <div
          className="content"
          css={css`
            margin-left: auto;
            margin-right: auto;
            max-width: ${rhythm(48)};
            padding: ${rhythm(1.5)} ${rhythm(0.75)} ${rhythm(0.5)};
          `}
        >
          {children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default Layout
