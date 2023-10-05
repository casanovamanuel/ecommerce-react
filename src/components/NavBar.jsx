import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <nav>
      <div class="nav-wrapper">
        <div className=''>Panda Bureau</div>
        <div className="">
          <a href="#" className='btn'>Clavos</a>
          <a href="#" className='btn'>Tornillos</a>
          <a href="#" className='btn'>Tuercas</a>
        </div>
        
        <div className=''><CartWidget/></div>
      </div>
    </nav>
    )
}
export default NavBar