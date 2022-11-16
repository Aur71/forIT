import '../../styles/home.scss'
import Hero from './Hero'
import Banner from './Banner'
import WhyUs from './WhyUs'
import MoreInfo from './MoreInfo'

const Home = () => {
  return (
    <div className='home'>
      <Hero />
      <Banner />
      <WhyUs />
      <MoreInfo />
    </div>
  )
}

export default Home
