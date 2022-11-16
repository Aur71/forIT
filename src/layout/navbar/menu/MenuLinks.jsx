import { extraLinks } from '../../../data/extra-links'
import { Link } from 'react-router-dom'

const MenuLinks = () => {
  return (
    <div className='menu-links'>
      <ul>
        {extraLinks.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MenuLinks
