import { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import profileImg from './assets/images/profile__img.png'
import slackIcon from './assets/icons/slack-icon.png'
import githubIcon from './assets/icons/github-icon.png'
import shareIcon from './assets/icons/share-icon.svg'
import menuIcon from './assets/icons/menu-icon.svg'
import Footer from './components/Footer'
import Links from './components/Links'
import { FacebookIcon, TwitterIcon, WhatsappIcon,} from "react-share";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";

function App() {
  const [link,  setLink] = useState([
    {
      id: 'twitter',
      text: 'Twiter Link',
      display: 'block',
      link: 'https://twitter.com/kelanicodes'
    },
    {
      id: 'slack',
      text: 'Taiwo Shina-kelani',
      display: 'hidden',
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
      display: 'block',
      link: 'https://books.zuri.team'
    },
    {
      id: 'book__python',
      text: 'Twiter Link',
      display: 'block',
      link: 'https://books.zuri.team/python-for-beginners?ref_id=kelanitaiwo34'
    },
    {
      id: 'pitch',
      text: 'Pitch',
      display: 'block',
      link: 'https://background.zuri.team'
    },
    {
      id: 'book__design',
      text: 'Design books',
      display: 'block',
      link: 'https://books.zuri.team/design-rules'
    },
  ])
  return (
      <>
        <div>
          
          <div className='m-10 mt-25 flex flex-col justify-center items-center relative'>
            
            <img id='profile__img' src={profileImg} className='profile-img'/>
            <h2 className='mt-5 font-bold'>Taiwo Shina-Kelani</h2>
            <div class="tooltip">
              <img src={shareIcon} className='absolute share-button'/>
              <TwitterShareButton url={"Checkout kehlani on https://linktr-ee.netlify.app"} className='absolute share-button opacity-0 twitter'>
                  <TwitterIcon size={32} round={true} />
              </TwitterShareButton>
              <span className="tooltiptext">Share button</span>
          </div>
          <img src={menuIcon} className='absolute menu-icon'/>
          </div>
          { link.map((link) => {
            return (
              <Links 
              adding the target="_blank"
              id={link.id}
              text= {link.text}
              link={link.link}
              display={link.display}
              />
            )
          }) 
        }
        <div className='flex mt-4 justify-center space-x-6'>
          <a><img src={slackIcon} /></a>
          <a><img src={githubIcon} /></a>
        </div>
    </div>
    <Footer />
      </>
  )
}

export default App
