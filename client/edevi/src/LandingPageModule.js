import React, { Component } from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import logoSmall from './images/edevi.png';
import logoMedium from './images/edevi@2x.png';
import logoLarge from './images/edevi@3x.png';
import Button from '@material-ui/core/Button';
import './css/App.css';


const useStyles = makeStyles((theme) => ({
  // continueButton: {
  //   width: '80%',
  //   height: '40px',
  //   backgroundColor: '#2d13d4',
  //   backgroundImage: 'linear-gradient(77deg, #2d13d4 0%, #7f99f0 50%, #ffffff 100%)',
  //   marginTop: '10%'
  //   }
}));

function LandingPageModule(props) {
  const classes = useStyles();

  return (
    <div className={'LandingPageModule'}>
            <img alt="devi logo" className='AppLogoImage'
              srcSet={`
                ${logoSmall} 183w,
                ${logoMedium} 366w,
                ${logoLarge} 549w
              `}
              sizes={`
                (max-width: 400px) 183px,
                (max-width: 900px) 366px,
                (min-width: 901px) 549px
              `}
              src={logoMedium}
            />
            <div className={'landingPageHeader'} variant="h2">The path to infinity begins here </div> 
            <Button className={'EnterTempleButton'} onClick={()=>{props.history.push('Glitch')}}> All may enter </Button>
    </div>
  );
}

export default LandingPageModule;
