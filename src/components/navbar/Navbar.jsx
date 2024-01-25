import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const select = useSelector((state)=>state.AllCarts)

  return (
    <div className='navbar'>
      <span style={{color:'blue'}}>PAK</span>
      <div>
        <Link className='links' to= "/">Home</Link>
        <Link className='links' to= "/cart">Cart</Link>
        <Link className='links' to= "about">About</Link>
      </div>
      <h4>Total : {select.length}</h4>
    </div>
  )
}

export default Navbar
