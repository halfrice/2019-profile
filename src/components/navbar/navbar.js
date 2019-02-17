import React from "react"
import { css } from "@emotion/core"
import Button from "./button"

class Navbar extends React.Component {
  render() {
    return (
      <div
        css={css`
          display: flex;
          background: #333;
          text-decoration: none;
        `}
      >
        <Button text={`Home`} link={`/`} />
        <Button text={`Projects`} link={`/projects/`} />
        <Button text={`About`} link={`/about/`} />
        <Button text={`Contact`} link={`/contact`} />
      </div>
    )
  }
}

export default Navbar
