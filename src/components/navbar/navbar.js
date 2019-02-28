import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Nightmode from "./nightmode"

import { rhythm } from "../../utils/typography"
import { FaCoffee } from "react-icons/fa"

export const itemStyle = css`
  align-items: center;
  color: white;
  cursor: pointer;
  display: flex;
  height: 100%:
  justify-content: center;
  padding: ${rhythm(0.5)} ${rhythm(0.75)};
  text-decoration: none;
  &:hover {
    background: #222;
    color: #999;
  }
  @media only screen and (max-width: 768px) {
    font-weight: 400;
    justify-content: start;
  }
`

// Must be written without semicolons otherwise will not render when
// placed inside anything other than a css element, eg activeStyle={}.
export const itemActiveStyle = {
  color: "#999",
  background: "#000",
  borderBottom: "0.1rem solid #ff0075"
}

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

  renderHamburger = () => {
    return (
      <>
        <a
          css={css`
            ${itemStyle};
            font-weight: 700;
            min-height: ${rhythm(2)};
            &:hover {
              color: #999;
              cursor: pointer;
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

  renderSpacer = () => {
    return (
      <>
        <div
          className="spacer"
          css={css`
            height: 1px;
            margin: 0 ${rhythm(0.75)} ${rhythm(0.5)};
            border-bottom: 1px solid #555;
          `}
        />
      </>
    )
  }

  renderLogo = () => {
    return (
      <>
        <a
          className="item"
          css={css`
            ${itemStyle};
            color: deeppink;
            align-items: center;
            font-size: 20px;
            margin-left: auto;
          `}
        >
          <FaCoffee />
        </a>
      </>
    )
  }

  renderLinks = () => {
    if (this.state.navVisible) {
      return (
        <>
          <Link
            className="item"
            to={`/`}
            css={itemStyle}
            activeStyle={itemActiveStyle}
          >
            Home
          </Link>
          <Link
            className="item"
            to={`/projects/`}
            css={itemStyle}
            activeStyle={itemActiveStyle}
          >
            Projects
          </Link>
          <Link
            className="item"
            to={`/about/`}
            css={itemStyle}
            activeStyle={itemActiveStyle}
          >
            About
          </Link>
          <Link
            className="item"
            to={`/contact/`}
            css={itemStyle}
            activeStyle={itemActiveStyle}
          >
            Contact
          </Link>
        </>
      )
    }
  }

  renderNavbar = () => {
    const navbarStyle = css`
      display: flex;
      flex-direction: column;
      justify-direction: flex-start;
      font-family: "Montserrat", "sans-serif";
      margin: 0px auto;
      max-width: ${rhythm(48)};
      min-height: ${rhythm(2)};
      text-decoration: none;
      @media only screen and (min-width: 768px) {
        flex-direction: row;
      }
    `
    if (this.state.mobile) {
      return (
        <div className="navbar navbar-mobile" css={navbarStyle}>
          <div
            css={css`
              display: flex;
              flex-flow: row nowrap;
            `}
          >
            {this.renderHamburger()}
            <Nightmode />
          </div>
          {this.state.navVisible && this.renderSpacer()}
          {this.renderLinks()}
        </div>
      )
    }
    return (
      <div className="navbar" css={navbarStyle}>
        {this.renderLinks()}
        <Nightmode />
      </div>
    )
  }

  render() {
    return (
      <div
        className="navbar-wrapper"
        css={css`
          width: 100%;
          background: #333;
        `}
      >
        {this.renderNavbar()}
      </div>
    )
  }
}

export default Navbar
