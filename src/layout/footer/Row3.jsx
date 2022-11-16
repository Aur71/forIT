import { social } from '../../data/footer-links'

const Row3 = () => {
  return (
    <div id='row-3'>
      <div></div>

      <div>
        {social.map((item) => {
          return (
            <a href={item.path} key={item.id}>
              {item.icon}
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </a>
          )
        })}
      </div>

      <div></div>
    </div>
  )
}

export default Row3
