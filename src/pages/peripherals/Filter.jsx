import React from 'react'

// HOOKS
import { useGlobalContext } from '../../context/globalContext'

// DATA & ASSETS
import { peripheralsFilter } from '../../data/peripherals/peripheralsFilter'

const Filter = () => {
  const { setFilterIndex } = useGlobalContext()

  return (
    <section className='peripherals-filter'>
      {peripheralsFilter.map((item) => {
        return (
          <div key={item.id} onClick={() => setFilterIndex(item.id)}>
            <h2>{item.title}</h2>
          </div>
        )
      })}
    </section>
  )
}

export default Filter
