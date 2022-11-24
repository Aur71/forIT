import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

const FullSpec = ({ fullSpec, setFullSpec }) => {
  return (
    <aside className={`full-spec ${fullSpec.id && 'active'}`}>
      <button className='close-btn' onClick={() => setFullSpec({})}>
        <AiOutlineCloseCircle className='icon' />
      </button>
    </aside>
  )
}

export default FullSpec
