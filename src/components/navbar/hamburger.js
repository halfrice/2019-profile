import React from "react"
import { css } from "@emotion/core"

class Hamburger extends React.Component {
  render() {
    return (
      <>
        <div
          css={css`
            padding: 0.618rem 1rem;
            text-decoration: none;
            color: white;
            &:hover {
              color: #999;
            }
          `}
        >
          |||
        </div>
      </>
    )
  }
}

export default Hamburger
