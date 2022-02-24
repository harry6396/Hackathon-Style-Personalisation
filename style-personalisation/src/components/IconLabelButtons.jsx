import React from 'react';
import Button from '@material-ui/core/Button';
import { useNavigate } from "react-router-dom"

export default function IconLabelButtons(props) {

  let history = useNavigate();

  const onClickRentNow = () => {
    if(props.data["size"]) {
      history('/orderSummary',{param:{...props}});
    } else {
      alert("Please select a size")
    }
  }

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
              onClick={onClickRentNow}
      >
        {"Rent Now"}
      </Button>
    </div>
  );
}
