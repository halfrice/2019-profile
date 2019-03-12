import React from "react"
import { css } from "@emotion/core"
import { FaSun, FaMoon, FaToggleOn, FaToggleOff } from "react-icons/fa"
import { rhythm } from "../../utils/typography"
import ThemeContext from "../../theme/theme-context"

export const baseIcon = css`
  font-size: 20px;
  font-weight: 400;
`
export const toggleIcon = css`
  font-size: 26px;
`

export default class Nightmode extends React.Component {
  state = {
    nightmode: true
  }

  toggleNightmode(setTheme) {
    this.setState(
      { nightmode: !this.state.nightmode },
      setTheme(this.state.nightmode ? "light" : "dark")
    )
  }

  renderToggleIcon(theme) {
    const style = [baseIcon, toggleIcon]
    if (this.state.nightmode) {
      return (
        <FaToggleOn
          css={css`
            ${style};
            color: ${theme.color};
          `}
        />
      )
    } else {
      return (
        <FaToggleOff
          css={css`
            ${style};
            /* color: ${theme.navbarHoverColor}; */
          `}
        />
      )
    }
  }

  renderIcon(theme) {
    if (this.state.nightmode) {
      return (
        <FaMoon
          css={css`
            ${baseIcon};
            color: #f38eff;
          `}
        />
      )
    } else {
      return (
        <FaSun
          css={css`
            ${baseIcon};
            color: #fcf0a4;
          `}
        />
      )
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <div
            className="nightmode"
            css={css`
              margin-left: auto;
            `}
          >
            <a
              className="nightmode-button-wrapper"
              onClick={() => this.toggleNightmode(setTheme)}
              css={this.props.styles.button}
            >
              {this.renderIcon(theme)}
              {/* <FaSun
                css={css`
                  ${baseIcon};
                  color: ${this.state.nightmode ? "#888" : "gold"};
                  padding-right: ${rhythm(0.25)};
                `}
              /> */}
              {/* {this.renderToggleIcon(theme)} */}
              {/* <FaMoon
                css={css`
                  ${baseIcon};
                  color: ${this.state.nightmode ? "magenta" : "#888"};
                  padding-left: ${rhythm(0.25)};
                `}
              /> */}
            </a>
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}
