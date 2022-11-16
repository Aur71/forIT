import '../../../styles/menu.scss'
import MenuItems from './MenuItems'
import MenuLinks from './MenuLinks'
import MenuSocial from './MenuSocial'

const Menu = ({ showMenu }) => {
  return (
    <aside className={`menu ${showMenu && 'active'}`}>
      <MenuItems />
      <MenuLinks />
      <MenuSocial />
    </aside>
  )
}

export default Menu
