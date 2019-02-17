import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"
import { css } from "@emotion/core"

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Header pageTitle="Blog" />
        <img
          css={css`
            display: block;
            margin-left: auto;
            margin-right: auto;
          `}
          src="https://source.unsplash.com/random/640x480"
          alt=""
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
      </Layout>
    )
  }
}

export default Index
