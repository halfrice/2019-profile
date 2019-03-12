import React from "react"
import themes from "./themes"
import ThemeContext from "./theme-context"

export default class ThemeProvider extends React.Component {
  setTheme = name => {
    if (themes[name]) {
      this.setState({ themeName: name, theme: themes[name] })
    } else {
      this.setState({ themeName: "default", theme: themes.default })
    }
  }

  state = {
    themeName: "dark",
    theme: themes.dark,
    setTheme: this.setTheme
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}
