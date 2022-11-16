import { footerLinks3 } from '../../data/footer-links'
import { Link } from 'react-router-dom'

const Row5 = () => {
  return (
    <div id='row-5'>
      <ul>
        <li>forIT 2022</li>

        {footerLinks3.map((link) => {
          return (
            <li key={link.id}>
              <Link to={link.path}>{link.name}</Link>
            </li>
          )
        })}

        <li>
          SITE BY: <a href='https://github.com/Aur71'>AUR</a>
        </li>
      </ul>
    </div>
  )
}

export default Row5
