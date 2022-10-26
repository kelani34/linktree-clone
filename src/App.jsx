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
      link: 'https://twitter.com/kelanicodes'
    },
    {
      id: 'btn_zuri',
      text: 'Zuri Team',
      link: 'https://training.zuri.team'
    },
    {
      id: 'books',
      text: 'Books',
      link: 'https://books.zuri.team'
    },
    {
      id: 'book__python',
      text: 'Twiter Link',
      link: 'https://books.zuri.team/python-for-beginners?ref_id=kelanitaiwo34'
    },
    {
      id: 'pitch',
      text: 'Pitch',
      link: 'https://background.zuri.team'
    },
    {
      id: 'book__design',
      text: '',
      link: 'https://books.zuri.team/design-rules'
    },
  ])
  return (
      <>
        <div>
            <div className='m-10 mt-25 flex flex-col justify-center items-center'>
              <img id='profile__img' src={profileImg}/>
              <h2 className='mt-5 font-bold'>Taiwo Shina-Kelani</h2>
            </div>
            { link.map((link) => {
              return (
                <Links 
                id={link.id}
                text= {link.text}
                link={link.link}
                />
              )
            }) 
          }
          <div className='flex mt-4 justify-center space-x-6'>
            <img src={slackIcon} />
            <img src={githubIcon} />
          </div>
      </div>
      <Footer />
      </>
  )
}

export default App
