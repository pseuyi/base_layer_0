import React, { Component } from 'react'

import Loader from 'react-trope-loader'
import Navbar from './Navbar'
import Content from './Content'
import Footer from './Footer'

export default class App extends Component {
  constructor () {
    super()
    this.state = {
      loading: true,
    }
  }
  componentDidMount () {
    setTimeout(()=>this.setState({ loading: false }), 1200)
  }
  render () {
  console.log('rendering')
    return (
      <div>
        <Navbar />
        <h1 id="heading"><br/>{' .  base layer '}<span className='subheading'>O</span></h1>
        <Content />
        <Footer />
      </div>
    )
  }
}

// {
//   this.state.loading ?
//     (<div className='loading'><Loader /></div>) :
//     <Content />
// }
