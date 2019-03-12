import React from "react"
import { css } from "@emotion/core"
import ThemeContext from "../theme/theme-context"

export default props => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <h1
        css={css`
          color: ${theme.headerColor};
        `}
      >
        {props.pageTitle}
      </h1>
    )}
  </ThemeContext.Consumer>
)
