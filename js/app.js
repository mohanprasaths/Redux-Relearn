import React from 'react'
import ReactDOM from 'react-dom'

class Welcome extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
ReactDOM.render(<Welcome></Welcome>,document.getElementById('app'))
