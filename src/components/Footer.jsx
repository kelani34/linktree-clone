import React from 'react'

import I4G__logo from '../assets/images/I4G__logo.png'
import zuri__logo from '../assets/images/zuri__logo.png'

function Footer() {
  return (
    <div className=''>
      <hr/>
        <div className='p-6  flex  footer'>
          
        <a href='https://zuri.team' target="_blank" rel="noreferrer noopener"><img src={zuri__logo} /></a>
        <span className='text-slate-400 '>HNG Internship 9 Frontend Task</span>
        <a href='https://hngi9.zuriboard.com/' target="_blank" rel="noreferrer noopener"><img src={I4G__logo} className=''/></a>
      </div>
    </div>
  )
}

export default Footer