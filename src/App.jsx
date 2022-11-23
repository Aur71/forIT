import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Loader from './layout/loader/Loader'
import Home from './pages/home/Home'
import Error from './pages/error/Error'
import PcModels from './pages/pc models/PcModels'
import Peripherals from './pages/peripherals/Peripherals'
import HelpMeChose from './pages/help me chose/HelpMeChose'
import BuildYourOwn from './pages/build your own/BuildYourOwn'

import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles
// ..
AOS.init()

function App() {
  return (
    <Router>
      <Loader />

      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
        <Route path='pc-models' element={<PcModels />} />
        <Route path='peripherals' element={<Peripherals />} />
        <Route path='helpmechose' element={<HelpMeChose />} />
        <Route path='build-your-own' element={<BuildYourOwn />} />
      </Routes>
    </Router>
  )
}

export default App
