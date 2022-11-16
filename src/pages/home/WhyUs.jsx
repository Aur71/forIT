import GlitchImg1 from '../../componenets/GlitchImg1/GlitchImg1'
import PC from '../../assets/images/pc-1.jpg'
import { Link } from 'react-router-dom'

const WhyUs = () => {
  return (
    <section className='home-why-us'>
      <div className='img-container' data-aos='fade-right'>
        <GlitchImg1 image={PC} />
      </div>

      <div className='text-container' data-aos='fade-left'>
        <div className='text'>
          <h4 className='text-above'>Why not?</h4>
          <h2>Why us?</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non sit et
            neque omnis placeat explicabo deserunt dolores officia optio quaerat
            eveniet mollitia consequuntur magnam provident a libero sint,
            inventore obcaecati rem, ipsa error doloremque. Veritatis eligendi
            reprehenderit porro aliquam quia ad dicta rerum vero placeat?
          </p>
          <Link className='text-below' to='/about'>
            About Us
            <span></span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default WhyUs
