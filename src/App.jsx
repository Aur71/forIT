import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loader from './layout/loader/Loader'
import Navbar from './layout/navbar/Navbar'
import Footer from './layout/footer/Footer'
import Home from './pages/home/Home'
import Error from './pages/error/Error'

import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..
AOS.init()

function App() {
  return (
    <Router>
      <Loader />
      <Navbar />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>

      <Footer />
    </Router>
  )
}

export default App
