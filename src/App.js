import React, { Component } from 'react'
import './App.css'
import Nav from './components/Nav';

//const btnText = ['Home','About', 'Contact']

class App extends Component {
  state ={
    btnText:['Home','About', 'Contact']
  }
  render() {
    //Map through it here
    // let buttonList = this.state.btnText.map((element, i) => {
    //   //Pass through the key and value from the props comp.
    //   return <Nav key={i} val={element} />
    // })
    return (
      <div style={styles.container}>
        <Nav btnText={this.state.btnText}/>
        <h1>Heading 1</h1>
      </div>
    )
  }
}

export default App

const styles = {
  container: {
    display: 'flex',
    flextDirection: 'column',
    background: 'lightgrey',
    height: '100vh',
    fontSize: '0.75rem'
  }
}