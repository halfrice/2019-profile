import React from "react"
import { css } from "@emotion/core"
import { FaSun, FaMoon, FaToggleOn, FaToggleOff } from "react-icons/fa"
import { rhythm } from "../../utils/typography"

export const baseIcon = css`
  font-size: 20px;
  font-weight: 400;
`
export const toggleIcon = css`
  font-size: 28px;
`

export default class Nightmode extends React.Component {
  state = {
    nightmode: true
  }

  toggleNightmode() {
    this.setState({ nightmode: !this.state.nightmode })
  }

  renderToggleIcon() {
    const style = [baseIcon, toggleIcon]
    if (this.state.nightmode) return <FaToggleOn css={style} />
    else return <FaToggleOff css={style} />
  }

  render() {
    return (
      <div
        className="nightmode"
        css={css`
          margin-left: auto;
        `}
      >
        <a
          className="nightmode-button-wrapper"
          onClick={() => this.toggleNightmode()}
          css={css`
            align-items: center;
            color: white;
            cursor: pointer;
            display: flex;
            justify-content: center;
            max-height: ${rhythm(2.0)};
            margin-left: auto;
            padding: ${rhythm(0.5)} ${rhythm(0.75)};
            text-decoration: none;

            &:hover {
              background: #222;
              color: #999;
            }
          `}
        >
          <FaSun
            css={css`
              ${baseIcon};
              color: ${this.state.nightmode ? "#888" : "gold"};
              padding-right: ${rhythm(0.25)};
            `}
          />
          {this.renderToggleIcon()}
          <FaMoon
            css={css`
              ${baseIcon};
              color: ${this.state.nightmode ? "magenta" : "#888"};
              padding-left: ${rhythm(0.25)};
            `}
          />
        </a>
      </div>
    )
  }
}
