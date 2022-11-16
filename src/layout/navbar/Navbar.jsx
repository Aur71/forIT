import '../../styles/navbar.scss'
import NavItems from './NavItems'
import NavLinks from './NavLinks'
import Menu from './menu/Menu'
import { useRef, useState, useEffect } from 'react'
import { useGlobalContext } from '../../context/globalContext'

const Navbar = () => {
  const lineRef = useRef(null)
  const [showMenu, setShowMenu] = useState(false)
  const { setLoader } = useGlobalContext()
  const [navbarActive, setNavbarActive] = useState(false)

  const setLine = (e) => {
    const target = e.target.getBoundingClientRect()
    const left = target.left
    const width = target.width

    lineRef.current.style.left = `${left}px`
    lineRef.current.style.width = `${width}px`
    lineRef.current.style.transform = `scale(1)`
  }

  const closeLine = () => {
    lineRef.current.style.transform = `scale(0)`
  }

  const setMenu = () => {
    setLoader(true)
    setShowMenu(!showMenu)
  }

  const setNavbar = () => {
    if (window.scrollY !== 0) {
      setNavbarActive(true)
    } else {
      setNavbarActive(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', setNavbar)

    return () => {
      window.removeEventListener('scroll', setNavbar)
    }
  })

  return (
    <nav
      className={`navbar ${showMenu && 'active'} ${navbarActive && 'active'}`}
    >
      <NavItems setMenu={setMenu} showMenu={showMenu} />

      <div className='line'>
        <span ref={lineRef}></span>
      </div>

      <NavLinks
        setLine={setLine}
        closeLine={closeLine}
        navbarActive={navbarActive}
      />

      <Menu showMenu={showMenu} />
    </nav>
  )
}

export default Navbar
