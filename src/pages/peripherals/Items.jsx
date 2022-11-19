import React from 'react'
import { Link } from 'react-router-dom'

// HOOKS
import { useGlobalContext } from '../../context/globalContext'
import { useEffect, useState } from 'react'

// DATA & ASSETS
import items from '../../data/peripherals/items'

const Items = () => {
  const { filterIndex } = useGlobalContext()
  const [array, setArray] = useState({ id: 1, data: [], styling: '' })

  useEffect(() => {
    items.map((item) => {
      if (item.id === filterIndex) {
        setArray(item)
      } else {
        return []
      }
    })
  }, [filterIndex])

  return (
    <section className='peripherals-items'>
      {array.data.map((item) => {
        return (
          <article key={item.id} className='item'>
            <div className={`img-container ${array.styling}`}>
              <img src={item.img} alt={item.name} />
            </div>

            <div className='info-container'>
              <h3>{item.name}</h3>

              <div className='price-container'>
                <div className='price'>
                  <p>Starting At</p>
                  <p>${item.price}</p>
                </div>

                <Link className='learn-more'>learn more</Link>
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Items
