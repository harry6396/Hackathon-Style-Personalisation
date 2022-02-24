import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Typography from '@material-ui/core/Typography';
import orderdetail from '../data/orderdetail.json'
import Grid from '@material-ui/core/Grid';
import Carousel from './Carousel'
import ProductDescription from './ProductDescription';
/*import data*/
import data from '../data/data.json';
const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Ordered', 'Packed', 'Shipped', 'Received', 'Returned', 'Verification', 'Refund'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Order has been placed`;
    case 1:
      return 'Order has been packed.';
    case 2:
      return `Order shipped.`;
    default:
      return 'Unknown step';
  }
}

export default function TrackingDetails() {
  const classes = useStyles();
  const [orderDetails, setOrderDetails] = React.useState(null);
  const [productDetails, setProductDetails] = React.useState(null)
  const steps = getSteps();
  useEffect(() => {
    const splitArray = window.location.pathname.split('/')
    orderdetail.map((index) => {
        if(index["order_id"] === splitArray[splitArray.length - 1]) {
            setOrderDetails(index)
            data.map((index) => {
                if(index["id"] ===  orderDetails["product_id"]){
                    setProductDetails(index)
                    return
                }
            })
            return
        }
    })
    }, []);
  
    console.log(orderDetails)
  return (
    orderDetails && <div>
    
     <div className={classes.root} style={{width: "40%", top: "20%", left: "40%", position: "absolute"}}>
     <div>
                <Grid container item sm={6}>
                    { productDetails != null && <Carousel data={productDetails["image"]}/> }
                </Grid>
        </div>
      <Stepper activeStep={orderDetails["order_state"]} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
            </StepContent>
          </Step>
        ))}
      </Stepper>

    </div>

    </div>
  );
}