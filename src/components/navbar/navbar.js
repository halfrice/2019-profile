import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Nightmode from "./nightmode"
// import NavbarItem from "./navbar-item"
import ThemeContext from "../../theme/theme-context"
import { rhythm } from "../../utils/typography"

// Base Navbar Button Style
export const itemStyle = css`
  align-items: center;
  color: inherit;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: ${rhythm(0.5)} ${rhythm(0.75)};
  text-decoration: none;
  @media only screen and (max-width: 768px) {
    font-weight: 400;
    justify-content: start;
  }
`
// Must be written without semicolons otherwise will not render when
// placed inside anything other than a css element, eg activeStyle={}.

class Navbar extends React.Component {
  state = {
    width: window.innerWidth,
    mobile: window.innerWidth <= 768,
    navVisible: window.innerWidth > 768
  }

  handleResize = () => {
    const nextWidth = window.innerWidth
    this.setState({
      width: nextWidth,
      mobile: nextWidth <= 768,
      navVisible: this.navVisible(nextWidth)
    })
  }

  navVisible(width) {
    if (width > 768) return true
    if (width <= 768 && this.state.navVisible) return false
    return this.state.navVisible
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  handleHamburgerClick() {
    this.setState({ navVisible: !this.state.navVisible })
  }

  handleLinkClick() {
    if (this.state.mobile && this.state.navVisible) {
      this.setState({ navVisible: false })
    }
  }

  renderHamburger = (theme, styles) => {
    // const savecss = css`
    //   ${itemStyle};
    //   font-weight: 700;
    //   min-height: ${rhythm(2)};
    //   &:hover {
    //     color: ${theme.navbarHoverColor};
    //     cursor: pointer;
    //   }
    //   @media only screen and (max-width: 768px) {
    //     font-weight: 700;
    //   }
    // `
    return (
      <>
        <a
          css={css`
            ${styles.button}
            &:hover {
              ${styles.buttonActive}
              border-bottom: 0;
            }
            @media only screen and (max-width: 768px) {
              font-weight: 700;
            }
          `}
          onClick={() => this.handleHamburgerClick()}
        >
          <span>|||</span>
        </a>
      </>
    )
  }

  renderSpacer = theme => {
    return (
      <>
        <div
          className="spacer"
          css={css`
            height: 1px;
            margin: 0 ${rhythm(0.75)} ${rhythm(0.5)};
            /* border-bottom: 1px solid #555; */
            border-bottom: 1px solid ${theme.navbarHover};
          `}
        />
      </>
    )
  }

  renderLinks = (theme, styles) => {
    if (this.state.navVisible) {
      return (
        <>
          <Link
            to={`/`}
            onClick={() => this.handleLinkClick()}
            css={styles.button}
            activeStyle={styles.buttonActive}
          >
            Home
          </Link>
          <Link
            to={`/projects/`}
            onClick={() => this.handleLinkClick()}
            css={styles.button}
            activeStyle={styles.buttonActive}
          >
            Projects
          </Link>
          <Link
            to={`/about/`}
            onClick={() => this.handleLinkClick()}
            css={styles.button}
            activeStyle={styles.buttonActive}
          >
            About
          </Link>
          <Link
            to={`/contact/`}
            onClick={() => this.handleLinkClick()}
            css={styles.button}
            activeStyle={styles.buttonActive}
          >
            Contact
          </Link>
          <Link
            to={`/theme/`}
            onClick={() => this.handleLinkClick()}
            css={styles.button}
            activeStyle={styles.buttonActive}
          >
            Theme
          </Link>
        </>
      )
    }
  }

  renderNavbar = theme => {
    const navbarStyle = css`
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      font-family: "Montserrat", "sans-serif";
      margin: 0px auto;
      max-width: ${rhythm(48)};
      min-height: ${rhythm(2)};
      text-decoration: none;
      @media only screen and (min-width: 768px) {
        flex-direction: row;
      }
    `
    const styles = {
      button: css`
        align-items: center;
        color: inherit;
        cursor: pointer;
        display: flex;
        height: 100%;
        max-height: ${rhythm(2)};
        justify-content: center;
        padding: ${rhythm(0.5)} ${rhythm(0.75)};
        text-decoration: none;
        @media only screen and (max-width: 768px) {
          font-weight: 400;
          justify-content: start;
        }
        &:hover {
          background: ${theme.navbarHover};
          color: ${theme.navbarHoverColor};
        }
      `,
      buttonHover: css`
        background: ${theme.navbarHover};
        color: ${theme.navbarHoverColor};
      `,
      buttonActive: {
        background: theme.background,
        color: theme.color,
        borderBottom: "1px solid " + theme.navbarHighlight
      }
    }
    if (this.state.mobile) {
      return (
        <div
          className="navbar navbar-mobile"
          css={css`
            ${navbarStyle};
            padding-bottom: ${this.state.navVisible ? rhythm(0.5) : 0};
          `}
        >
          <div
            css={css`
              display: flex;
              /* flex-flow: row nowrap; */
            `}
          >
            {this.renderHamburger(theme, styles)}
            <Nightmode styles={styles} />
          </div>
          {this.state.navVisible && this.renderSpacer(theme)}
          {this.renderLinks(theme, styles)}
        </div>
      )
    } else {
      return (
        <div className="navbar" css={navbarStyle}>
          {this.renderLinks(theme, styles)}
          <Nightmode styles={styles} />
        </div>
      )
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          // Navbar wrapper is used for visuals
          <div
            className="navbar-wrapper"
            css={css`
              background: ${theme.navbar};
              color: ${theme.color};
              width: 100%;
            `}
          >
            {this.renderNavbar(theme)}
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default Navbar
