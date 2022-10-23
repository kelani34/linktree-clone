import React from 'react'

import I4G__logo from '../assets/images/I4G__logo.png'
import zuri__logo from '../assets/images/zuri__logo.png'

function Footer() {
  return (
    <div className=''>
        <div className='p-6  flex  footer'>
        <img src={zuri__logo} />
        <span className='text-slate-400 '>HNG Internship 9 Frontend Task</span>
        <img src={I4G__logo} className=''/>
      </div>
    </div>
  )
}

export default Footer