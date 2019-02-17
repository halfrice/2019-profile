import React from "react"

class Clock extends React.Component {
  state = {
    time: "loading time..."
  }

  componentDidMount() {
    this.stardate = new Date()
    this.interval = setInterval(this.tick, 1000)
  }

  tick = () => {
    this.setState({ time: new Date().toLocaleString() })
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    return (
      <div>
        <span>{this.state.time}</span>
      </div>
    )
  }
}

export default Clock
