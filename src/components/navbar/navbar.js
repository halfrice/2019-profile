import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

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
    if (this.state.mobile) {
      return (
        <>
          <a
            className="item"
            css={css`
              padding: 0.618rem 1rem;
              text-decoration: none;
              color: white;
              font-weight: 700;
              cursor: pointer;
              &:hover {
                color: #999;
                cursor: pointer;
              }
              @media only screen and (max-width: 768px) {
              }
            `}
            onClick={() => this.handleHamburgerClick()}
          >
            <span>|||</span>
          </a>
          {this.renderSpacer()}
        </>
      )
    }
  }

  renderSpacer = () => {
    if (this.state.navVisible) {
      return (
        <>
          <div
            className="spacer"
            css={css`
              height: 1px;
              margin: 0 1rem 0 1rem;
              border-bottom: 1px solid #888;
            `}
          />
        </>
      )
    }
  }

  itemActiveStyle() {
    if (this.state.mobile) {
      return {
        color: "#999",
        background: "black",
        borderBottom: "0.1rem solid #ff0075"
      }
    } else {
      return false
    }
  }

  renderLinks = () => {
    if (this.state.navVisible) {
      const itemStyle = css`
        padding: 0.618rem 1rem;
        text-decoration: none;
        color: white;
        cursor: pointer;
        &:hover {
          background: #222;
          color: #999;
        }
        @media only screen and (max-width: 768px) {
          margin: 0 1rem;
          font-weight: 100;
        }
      `
      // Must be written without semicolons otherwise will not render when
      // placed inside anything other than a css element, eg activeStyle={}.
      const itemActiveStyle = {
        color: "#999",
        background: "black",
        borderBottom: "0.1rem solid #ff0075"
      }
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

  render() {
    return (
      <div
        className="navbar"
        css={css`
          display: flex;
          flex-direction: column;
          min-height: 2.75rem;
          background: #333;
          font-weight: 100;
          text-decoration: none;
          @media only screen and (min-width: 768px) {
            flex-direction: row;
          }
        `}
      >
        {this.renderHamburger()}
        {this.renderLinks()}
      </div>
    )
  }
}

export default Navbar
