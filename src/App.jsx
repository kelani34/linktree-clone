import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import profileImg from './assets/images/profile__img.png'
import slackIcon from './assets/icons/slack-icon.png'
import githubIcon from './assets/icons/github-icon.png'
import Footer from './components/Footer'
import Links from './components/Links'

function App() {
  const [link,  setLink] = useState([
    {
      id: 'twitter',
      text: 'Twiter Link',
      link: 'https://twitter.com'

    }
  ])
  return (
      <>
        <div>
          <div className='m-10 mt-25 flex flex-col justify-center items-center'>
            <img id='profile__img' src={profileImg}/>
            <h2 className='mt-5 font-bold'>Annette Black</h2>
          </div>
          <Links />
        </div>
      <div className='flex mt-4 justify-center space-x-6'>
        <img src={slackIcon} />
        <img src={githubIcon} />
      </div>
      <Footer />
      </>
  )
}

export default App
