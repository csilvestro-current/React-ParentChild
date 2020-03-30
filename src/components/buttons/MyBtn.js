import React from 'react'

//Dummy Component
const MyBtn = props => {  
  return (
    <button style={styles.redBtn} >
      {props.btnText}
    </button>
  )
}
export default MyBtn

const styles = {
  redBtn: {
    backgroundColor: 'red',
    border: '40px',   
  }
}
