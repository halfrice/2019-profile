import React from "react"
import { css } from "@emotion/core"
import FooterLink from "./footer-link"
import Clock from "./clock"

class Footer extends React.Component {
  render() {
    return (
      <div
        css={css`
          bottom: 0;
          width: 100%;
          padding: 0 1rem 1.618rem;
          background: #000;
        `}
      >
        <div
          className="footer"
          id="footer"
          css={css`
            font-size: 11px;
            line-height: 1.34rem;
            color: #888;
          `}
        >
          <div
            className="promo"
            css={css`
              margin: 0 0 0.6rem 0;
              padding: 0 0 0.4rem 0;
              border-bottom: 1px solid #333;
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
              @media only screen and (max-width: 768px) {
                flex-direction: column;
              }
            `}
          >
            <div
              className="legalese"
              css={css`
                width: 33%;
                text-align: left;
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
                width: 34%;
                display: flex;
                justify-content: center;
                a {
                  text-decoration: none;
                  color: #888;
                  &:hover {
                    text-decoration: underline;
                    color: white;
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
                width: 33%;
                text-align: right;
                @media only screen and (max-width: 768px) {
                  width: 100%;
                  text-align: left;
                }
              `}
            >
              <Clock />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer
