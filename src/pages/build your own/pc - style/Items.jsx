import React from 'react'
import { cases } from '../../../data/cases'

const Items = ({
  setFullSpec,
  setActiveCase,
  activeCase,
  setShowCase,
  setActiveStage,
}) => {
  const handlePreview = (item) => {
    setActiveCase(item)
    setShowCase(true)
  }

  return (
    <div className='items'>
      <div className='row-1'>
        <h2>
          Case <span>(5)</span>
        </h2>
        <button className='filter-btn'>filter</button>
        <button className='sort-btn'>sort</button>
      </div>

      <div className='row-2'>
        {cases.map((item) => {
          return (
            <div
              className={`item ${activeCase === item ? 'active' : null}`}
              key={item.id}
              onClick={() => setActiveCase(item)}
            >
              <h3>{item.name}</h3>

              <div className='img-container'>
                <img src={item.img} alt={item.name} />
              </div>

              <div className='btn-container'>
                <button
                  className='full-spec-btn'
                  onClick={() => setFullSpec(true)}
                >
                  FULL SPEC
                </button>
                <button
                  className='preview-btn'
                  onClick={() => handlePreview(item)}
                >
                  PREVIEW
                </button>
              </div>
            </div>
          )
        })}
      </div>

      <button className='row-3' onClick={() => setActiveStage('performance')}>
        Proceed
      </button>
    </div>
  )
}

export default Items
