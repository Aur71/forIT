import '../../styles/navbar.scss'
import { Link } from 'react-router-dom'
import { BsBag } from 'react-icons/bs'
import { useState, useEffect } from 'react'

const NavItems = ({ setMenu, showMenu }) => {
  const [btnAnimation, setBtnAnimation] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBtnAnimation(false)
    }, 1000)

    return () => clearTimeout(timeout)
  }, [btnAnimation])

  return (
    <div className='nav-items'>
      <div
        className='sidebar-btn'
        onMouseOver={() => setBtnAnimation(true)}
        onClick={setMenu}
      >
        <span
          className={`${btnAnimation && 'active'} ${showMenu && 'close'}`}
        ></span>
        <span
          className={`${btnAnimation && 'active'} ${showMenu && 'close'}`}
        ></span>
        <span
          className={`${btnAnimation && 'active'} ${showMenu && 'close'}`}
        ></span>
      </div>

      <Link to='/' className='logo'>
        forIT
      </Link>

      <Link className='bag'>
        <BsBag />
      </Link>
    </div>
  )
}

export default NavItems
