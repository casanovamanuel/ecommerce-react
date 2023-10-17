import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    
      <nav className="nav-wrapper row">
        <div className='col s2'>Panda Bureau</div>
        <div className="col s8">
          <button className='btn'>Clavos</button>
          <button className='btn'>Tornillos</button>
          <button className='btn'>Tuercas</button>
        </div>
        
        <div className='col s2'><CartWidget/></div>
      </nav>
    
    )
}
export default NavBar