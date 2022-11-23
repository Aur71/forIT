import React from 'react'
import { Link } from 'react-router-dom'
import { BiExit } from 'react-icons/bi'

const ExitBtn = () => {
  return (
    <Link to='/' className='exit-btn'>
      Exit <BiExit className='icon' />
    </Link>
  )
}

export default ExitBtn
