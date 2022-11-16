import { Link } from 'react-router-dom'
import { socialLinks } from '../../../data/social-links'

const MenuSocial = () => {
  return (
    <div className='menu-social'>
      {socialLinks.map((link) => {
        return (
          <Link key={link.id} path={link.path}>
            {link.icon}
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </Link>
        )
      })}
    </div>
  )
}

export default MenuSocial
