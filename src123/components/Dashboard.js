import React, { useState } from 'react'
import Card1 from './Card1'
import GetKuda from './GetKuda'
import Navbar from './Navbar'
import img1 from '../assets/images/cbn.svg'

const Dashboard = () => {
  const [img, setimg] = useState({img1})
  const [letter, setletter] = useState('')
  return (
    <>
    <Navbar/>
    <GetKuda/>
    <Card1 img={img} letter={letter}/>
    </>
  )
}

export default Dashboard