import React, { Component } from "react";
import shoppingPlaceHolderitem from '../images/ShoppingItemPlaceholder.png';
import { makeStyles } from '@material-ui/core/styles';
import shoppingTileBackground from '../images/PurpleTile.svg';
import featureListBullet from '../images/featureDiamond.svg';

import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import ShoppingCartUtils from './ShoppingCartUtils';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from '@material-ui/core/FormLabel';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import OnlineLove from '../images/shop/Puja/OnlineLove.png';

const useStyles = makeStyles((theme) => ({
    quantityCard: {
      backgroundColor: 'rgba(87,98,207,0.2)',
      padding: '0px',
      marginTop: '2%'
    },
    featureImage: {
      width: '20px',
      height: '20px'
    },
    featureName: {
      fontSize: '12px',
      verticalAlign: 'text-top',
      marginLeft: '5px'
    },
    shoppingItemDesc: {
      textAlign: 'left'
    },
    shoppingItemDescCard: {
      backgroundColor: 'transparent',
      color: 'white'
    },
    addIcon: {
      marginRight: '50px'
    },
    featureRecommendation: {
      fontWeight: 'bold',
      fontSize: 'var(--font-size-small);',
      textAlign: 'left'
    }
  
  }));

function Recommendation({shoppingItem}) {
    const classes = useStyles();

    return (
        <Typography variant="body1" className={classes.featureRecommendation} >
            {shoppingItem.itemRecommendation}
        </Typography> 
    )
}


function FeatureListTile({shoppingItem}) {
    const classes = useStyles();
    return (
      <GridList cellHeight={'auto'} className={'cartFeatureList'} cols={2} >
      {
          shoppingItem.itemFeatureList.map((feaureItem)=> (
          <GridListTile className='featureGridListTile' key={feaureItem.featureName}>
              <img className={classes.featureImage} src={featureListBullet}/>
              <span className={classes.featureName}>{feaureItem.featureName}</span>
          </GridListTile>
          ))
      }
      </GridList>
    );
}

function BookAlias({setAliasName}) {
  const [checked, setCheckedState] = React.useState(false);
  const handleChange = (evt) => {
    setAliasName('');
    setCheckedState(evt.target.checked);
  }
  return (
    <div className={'BookForAliasGroup'}>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Book for someone else"
        />
      </FormGroup>
      {
        checked && (
          <FormGroup row>
            <TextField className='AliasTextField' id="filled-basic" label="Please enter the person's name" onChange={(evt)=>setAliasName(evt.target.value)}/>
          </FormGroup>
        )
      }   
    </div>
  )
}


function QuantityTile ({setItemQuantity, quantity}) {
    const increase = () => {
        setItemQuantity(Math.min(quantity + 1, 1000));

    }
    const decrease = () => {
        setItemQuantity(Math.max(quantity - 1, 1));
    }
    return (  

        <div className='QuantityItem'>
            <FormGroup className='QuantityForm' row>
              <FormLabel component="legend" className='quantityTextDesc'>Quantity</FormLabel>
                 <FormGroup row className='QuantityControlsForm'>
                    <RemoveCircleOutlineIcon className='removeIcon' onClick={decrease}/>
                    <FormLabel component="legend" className='quantityText'>{quantity}</FormLabel>
                    <AddCircleOutlineIcon className='addIcon' onClick={increase}/>
                </FormGroup>
            </FormGroup>
          
        </div>
    )
}


function ShoppingTileButton({showBuyNow, addToCart, buyNow}) {
    return (
        <div className='ShoppingTileButton'>
            <Button variant='outlined' className={'addToCart'} onClick={addToCart}>Add to cart</Button>
            {showBuyNow !== false && <Button variant='outlined' className={'buyNow'} onClick={buyNow}>Buy Now</Button>}
        </div>
    );
}

