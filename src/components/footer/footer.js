import React from "react"
import { css } from "@emotion/core"
import FooterLink from "./footer-link"
import Clock from "./clock"

import { rhythm } from "../../utils/typography"

class Footer extends React.Component {
  render() {
    return (
      <div
        className="footer"
        id="footer"
        css={css`
          font-family: "Montserrat", "Sans-Serif";
          font-size: 12px;
          margin: 0px auto;
          max-width: ${rhythm(48)};
          padding: ${rhythm(0.5)} ${rhythm(0.75)};
        `}
      >
        <div
          className="promo"
          css={css`
            border-bottom: 1px solid #333;
            padding: 0 0 ${rhythm(0.5)} 0;
            a {
              text-decoration: none;
              color: deeppink;
              &:hover {
                text-decoration: underline;
                color: lavenderpink;
              }
            }
          `}
        >
          {`Konichiwa `}
          <a
            css={css`
              a {
                color: #888;
              }
            `}
            href="/"
          >
            fake@email.com
          </a>
        </div>
        <div
          className="status"
          css={css`
            display: flex;
            padding: ${rhythm(0.25)} 0 0;
            @media only screen and (max-width: 768px) {
              flex-direction: column;
            }
          `}
        >
          <div
            className="legalese"
            css={css`
              padding: ${rhythm(0.25)} 0 0;
              text-align: left;
              width: 33%;
              @media only screen and (max-width: 768px) {
                width: 100%;
              }
            `}
          >
            © {new Date().getFullYear()} Corporation Inc
          </div>
          <div
            className="links"
            css={css`
              display: flex;
              justify-content: center;
              padding: ${rhythm(0.25)} 0 0;
              width: 34%;
              a {
                color: #888;
                text-decoration: none;
                &:hover {
                  color: white;
                  text-decoration: underline;
                }
              }
              @media only screen and (max-width: 768px) {
                justify-content: start;
              }
            `}
          >
            <FooterLink displayText={`Fapple`} link={`/`} />
            <FooterLink displayText={`Aviato`} link={`/`} lastLink={false} />
            <FooterLink displayText={`Hooli`} link={`/`} lastLink={true} />
          </div>
          <div
            className="clock"
            css={css`
              padding: ${rhythm(0.25)} 0;
              text-align: right;
              width: 33%;
              @media only screen and (max-width: 768px) {
                text-align: left;
                width: 100%;
              }
            `}
          >
            <Clock />
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
