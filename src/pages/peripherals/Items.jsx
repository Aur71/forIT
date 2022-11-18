import React from 'react'
import { Link } from 'react-router-dom'

// HOOKS
// import { useGlobalContext } from '../../context/globalContext'

// DATA & ASSETS
// import items from '../../data/peripherals/items'
import keyboard from '../../assets/peripherals/keyboards/keyboard-1.png'

const Items = () => {
  // const { filterIndex } = useGlobalContext()

  return (
    <section className='peripherals-items'>
      <article className='item'>
        <div className='img-container keyboard'>
          <img src={keyboard} alt='keyboard' />
        </div>

        <div className='info-container'>
          <h3>Name</h3>

          <div className='price-container'>
            <div className='price'>
              <p>Starting At</p>
              <p>$59.99</p>
            </div>

            <Link className='learn-more'>learn more</Link>
          </div>
        </div>
      </article>
    </section>
  )
}

export default Items
