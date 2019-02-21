import React from "react"
import { css } from "@emotion/core"

class Hamburger extends React.Component {
  render() {
    return (
      <div
        css={css`
          display: flex;
          height: 2.75rem;
          overflow: hidden;
        `}
      >
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
      </div>
    )
  }
}

export default Hamburger
