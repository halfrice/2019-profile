import React from "react"
import { css } from "@emotion/core"
import Button from "./button"

class Navbar extends React.Component {
  state = {
    width: window.innerWidth,
    mobile: window.innerWidth <= 768,
    navVisible: window.innerWidth <= 768 ? "false" : "true"
  }

  handleHamburgerClick = () => {
    console.log("navVisible: ", this.state.navVisible)
    this.setState({ navVisible: !this.state.navVisible })
  }

  handleResize = () => {
    const nextWidth = window.innerWidth
    this.setState({
      width: nextWidth,
      mobile: nextWidth <= 768
    })
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize)
  }

  renderHamburger() {
    return (
      <div>
        <div
          onClick={this.handleHamburgerClick}
          css={css`
            display: ${this.state.mobile ? "flex" : "none"};
            padding: 0.618rem 1rem;
            text-decoration: none;
            color: white;
            &:hover {
              color: #999;
            }
          `}
        >
          |||
        </div>
      </div>
    )
  }

  renderLinks() {
    if (this.state.navVisible && this.state.mobile) {
      return (
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <Button text={`Home`} link={`/`} />
          <Button text={`Projects`} link={`/projects/`} />
          <Button text={`About`} link={`/about/`} />
          <Button text={`Contact`} link={`/contact`} />
        </div>
      )
    } else {
      return (
        <div
          css={css`
          display: flex;
          flex-direction: row};
        `}
        >
          <Button text={`Home`} link={`/`} />
          <Button text={`Projects`} link={`/projects/`} />
          <Button text={`About`} link={`/about/`} />
          <Button text={`Contact`} link={`/contact`} />
        </div>
      )
    }
  }

  render() {
    return (
      <div
        className="navbar"
        css={css`
          display: flex;
          height: ${this.state.mobile ? "2.75rem" : "100%"};
          flex-direction: ${this.state.mobile ? "column" : "row"};
          background: #333;
          text-decoration: none;
        `}
      >
        {this.renderHamburger()}
        {this.renderLinks()}
      </div>
    )
  }
}

export default Navbar
