import React, { Component } from "react";
import Container from '@material-ui/core/Container';
import {ShoppingItemsList} from './ShopItemsList';
import '../css/DeviModules.css';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';
import shoppingPlaceHolderitem from '../images/ShoppingItemPlaceholder.png';
import templeTilesmall from '../images/shop/TempleTileSmall.png';
import templeTilemedium from '../images/shop/TempleTileMedium.png';
import templeTilelarge from '../images/shop/TempleTileLarge.png';
import pujaTileSmall from '../images/shop/PujaTileSmall.png';
import pujaTileMedium from '../images/shop/PujaTileMedium.png';
import pujaTileLarge from '../images/shop/PujaTileLarge.png';
import fastingTileSmall from '../images/shop/FastingTileSmall.png';
import fastingTileMedium from '../images/shop/FastingTileMedium.png';
import fastingTileLarge from '../images/shop/FastingTileLarge.png';
import otherTileSmall from '../images/shop/OtherTileSmall.png';
import otherTileMedium from '../images/shop/OtherTileMedium.png';
import otherTileLarge from '../images/shop/OtherTileLarge.png';


import shoppingTileBackground from '../images/PurpleTile.svg';
import { IconButton } from "@material-ui/core";
import ShoppingCartBadge from './ShoppingCartBadge';
import ShoppingCartUtils from './ShoppingCartUtils';

const useStyles = makeStyles((theme) => ({

  shoppingGridList: {
    padding: '2%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  shoppingImg: {
    height: '250px',
    width: 'auto'
    // width: '100%'

  },
  shoppingGList: {
    // width: '90%'
  },
  shoppingTileBar: {
    backgroundImage: `url(${shoppingTileBackground})`,
    backgroundPosition: 'center', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat',
    borderRadius: 'var(--shopitem-border-radius)',
    height: '30%',
    flexDirection: 'column',
    maxWidth: '300px'
  }
}));

const imgSrc = {
  Temple: {
    small: templeTilesmall,
    medium: templeTilemedium,
    large: templeTilelarge
  },
  Puja: {
    small: pujaTileSmall,
    medium: pujaTileMedium,
    large: pujaTileLarge
  },
  Fasting: {
    small: fastingTileSmall,
    medium: fastingTileMedium,
    large: fastingTileLarge
  },
  Other: {
    small: otherTileSmall,
    medium: otherTileMedium,
    large: otherTileLarge
  }
}

function ShoppingModule(props) {
  const classes = useStyles();
  const shoppingButtonclass='shoppingButton';
  return (
    <div className="ShoppingModule">
        <div className='BodyContext'>
            <div className='ShoppingModuleDescription'> 
                  Experience <br/>divine power <br/>at home!
            </div>
            <Container maxWidth="sm" className='shoppingBackgroundImage'>             
            </Container>
          </div>
          <ShoppingCartBadge itemCount={ShoppingCartUtils.getCartQuantity()} history ={props.history} currentItemView={'/Shop'}/>
          <div className={classes.shoppingGridList}>
              <GridList cellHeight={'auto'} className={classes.shoppingGList} cols={2} spacing={30} >
                {ShoppingItemsList.itemsList.map((shoppingItem) => (
                  <GridListTile key={shoppingItem.itemName} className={'shoppingGridListTile'} onClick={()=>{props.history.push(props.history.location.pathname + "/" + shoppingItem.itemName)}}>
                    <img className={classes.shoppingImg} alt={shoppingItem.itemTitle} 
                     srcSet={`
                        ${imgSrc[shoppingItem.itemId].small} 183w,
                        ${imgSrc[shoppingItem.itemId].medium} 366w,
                        ${imgSrc[shoppingItem.itemId].large} 549w
                    `}
                    sizes={`
                        (max-width: 400px) 183px,
                        (max-width: 900px) 366px,
                        (min-width: 901px) 549px
                    `}
                   src={imgSrc[shoppingItem.itemId].small}
                    />
                    <GridListTileBar
                      subtitle={shoppingItem.itemDescription}
                      actionPosition={'right'}
                      className={classes.shoppingTileBar}
                      actionIcon={
                        <img 
                            className={shoppingItem.itemName.replace(' ','') +'ShoppingButton'} >
                        </img>
                      }
                    >
                    </GridListTileBar>
                  </GridListTile>
                ))}
            </GridList>
          </div>
    </div>
  );
}
//>
export default ShoppingModule;
