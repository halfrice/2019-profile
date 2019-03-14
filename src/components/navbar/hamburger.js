import React from "react"
import { css } from "@emotion/core"
import ThemeContext from "../../theme/theme-context"
import { rhythm } from "../../utils/typography"

export default class Hamburger extends React.Component {
  renderHamburger(theme) {
    const bar = css`
      display: block;
      height: 2px;
      width: 23px;
      background: ${theme.color};
      margin: 0 auto;
      -webkit-transition: all 0.7s ease;
      -moz-transition: all 0.7s ease;
      -ms-transition: all 0.7s ease;
      -o-transition: all 0.7s ease;
      transition: all 0.7s ease;
    `
    const topBar = css`
      margin: 0 auto 6px;
    `
    const middleBar = css`
      margin: 0 auto;
    `
    const bottomBar = css`
      margin: 6px auto 0;
    `
    const topAnimation = css`
      -webkit-transform: translateY(8px) rotateZ(45deg);
      -moz-transform: translateY(8px) rotateZ(45deg);
      -ms-transform: translateY(8px) rotateZ(45deg);
      -o-transform: translateY(8px) rotateZ(45deg);
      transform: translateY(8px) rotateZ(45deg);
    `
    const middleAnimation = css`
      width: 0;
    `
    const bottomAnimation = css`
      -webkit-transform: translateY(-8px) rotateZ(-45deg);
      -moz-transform: translateY(-8px) rotateZ(-45deg);
      -ms-transform: translateY(-8px) rotateZ(-45deg);
      -o-transform: translateY(-8px) rotateZ(-45deg);
      transform: translateY(-8px) rotateZ(-45deg);
    `
    const collapsed = this.props.collapsed || false
    if (collapsed) {
      return (
        <>
          <div css={[bar, topBar, topAnimation]} />
          <div css={[bar, middleBar, middleAnimation]} />
          <div css={[bar, bottomBar, bottomAnimation]} />
        </>
      )
    } else {
      return (
        <>
          <div css={[bar, topBar]} />
          <div css={[bar, middleBar]} />
          <div css={[bar, bottomBar]} />
        </>
      )
    }
  }

  render() {
    const styles = this.props.styles || {}
    const hamburger = css`
      /* border: 1px solid deeppink; */
      display: block;
      width: auto;
      min-height: 100%;
      -webkit-transition: all 0.7s ease;
      -moz-transition: all 0.7s ease;
      -ms-transition: all 0.7s ease;
      -o-transition: all 0.7s ease;
      transition: all 0.7s ease;
    `
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div
            className="hamburger-button-wrapper"
            css={[styles.button, hamburger]}
            onClick={this.props.handleBurgerClick}
          >
            {this.renderHamburger(theme)}
          </div>
        )}
      </ThemeContext.Consumer>
    )
  }
}
