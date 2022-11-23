import '../../styles/help-me-chose.scss'
import Navbar from '../../layout/navbar/Navbar'
import Footer from '../../layout/footer/Footer'
import Hero from './Hero'
import Section1 from './Section1'
import Section2 from './Section2'
import Banner from './Banner'

const HelpMeChose = () => {
  return (
    <>
      <Navbar />
      <main className='help-me-chose'>
        <Hero />
        <Section1 />
        <Section2 />
        <Banner />
      </main>
      <Footer />
    </>
  )
}

export default HelpMeChose
