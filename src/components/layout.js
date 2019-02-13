import React from "react"
import { css } from "@emotion/core"
import Navbar from "./navbar/navbar"

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div
        css={css`
          background-color: #000;
          width: 100%;
          margin: 0 auto;
          padding: 0;
          padding-top: 0;
          color: #fff;
          box-shadow: 0 0 3rem rgba(0, 0, 0, 0.6);
          -moz-box-shadow: 0 0 3rem rgba(0, 0, 0, 0.6);
          -webkit-box-shadow: 0 0 3rem rgba(0, 0, 0, 0.6);
        `}
      >
        <Navbar />
        <div
          css={css`
            padding: 1.618rem 1rem;
          `}
        >
          {children}
        </div>
      </div>
    )
  }
}

export default Layout
