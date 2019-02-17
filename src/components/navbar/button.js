import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

class Button extends React.Component {
  render() {
    return (
      <div
        css={css`
          display: flex;
          padding: 0.618rem 1rem;
          &:hover {
            background: black;
          }
        `}
      >
        <Link
          to={this.props.link}
          css={css`
            font-weight: regular;
            text-decoration: none;
            color: white;
            &:hover {
              color: #999;
            }
          `}
          activeStyle={{
            color: "#999"
          }}
        >
          {this.props.text}
        </Link>
      </div>
    )
  }
}

export default Button
