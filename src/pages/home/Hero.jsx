import React from 'react'
import video from '../../assets/videos/bk-video.mp4'
import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa'

import Typed from 'typed.js'
import { useEffect, useRef } from 'react'

const Hero = () => {
  const typingRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(typingRef.current, {
      strings: [
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus distinctio reprehenderit optio!',
      ],
      startDelay: 1000,
      typeSpeed: 50,
      showCursor: false,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section className='home-hero'>
      <video autoPlay muted loop>
        <source src={video} type='video/mp4' />
      </video>

      <div className='text-1'>
        <h1>
          for<span>IT</span>,
        </h1>
        <h2>Become a king!</h2>
      </div>

      <div className='text-2'>
        <p ref={typingRef}></p>

        <Link>
          EXPLORE OUR GAMING PC MODELS <FaLongArrowAltRight />
          <span></span>
        </Link>
      </div>
    </section>
  )
}

export default Hero
