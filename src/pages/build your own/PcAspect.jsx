import React from 'react'
import Case1 from '../../assets/cases/case-1.png'

const PcAspect = () => {
  return (
    <section className='pc-aspect'>
      <div className='center'>
        <div className='showcase'></div>

        <div className='options'>
          <div className='cases'>
            <div className='filters'>
              <h1>
                CASES <span>(5)</span>
              </h1>

              <button>FILTER</button>

              <button>SORT BY</button>
            </div>

            <div className='items'>
              <div className='case'>
                <h2>Title</h2>
                <div className='img-container'>
                  <img src={Case1} alt='case-1' />
                </div>
                <button>More info</button>
              </div>

              <div className='case'></div>

              <div className='case'></div>

              <div className='case'></div>

              <div className='case'></div>
            </div>

            <button className='btn'>CONTINUE</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PcAspect
