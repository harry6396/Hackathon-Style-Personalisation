import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

/*import data*/
import data from '../data/data.json';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: '5%',
    marginLeft: '2%'
  },
  media: {
    width: '210px',
    height: '280px',
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


export default function Products() {
  const classes = useStyles();
  const gridClasses = useStylesGrid();
  return (
    <div className={gridClasses.root}>
      <Grid container spacing={1}>
      {data.map(index => {
        return (
          <Grid container item xs={3}>
          <Card className={classes.root}>
          <CardActionArea id={index["id"]}>
            <CardMedia
              className={classes.media}
              image={index["image"][0]}
              title={index["brand"]}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              {index["brand"]}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
              {index["name"]}
              </Typography>
            </CardContent>
          </CardActionArea>
          </Card>
          </Grid>
        )
      })}      
      </Grid>
    </div>
  );
}
