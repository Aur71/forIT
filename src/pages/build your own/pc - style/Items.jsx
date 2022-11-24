import React from 'react'
import case1 from '../../../assets/style/case-1/fractal_meshify.png'

const Items = ({ setFullSpec, setCaseShowcase }) => {
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
        <div className='item'>
          <h3>Title</h3>

          <div className='img-container'>
            <img src={case1} alt='' />
          </div>

          <div className='btn-container'>
            <button
              className='full-spec-btn'
              onClick={() => setFullSpec({ id: 1 })}
            >
              FULL SPEC
            </button>
            <button
              className='preview-btn'
              onClick={() => setCaseShowcase({ id: 1 })}
            >
              PREVIEW
            </button>
          </div>
        </div>

        <div className='item'></div>
        <div className='item'></div>
        <div className='item'></div>
        <div className='item'></div>
        <div className='item'></div>
        <div className='item'></div>
      </div>

      <button className='row-3'>Proceed</button>
    </div>
  )
}

export default Items
