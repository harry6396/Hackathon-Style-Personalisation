import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

export default function IconLabelButtons() {
  return (
    <div style={{marginTop:'50px', display:'flex'}}>
      <Button variant="outlined" 
          style={{  marginRight:'20px', 
                cursor: 'pointer',
                backgroundColor: '#ff3e6c',
                border: '1px solid #ff3e6c',
                color: '#fff',
                minWidth: '108px',
                minHeight: '22px',
                width:'350px',
                height:'60px',
                fontSize:'18px',
                fontWeight:'500'
              }}
      >
        Rent Now
      </Button>
      <Button
      style={{  marginRight:'20px', 
      cursor: 'pointer',
      backgroundColor: '#ff3e6c',
      border: '1px solid #ff3e6c',
      color: '#fff',
      minWidth: '108px',
      minHeight: '22px',
      width:'350px',
      height:'60px',
      fontSize:'18px',
      fontWeight:'500'
    }}
      variant="outlined">Buy Now</Button>
    </div>
  );
}
