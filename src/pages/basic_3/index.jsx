import React, { useState } from 'react'

function Basic_31() {
  const [number, setNumber] = useState(0)
  return <div>number: {number}</div>
}

class Basic_3 extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      a: 1
    }
  }

  componentDidMount() {
    console.log(this.state.a)
  }

  render() {
    console.log(this)
    console.log(Basic_3)
    return (
      <>
        <Basic_31 />
        <p>{this.state.a}</p>
        <div>Basic_3</div>
        <button onClick={() => this.setState({ a: 2 })}>点击</button>
      </>
    )
  }
}

export default Basic_3