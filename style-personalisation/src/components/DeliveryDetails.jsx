import React from 'react';
import PaymentIcon from '@mui/icons-material/Payment';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PublishedWithChangesIcon from '@mui/icons-material/PublishedWithChanges';

export default function DeliveryDetails() {
  return (
    <div style={{marginTop:'20px'}}>
        <div style={{
            display:'flex', 
            fontSize:'14px', 
            fontWeight: 500,
            margin: 0,
            color: '#282c3f',
            fontSize: '16px',
            padding: 0,
            lineHeight: '1.25',
            marginBottom: '15px'
            }}
        >
            <span style={{marginRight:'10px'}}><LocalShippingIcon/></span>
            {"Get it by Fri, Mar 04"}
      </div>
      <div style={{
            display:'flex', 
            fontSize:'14px', 
            fontWeight: 500,
            margin: 0,
            color: '#282c3f',
            fontSize: '16px',
            padding: 0,
            lineHeight: '1.25',
            marginBottom: '15px'
            }}
        >
            <span style={{marginRight:'10px'}}><PaymentIcon/></span>
          {"Pay on delivery available"}
      </div>
      <div style={{
            display:'flex', 
            fontSize:'14px', 
            fontWeight: 500,
            margin: 0,
            color: '#282c3f',
            fontSize: '16px',
            padding: 0,
            lineHeight: '1.25',
            marginBottom: '15px'
            }}
        >
            <span style={{marginRight:'10px'}}><PublishedWithChangesIcon/></span>
          {"Easy 2 days exchange available"}
      </div>
      
    </div>
  );
}
