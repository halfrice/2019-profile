import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

class Button extends React.Component {
  render() {
    return (
      <>
        <Link
          to={this.props.link}
          css={css`
            padding: 0.618rem 1rem;
            text-decoration: none;
            color: white;
            &:hover {
              color: #999;
            }
          `}
          activeStyle={{
            color: "#999",
            background: "black",
            borderBottom: "0.1rem solid #ff0075"
          }}
        >
          {this.props.text}
        </Link>
      </>
    )
  }
}

export default Button
