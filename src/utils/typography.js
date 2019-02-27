import Typography from "typography"

const typography = new Typography({
  baseFontSize: "14px",
  baseLineHeight: 1.55,
  headerFontFamily: ["Montserrat", "sans-serif"],
  bodyFontFamily: ["Roboto", "sans-serif"]
})

delete typography.googleFonts

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
