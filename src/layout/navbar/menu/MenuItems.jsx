import { links } from '../../../data/nav-links'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

const MenuItems = () => {
  return (
    <div className='menu-items'>
      <ul>
        {links.map((link) => {
          const { id, path, name, messege } = link

          return (
            <li key={id}>
              <span>
                {messege}
                <BsArrowRight />
              </span>
              <Link data-text={name} to={path}>
                {name}
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MenuItems
