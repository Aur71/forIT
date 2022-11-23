import '../../styles/home.scss'
import Navbar from '../../layout/navbar/Navbar'
import Footer from '../../layout/footer/Footer'
import Hero from './Hero'
import Banner from './Banner'
import WhyUs from './WhyUs'
import MoreInfo from './MoreInfo'

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='home'>
        <Hero />
        <Banner />
        <WhyUs />
        <MoreInfo />
      </div>
      <Footer />
    </>
  )
}

export default Home
