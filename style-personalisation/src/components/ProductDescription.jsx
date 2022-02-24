import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconLabelButtons from './IconLabelButtons'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InfoIcon from '@mui/icons-material/Info';

import FormPropsTextFields from './FormPropsTextFields';
import Tooltip from '@material-ui/core/Tooltip';

import Button from '@material-ui/core/Button';
import DeliveryDetails from './DeliveryDetails'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  sizeAvailable: {
    backgroundColor: '#fff',
    border: '1px solid #bfc0c6',
    borderRadius: '50px',
    padding: '12px',
    minWidth: '60px',
    height: '60px',
    textAlign: 'center',
    cursor: 'pointer',
    color: '#282c3f',
    fontSize: '16px',
    fontWeight: '500',
    marginRight: '20px',
    marginTop: '20px'
  }
});

export default function ProductDescription(props) {
  const classes = useStyles();
  const [showDeliveryOptions, setShowDeliveryOptions] = React.useState(false)
  const [productSelected, setProductSelected] = React.useState({})

  const onClickCheck = () => {
    setShowDeliveryOptions(!showDeliveryOptions)
  }

  const onClickSize = (sizeClicked) => {
    const sizeSelected = sizeClicked.target.id.split('-')[1]
    setProductSelected({size:sizeSelected, productId:sizeClicked.target.id.split('-')[0]})
    for(let iterator = 0; iterator < props.data["sizeAvailable"].length; iterator++) {
      if(sizeSelected === props.data["sizeAvailable"][iterator] && document.getElementById(props.data["id"]+"-"+props.data["sizeAvailable"][iterator])) {
        document.getElementById(sizeClicked.target.id).style = 'border: 1px solid #ff3f6c;background-color: #fff;color: #ff3f6c!important;'
      } else if(document.getElementById(props.data["id"]+"-"+props.data["sizeAvailable"][iterator])) {
        document.getElementById(props.data["id"]+"-"+props.data["sizeAvailable"][iterator]).style = 'border: 1px solid #bfc0c6;background-color: #fff;color: #282c3f!important;'
      }
    }
  }

  return (
    <div>
      <div>
        <div>
          <div style={{display:'flex',    
            color: '#282c3f',
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '1', marginTop:'30px'}}>
            {props.data["brand"]}
          </div>

          <div style={{display:'flex',    
            color: '#535665',
            padding: '5px 20px 14px 0',
            fontSize: '20px',
            opacity: '.8',
            fontWeight: '400'}}>
            {props.data["name"]}
          </div>

          <div style={{display:'flex',    
            color: '#282c3f',
            fontSize: '24px',
            fontWeight: '500',
            lineHeight: '1', marginTop:'30px'}}>
            <span style= {{fontSize: '24px', marginRight:'10px'}}>&#8377;</span> 
            {props.data["rentPrice"]}
            <Tooltip style={{fontSize:'20px'}} title={props.data["rentPrice"] + " (Rent Fee for 10 days) + \n" + props.data["securityPrice"] + " (Refundable Security Fee)"}>
              <span ><InfoIcon style={{display:'flex', fontSize:'18px', marginLeft:'8px'}}/></span>
            </Tooltip>
          </div>
          
          <div style={{display:'flex',
            color: '#282c3f',
            fontSize: '18px',
            fontWeight: '500',
            lineHeight: '1', marginTop:'30px'}}>
            <span style= {{fontSize: '18px', marginRight:'10px'}}>&#8377;</span> {props.data["price"] + " (Retail Price)"}
          </div>

          <div style={{display:'flex', fontSize:'16px', fontWeight:'500', marginTop:'30px'}}>
            {"SELECT SIZE"}
          </div>
          <div style={{display:'flex'}}>
            {props.data["sizeAvailable"].map((index) => {
              return(
                <div id = {props.data["id"]+"-"+index} 
                    className={classes.sizeAvailable} onClick = {onClickSize}>
                    {index}
                </div>
              )
            })}
          </div>
          <IconLabelButtons data={productSelected}/>
          <div style={{display:'flex', fontSize:'16px', fontWeight:'500', marginTop:'30px'}}>
            {"DELIVERY OPTIONS "}
            <span ><LocalShippingIcon style={{display:'flex', fontSize:'24px', marginLeft:'8px'}}/></span>
          </div>
          <div style={{display:'flex', marginTop:'5px'}}>
            <FormPropsTextFields/>
            <Button
              style={{ 
                cursor: 'pointer',
                backgroundColor: '#fff',
                border: '1px solid #ff3e6c',
                color: 'rgb(255, 63, 108)',
                minWidth: '50px',
                minHeight: '20px',
                width:'80px',
                height:'30px',
                fontSize:'13px',
                fontWeight:'500',
                marginTop: '35px',
                marginLeft: '20px'
              }}
              variant="outlined"
              onClick={onClickCheck}
              >
                {"Check"}
            </Button>
            </div>
            {showDeliveryOptions && <DeliveryDetails/>}
            <div style={{display:'flex', fontSize:'16px', fontWeight:'500', marginTop:'30px'}}>
            {"PRODUCT DETAILS"}
            <span ><InfoIcon style={{display:'flex', fontSize:'18px', marginLeft:'8px'}}/></span>
            </div>
          <p style={{display:'flex', fontSize:'14px', marginTop:'10px'}}>
            {props.data["description"]}
          </p>
        </div>
      </div>
    </div>
  );
}
