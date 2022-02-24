import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconLabelButtons from './IconLabelButtons'

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

  return (
    <div>
      <div>
        <div>
        <Typography gutterBottom variant="h2" component="h2">
            {props.data["brand"]}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {props.data["name"]}
          </Typography>
          <Typography gutterBottom variant="h2" component="h2">
            {props.data["price"]}
          </Typography>
          <div style={{display:'flex', fontSize:'16px', fontWeight:'500'}}>
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
          </div>
          <div style={{display:'flex', fontSize:'14px', marginTop:'30px'}}>
            {props.data["description"]}
          </div>
        </div>
      </div>
    </div>
  );
}
