import { useState } from 'react'
import { ImSun } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { BsFillMoonStarsFill } from "react-icons/bs";
import logo from '../assets/logo.png'

function Navbar() {
  const [navState, setNavState] = useState(false)
  return (
    <nav className='navbar'>
      <div className='brand'>
        <img src={logo} alt="" className='border-red' />
      </div>
      <div className="toggle-container">
        <div className="toggle" onClick={() => { setNavState(prv => !prv) }}>{navState ? <MdClose /> : <GiHamburgerMenu />}</div>
        <div className="mode"><ImSun /></div>
        <div className={navState ? "links-container--open" : "links-container"}>
          <ul className="links">
            <li><a href="#">Feature</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Launch</a></li>
            <li><a href="#">SignUp</a></li>
          </ul>
        </div>
      </div>


    </nav>
  )
}

export default Navbar