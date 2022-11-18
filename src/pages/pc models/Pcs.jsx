import React from 'react'
import pc from '../../assets/pc/pc-1.png'
import { Link } from 'react-router-dom'
import { RiMovie2Fill } from 'react-icons/ri'
import { pcList } from '../../data/pc-list'

const Pcs = () => {
  return (
    <section className='pc-models-pcs'>
      {pcList.map((pc) => {
        const { id, img, name, desc, use, price } = pc

        return (
          <article key={id} className='pc'>
            <div className='img-container'>
              <img src={img} alt={name} />
            </div>

            <div className='info-container'>
              <h3>{name}</h3>

              <div className='info'>
                <span></span>

                <p>{desc}</p>

                <div className='details'>
                  {use.map((item, index) => {
                    return (
                      <p key={index}>
                        {item.icon}
                        {item.name}
                      </p>
                    )
                  })}
                </div>
              </div>

              <div className='price-container'>
                <div className='price'>
                  <span></span>
                  <span></span>
                  <span></span>
                  <p>Starting at</p>
                  <p>${price}</p>
                </div>

                <Link className='learn-more'>Learn More</Link>
              </div>
            </div>
          </article>
        )
      })}
    </section>
  )
}

export default Pcs
