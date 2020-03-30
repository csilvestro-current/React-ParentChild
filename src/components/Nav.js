import React from 'react'
import MyBtn from './buttons/MyBtn';

//Dummy Component
const Nav = props => {  
  return (
    <nav style={styles.redBtn}>
      <MyBtn {...props} />
      <MyBtn {...props} />
      <MyBtn {...props} />
    </nav>
  )
}
export default Nav



const styles = {
  redBtn: {
    backgroundColor: 'lightblue',
    display: 'flex',
    flexDirection: 'column',
    width: '10%'
  }
}
