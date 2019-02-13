import React from "react"
import { css } from "@emotion/core"

export default props => (
  <h1
    css={css`
      color: #00fff3;
    `}
  >
    {props.pageTitle}
  </h1>
)
