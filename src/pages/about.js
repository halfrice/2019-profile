import React from "react"
import Layout from "../components/layout"
import Header from "../components/header"

class About extends React.Component {
  render() {
    return (
      <Layout>
        <Header pageTitle="About" />
        <p>
          {`What more can you say about this site that hasn't already been said?`}
        </p>
      </Layout>
    )
  }
}

export default About
