import React from 'react'

const Navigation = () => {
  return (
    <nav className='w-full px-[91px] py-[4px] h-[72px] flex items-center justify-between'>
      <img className='' src="./images/logo.png" alt="" />
      <ul className='flex items-center gap-20 font-[500] text-[16px]'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Navigation