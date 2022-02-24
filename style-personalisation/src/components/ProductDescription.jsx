import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconLabelButtons from './IconLabelButtons'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import InfoIcon from '@mui/icons-material/Info';

import FormPropsTextFields from './FormPropsTextFields';

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

  const onClickCheck = () => {
    setShowDeliveryOptions(!showDeliveryOptions)
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
            <span style= {{fontSize: '24px', marginRight:'10px'}}>&#8377;</span> {props.data["price"]}
          </div>
          
          <div style={{display:'flex', fontSize:'16px', fontWeight:'500', marginTop:'30px'}}>
            {"SELECT SIZE"}
          </div>
          <div style={{display:'flex'}}>
            {props.data["sizeAvailable"].map((index) => {
              return(
                <div className={classes.sizeAvailable}>{index}</div>
              )
            })}
          </div>
          <IconLabelButtons/>
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
