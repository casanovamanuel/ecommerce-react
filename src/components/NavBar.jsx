import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (

    <nav className="nav-wrapper row">
      <Link to="/">
        <div className='col s2'>Panda Bureau</div>
      </Link>
      <div className="col s8">
        <Link to="/1">
          <div className='btn'>Clavos</div>
        </Link>
        <Link to="/2">
          <div className='btn'>Tornillos</div>
        </Link>
        <Link to="/3">
          <div className='btn'>Tuercas</div>
        </Link>
      </div>

      <div className='col s2'><CartWidget /></div>
    </nav>

  )
}
export default NavBar