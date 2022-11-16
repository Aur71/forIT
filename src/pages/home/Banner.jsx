import React from 'react'
import { Link } from 'react-router-dom'
import Typed from 'typed.js'
import { useEffect, useRef, useState } from 'react'

const Banner = () => {
  const typingRef1 = useRef(null)
  const [showTyping, setShowTyping] = useState(null)
  const typingRef2 = useRef(null)

  useEffect(() => {
    if (showTyping === 1) {
      const typed = new Typed(typingRef1.current, {
        strings: ['One of our clients setup'],
        typeSpeed: 50,
        showCursor: false,
      })

      return () => {
        typed.destroy()
      }
    }
  }, [showTyping])

  useEffect(() => {
    if (showTyping === 2) {
      const typed = new Typed(typingRef2.current, {
        strings: ['Some text here idk'],
        typeSpeed: 50,
        showCursor: false,
      })

      return () => {
        typed.destroy()
      }
    }
  }, [showTyping])

  return (
    <section className='home-banner'>
      <div data-aos='fade-right'>
        <Link
          onMouseOver={() => setShowTyping(1)}
          onMouseLeave={() => setShowTyping(null)}
        >
          <h3 ref={typingRef1}></h3>
          <h2 data-text='Build your dream'>Build your dream</h2>
          <p>
            View our redy to ship systems <span></span>
          </p>
        </Link>
      </div>

      <div data-aos='fade-left'>
        <Link
          onMouseOver={() => setShowTyping(2)}
          onMouseLeave={() => setShowTyping(null)}
        >
          <h4 ref={typingRef2}></h4>
          <h2 data-text='Gaming setup'>Gaming setup</h2>
          <p>
            Check our peripherals <span></span>
          </p>
        </Link>
      </div>

      <div id='under-line'></div>
    </section>
  )
}

export default Banner
