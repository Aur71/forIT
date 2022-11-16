import '../../styles/glitch-img-1.scss'

const GlitchImg1 = ({ image }) => {
  return (
    <div className='glitch-container-1'>
      <img className='glitch-item' src={image} alt='image' />
      <img className='glitch-item' src={image} alt='image' />
      <img className='glitch-item' src={image} alt='image' />
      <img className='glitch-item' src={image} alt='image' />
      <img className='glitch-item' src={image} alt='image' />
    </div>
  )
}

export default GlitchImg1
