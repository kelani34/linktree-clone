import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import profileImg from './assets/images/profile__img.png'

function App() {
  return (
      <>
        <div>
          <div className='m-10 flex flex-col justify-center items-center'>
            <img id='profile__img' src={profileImg}/>
            <h2 className='mt-5 font-bold'>Annette Black</h2>
          </div>
          <div className='items-center'>
            <a href='https://twitter.com'> <div className='rounded-lg mx-2 lg:mx-20 md:mx-10 p-4 text-center links'> Twitter Link</div></a>
          </div>
        </div>
      
      </>
  )
}

export default App
