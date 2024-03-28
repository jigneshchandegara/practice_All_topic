import React from 'react'
import Button from '../Atoms/Button'

const Pagebutton1 = () => {
    const first = () =>{
        console.log("jignesh");
    }
  return (
    <Button content="save" onclick={first} color="green"/>
  )
}

export default Pagebutton1