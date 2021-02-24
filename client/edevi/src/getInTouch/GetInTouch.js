import React from "react";
import '../css/GetInTouch.css';
import navigateBack from '../images/getInTouch/navigateBackArrow.svg';
import backLogo from '../images/getInTouch/backgroundLogo.png';
import Divider from '@material-ui/core/Divider';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useHistory } from "react-router-dom";

const SocialNetworkPlatform =  {
    TWITTER: 'twitter',
    INSTAGRAM: 'instagram'
}

const GetInTouch = () => {

    const history = useHistory();

    const navigateToSocialNetwork = (connectTo) =>{
        if(connectTo === SocialNetworkPlatform.TWITTER) {
            window.location.href = 'https://twitter.com/@eDev_i'
            return false;
        }
        if(connectTo === SocialNetworkPlatform.INSTAGRAM) {
            window.location.href = 'https://www.instagram.com/edev.i/'
            return false;
        }
    }
  return (
      <div className='GetInTouchContainer'>
          <nav className='HeaderNavBar'>
              <img src={navigateBack} alt='navigate-back' onClick={()=> history.goBack()}/>
              <span>Get in touch</span>
          </nav>

          <main className='BodyContent'>
              <div className='TextContainer'>
                  <span>Sponsors</span>
                  <span>collaborations</span>
                  <span>queries?</span>
              </div>
              <img src= {backLogo} alt='get-in-touch'/>
          </main>

          <section>
              <span>Drop a mail at</span>
              <a href="mailto:ask.edevi@gmail.com">ask.edevi@gmail.com</a>
          </section>

          <Divider variant='middle' />

          <footer className='FooterItems'>
              <span>Follow eDevi</span>
              <div className='FooterIconsContainer'>
                  <div onClick={()=> navigateToSocialNetwork(SocialNetworkPlatform.TWITTER)} style={{paddingRight: '0.5rem'}}>
                    <TwitterIcon htmlColor='#FEDC31' />
                  </div>
                  <div onClick={()=> navigateToSocialNetwork(SocialNetworkPlatform.INSTAGRAM)}>
                    <InstagramIcon htmlColor='#FEDC31'/>
                  </div>
              </div>
          </footer>
      </div>
  )
};

export default GetInTouch;