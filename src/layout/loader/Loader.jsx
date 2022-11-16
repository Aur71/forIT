import '../../styles/loader.scss'
import Video from '../../assets/videos/loader.mp4'
import { useGlobalContext } from '../../context/globalContext'

const Loader = () => {
  const { loader } = useGlobalContext()

  return (
    <div className={`loader ${loader && 'active'}`}>
      <video autoPlay muted loop>
        <source src={Video} />
      </video>
    </div>
  )
}

export default Loader
