import React from "react";
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@material-ui/core";
import useStyles from "../styles/styles";

interface cartitemstype{

  id: number;
  title: string;
  description: string;
  price: number;
  thumbnail: string;

}

interface ProductCardsPagePropsType{
  data: cartitemstype[];
  handleClick: Function;
  allCartIds: number[];
}


const ProductCards:React.FC<ProductCardsPagePropsType> = ({ data, handleClick, allCartIds }) => {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.cardgrid} maxWidth="md">
        <Grid container spacing={4}>
          {data?.map((item:cartitemstype) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={4}>
              <Card className={classes.card}>
                <CardMedia
                  className={classes.cardmedia}
                  image={item?.thumbnail}
                  title="Image Title"
                />
                <CardContent className={classes.cardcontent}>
                  <Typography
                    variant="h5"
                    gutterBottom
                    className={classes.cardtitle}
                  >
                    {item?.title.substring(0, 20)}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    {`  $ ${item?.price}`}
                  </Typography>
                  <Typography className={classes.carddesc}>
                    {item.description.substring(0, 52)}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="small"
                    onClick={() => handleClick(item)}
                    className={classes.button}
                    variant="contained"
                    disabled={allCartIds.includes(item.id)}
                  >
                    Add to cart
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default ProductCards;
