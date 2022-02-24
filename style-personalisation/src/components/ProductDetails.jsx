import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Carousel from './Carousel'

/*import data*/
import data from '../data/data.json';

import ProductDescription from './ProductDescription';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginTop: '5%',
      marginLeft: '2%'
    },
    media: {
      width: '400px',
      height: '600px',
      padding: '15px 50px 15px 40px',
      cursor: 'pointer'
    },
    cardBody: {
      marginBottom: '50px'
    }
  });
  
  const useStylesGrid = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      marginLeft: '200px',
      marginTop: '5%'
    },
    paper: {
      padding: theme.spacing(1),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }));

export default function ProductDetails() {
    
    const [productDetails, setProductDetails] = React.useState(null)

    const classes = useStyles();
    const gridClasses = useStylesGrid();

    useEffect(() => {
        const splitArray = window.location.pathname.split('/')
        data.map((index) => {
            if(index["id"] === splitArray[splitArray.length - 1]) {
                setProductDetails(index)
            }
        })
    }, []);

    return (
        <div>
            <Grid container spacing={1}>
                <Grid container item sm={6}>
                    { productDetails != null && <Carousel data={productDetails["image"]}/> }
                </Grid>
                <Grid container item sm={6}>
                    { productDetails != null && <ProductDescription data={productDetails}/> }
                </Grid>
            </Grid>
        </div>
  );
}