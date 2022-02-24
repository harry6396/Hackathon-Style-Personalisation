import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom"

/*import data*/
import data from '../data/data.json';

export default function OrderSummary(props) {
    
    const [productDetails, setProductDetails] = React.useState(null)
    let history = useNavigate();

    useEffect(() => {
        data.map((index) => {
            if(index["id"] === "12"){//props.productId) {
                setProductDetails(index)
                return
            }
        })
    }, []);

    const onClickRentNow = () => {
        history('/tracking');
    }

    return (
        <div>
            <Grid container item sm={6}>
                <div style={{
                    color: '#282c3f',
                    fontSize: '18px',
                    fontWeight: '500',
                    lineHeight: '1', 
                    marginTop:'30px',
                    marginLeft:'80%'}}>
                    {"ORDER SUMMARY"}
                </div>
            </Grid>
            {productDetails && 
            <Grid container spacing={1}>
                <Grid container item sm={6}>
                    <img style={{marginLeft:'100px', marginRight:'100px', marginTop:'100px'}} src={productDetails["image"][0]}/>
                </Grid>
                <Grid container item sm={6}>
                    <div style={{display:'flex',
                        color: '#282c3f',
                        fontSize: '18px',
                        fontWeight: '500',
                        lineHeight: '1', marginTop:'100px', width: '100%'}}>
                        <div style={{marginRight:'20px'}}>{"RENTAL PRICE"}</div><span style= {{fontSize: '18px', marginRight:'5px'}}>&#8377;</span> {productDetails["rentPrice"]}
                    </div>
                    <div style={{display:'flex',
                        color: '#282c3f',
                        fontSize: '18px',
                        fontWeight: '500',
                        lineHeight: '1', width: '100%'}}>
                        <div style={{marginRight:'20px'}}>{"SECURITY FEE"}</div><span style= {{fontSize: '18px', marginRight:'5px'}}>&#8377;</span> {productDetails["securityPrice"]}
                    </div>
                    <div style={{display:'flex',
                        color: '#282c3f',
                        fontSize: '18px',
                        fontWeight: '500',
                        lineHeight: '1', width: '100%'}}>
                        <div style={{marginRight:'20px'}}>{"RENTAL TOTAL PRICE"}</div><span style= {{fontSize: '18px', marginRight:'5px'}}>&#8377;</span> {productDetails["rentTotalPrice"]}
                    </div>
                    <div style={{marginTop:'50px', display:'flex'}}>
      <Button variant="outlined" 
          style={{  marginRight:'20px', 
                cursor: 'pointer',
                backgroundColor: '#ff3e6c',
                border: '1px solid #ff3e6c',
                color: '#fff',
                minWidth: '108px',
                minHeight: '22px',
                width:'250px',
                height:'40px',
                fontSize:'18px',
                fontWeight:'500'
              }}
              onClick={onClickRentNow}
      >
        {"Rent Now"}
      </Button>
      </div>
                </Grid>
            </Grid>
            }
        </div>
  );
}