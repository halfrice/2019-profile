import React from "react"
import { css } from "@emotion/core"

class FooterLink extends React.Component {
  render() {
    return (
      <div>
        <a
          css={css`
            border-right: ${!this.props.lastLink ? `1px solid #333` : null};
            margin: 3px 10px 0px 0px;
            padding: 0px 12px 0px 0px;
            &:hover {
              color: white;
            }
          `}
          href={this.props.link}
        >
          {this.props.displayText}
        </a>
      </div>
    )
  }
}

export default FooterLink
