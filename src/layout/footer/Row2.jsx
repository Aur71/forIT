import { Link } from 'react-router-dom'
import { footerLinks1, footerLinks2 } from '../../data/footer-links'

const Row2 = () => {
  return (
    <div id='row-2'>
      <div className='links-container'>
        <h4>SUPPORT & CONTACT</h4>

        <ul>
          {footerLinks1.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>

      <h2 id='footer-logo'>forIT</h2>

      <div className='links-container'>
        <h4>SITE INFORMATION</h4>

        <ul>
          {footerLinks2.map((link) => {
            return (
              <li key={link.id}>
                <Link to={link.path}>{link.name}</Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Row2
