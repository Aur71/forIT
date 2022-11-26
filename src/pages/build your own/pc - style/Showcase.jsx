import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'

function Model(props) {
  const { scene } = useGLTF('src\\assets\\style\\case-1\\scene.gltf')
  return <primitive object={scene} {...props} />
}

const Showcase = ({ caseShowcase, setCaseShowcase, setFullSpec }) => {
  return (
    <div className={`showcase ${caseShowcase.id && 'active'}`}>
      <div className='model-showcase'>
        <Canvas dpr={[1, 2]}>
          <PresentationControls speed={1.5}>
            <Stage>
              <Model />
            </Stage>
          </PresentationControls>
        </Canvas>
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
