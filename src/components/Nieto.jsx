import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const Nieto = () => {
    
    const {value} = useContext(MyContext)

  return (
    <h1>{value}</h1>
  )
}

export default Nieto