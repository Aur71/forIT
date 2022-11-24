import React from 'react'
// import { Suspense } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'

const Showcase = ({ caseShowcase, setCaseShowcase, setFullSpec }) => {
  return (
    <div className={`showcase ${caseShowcase.id && 'active'}`}>
      <div className='model-showcase'>
        {/* <Canvas>
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <Suspense></Suspense>
        </Canvas> */}
      </div>

      <div className='btn-container'>
        <button
          className='full-spec-btn'
          onClick={() => setFullSpec({ id: 1 })}
        >
          FULL SPEC
        </button>
        <button className='change-case-btn' onClick={() => setCaseShowcase({})}>
          CHANGE CASE
        </button>
      </div>
    </div>
  )
}

export default Showcase