/*
    Adding to cart will always be of the format {
        itemId:<>,
        quantity: <>,
        parentId: <>,
        price: <>
        aliasName: <> // Valid only for Puja Usecases
    }
*/
function ShoppingTile({shoppingItem, size, showBuyNow, onAddToCart, ActionButton, onBuyNow}) {
    const classes = useStyles();
    let gridClassName = size === 'Large' ? 'largeShoppingCartGridListTile' : 'smallShoppingCartGridListTile';
    const [aliasName, setAliasName] = React.useState('');
    const [quantity, setItemQuantity] = React.useState(1);
    // const [price, setItemPrice] = React.useState(shoppingItem.itemPrice);

    const addToCart = () => {
        ShoppingCartUtils.addToCart({
            itemId: shoppingItem.itemId,
            quantity,
            parentId: shoppingItem.parentId,
            price: shoppingItem.itemPrice*quantity,
            aliasName
        });
        onAddToCart();
    }

    const imgClass = shoppingItem.itemImage || '';
    let denomination = shoppingItem.itemPrice === 'FREE' ? '' : "₹ ";
    return (
        <div key={shoppingItem.itemId} className={gridClassName}>
            <Card className='ShoppingCartDetailedTile'>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={imgClass}
                        className={imgClass}
                        // image={OnlineLove}
                    />
                    <CardContent >
                        <Typography className='cartDetailedTitle'>
                            {shoppingItem.itemName}
                            <span className={'cartPrice'}>{denomination + shoppingItem.itemPrice}</span>
                        </Typography>
                        <Typography className={'cartDetailedDescription'}>
                            {shoppingItem.itemDescription}
                        </Typography>
                        <div>
                            {shoppingItem.itemFeatureList &&                          
                            (
                                <FeatureListTile shoppingItem={shoppingItem} />
                            )}
                            {
                                shoppingItem.itemRecommendation && (
                                    <Recommendation shoppingItem={shoppingItem}/>
                                )
                            }     
                            {
                                shoppingItem.itemBookAlias && (
                                    <BookAlias setAliasName={setAliasName}/>
                                )
                            }                         
                        </div>
                        <Divider />
                        {
                            shoppingItem.itemPrice !== 'FREE' && shoppingItem.showQuantity!==false &&    
                            (
                                <Card className={classes.quantityCard} variant="outlined">
                                <QuantityTile quantity={quantity} setItemQuantity={setItemQuantity}/>
                                </Card>
                            )
                        }
                    </CardContent>
                </CardActionArea>
                    <CardActions className='buttonContainer'>
                        {
                            ActionButton ? <ActionButton /> : <ShoppingTileButton buyNow={onBuyNow} showBuyNow={showBuyNow} addToCart={addToCart}/>
                        }
                    </CardActions>
            </Card>
            {/* <img className={'shoppingCartImg ' + imgClass} src={shoppingPlaceHolderitem} alt={shoppingItem.itemTitle} />
            <Paper className={'ShoppingCartDetailedTile'}>
            <Typography className={'cartDetailedTitle'}>
                {shoppingItem.itemName}
                <span className={'cartPrice'}>{denomination + shoppingItem.itemPrice}</span>
            </Typography>
            <Typography className={'cartDetailedDescription'}>
                {shoppingItem.itemDescription}
            </Typography>
            <div>
                {shoppingItem.itemFeatureList &&                          
                (
                    <FeatureListTile shoppingItem={shoppingItem} />
                )}
                {
                    shoppingItem.itemRecommendation && (
                        <Recommendation shoppingItem={shoppingItem}/>
                    )
                }     
                {
                    shoppingItem.itemBookAlias && (
                        <BookAlias setAliasName={setAliasName}/>
                    )
                }                         
            </div>
            <Divider />
            {
                shoppingItem.itemPrice !== 'FREE' &&    
                (
                    <Card className={classes.quantityCard} variant="outlined">
                    <QuantityTile quantity={quantity} setItemQuantity={setItemQuantity}/>
                    </Card>
                )
            }

            <div className={classes.buttonContainer}>
                {
                    ActionButton ? <ActionButton /> : <ShoppingTileButton showBuyNow={showBuyNow} addToCart={addToCart}/>
                }
            </div>
          </Paper> */}
      </div>
    )
    
}

export default ShoppingTile;