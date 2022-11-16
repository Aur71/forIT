import '../../styles/navbar.scss'
import { links } from '../../data/nav-links'
import { Link } from 'react-router-dom'

const NavLinks = ({ setLine, closeLine, navbarActive }) => {
  return (
    <div className={`nav-links ${navbarActive && 'inactive'}`}>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <Link
                to={link.path}
                onMouseOver={setLine}
                onMouseLeave={closeLine}
              >
                {link.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default NavLinks
