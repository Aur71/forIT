import React from 'react'
import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'

function Model({ activeCase }) {
  const { scene } = useGLTF(activeCase.path)
  return <primitive object={scene} />
}

const Showcase = ({ setFullSpec, showCase, setShowCase, activeCase }) => {
  return (
    <div className={`showcase  ${showCase && 'active'}`}>
      <div className='model-showcase'>
        <Canvas dpr={[1, 2]}>
          <PresentationControls speed={1.5}>
            <Stage>
              <Model activeCase={activeCase} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </div>

      <div className='btn-container'>
        <button className='full-spec-btn' onClick={() => setFullSpec(true)}>
          FULL SPEC
        </button>
        <button className='change-case-btn' onClick={() => setShowCase(false)}>
          CHANGE CASE
        </button>
      </div>
    </div>
  )
}

export default Showcase
