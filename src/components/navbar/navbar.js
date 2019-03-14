import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Nightmode from "./nightmode"
import ThemeContext from "../../theme/theme-context"
import { rhythm } from "../../utils/typography"
import Hamburger from "./hamburger"

class Navbar extends React.Component {
  state = {
    width: window.innerWidth,
    mobile: window.innerWidth <= 768,
    navVisible: window.innerWidth > 768,
    links: [
      { text: "Home", to: "/" },
      { text: "Projects", to: "/projects" },
      { text: "About", to: "/about" },
      { text: "Contact", to: "/contact" },
      { text: "Theme", to: "/theme" }
    ]
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

  handleBurgerClick = () => {
    this.setState({ navVisible: !this.state.navVisible })
    console.log("Hamburger clicked.")
  }

  handleLinkClick() {
    if (this.state.mobile && this.state.navVisible) {
      this.setState({ navVisible: false })
    }
  }

  renderHamburger = (theme, styles) => {
    return (
      <>
        <a
          // css={css`
          //   ${styles.button}
          //   &:hover {
          //     ${styles.buttonActive}
          //     border-bottom: 0;
          //   }
          //   @media only screen and (max-width: 768px) {
          //     font-weight: 700;
          //   }
          // `}
          onClick={() => this.handleHamburgerClick()}
        >
          <Hamburger styles={styles} collapsed={this.state.navVisible} />
          {/* <span>|||</span> */}
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
            border-bottom: 1px solid ${theme.navbarHover};
          `}
        />
      </>
    )
  }

  renderLinks = styles => {
    const links = this.state.links.map((link, i) => (
      <Link
        key={i}
        to={link.to}
        onClick={() => this.handleLinkClick()}
        css={styles.button}
        activeStyle={styles.buttonActive}
      >
        {link.text}
      </Link>
    ))
    if (this.state.navVisible) {
      return <>{links}</>
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
        -webkit-transition: all 0.7s ease;
        -moz-transition: all 0.7s ease;
        -ms-transition: all 0.7s ease;
        -o-transition: all 0.7s ease;
        transition: all 0.7s ease;
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
              flex-flow: row nowrap;
            `}
          >
            {/* <Hamburger
              onClick={this.handleBurgerClick}
              styles={styles}
              collapsed={this.state.navVisible}
            /> */}
            {this.renderHamburger(theme, styles)}
            <Nightmode styles={styles} />
          </div>
          {this.state.navVisible && this.renderSpacer(theme)}
          {this.renderLinks(styles)}
        </div>
      )
    } else {
      return (
        <div className="navbar" css={navbarStyle}>
          {this.renderLinks(styles)}
          <Nightmode styles={styles} />
        </div>
      )
    }
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
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
