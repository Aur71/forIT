import React from 'react'
import GlitchImg1 from '../../componenets/GlitchImg1/GlitchImg1'
import image from '../../assets/images/pc-inside.jpg'

const Section2 = () => {
  return (
    <section className='section-2'>
      <div className='text-container'>
        <div className='text' data-aos='fade-left'>
          <h4>Some text</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            corporis deserunt, doloribus ipsa enim nobis nisi, officia delectus
            dignissimos adipisci qui praesentium dolorem architecto. Labore
            suscipit eius perspiciatis reprehenderit, a magnam? Commodi aut,
            culpa obcaecati illum pariatur molestiae repudiandae tempora ut
            mollitia temporibus blanditiis, incidunt fugit asperiores voluptas!
            Possimus facere rem mollitia voluptates incidunt odit atque cumque
            deserunt quisquam, harum suscipit distinctio nemo? Pariatur nemo
            voluptas, nobis cumque quo explicabo.
          </p>
        </div>
      </div>

      <div className='img-container' data-aos='fade-left'>
        <GlitchImg1 image={image} />
      </div>
    </section>
  )
}

export default Section2
