import React, { useEffect } from "react";
import { connect } from "react-redux";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import * as actions from "../store/store-actions.js";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
});

function Products(props) {
  // list all the products that belong to the
  // current selected category

  // only show the products that belong to the current category

  const { getProducts, addToCart } = props;

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const classes = useStyles();
  let productsHTML = [];

  for (let i = 0; i < props.products.length; i++) {
    if (props.products[i].category === props.currentCategory)
      productsHTML.push(
        <Card key={i} className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={props.products[i].img}
              title={props.products[i].name}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.products[i].name}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {props.products[i].price}
              </Typography>
              <Typography color="textPrimary" component="p">
                Quantity: {props.products[i].inStock}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.products[i].description}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                addToCart(props.products[i]);
              }}
              disabled={props.products[i].stock < 1 ? true : false}
            >
              Add To Cart
            </Button>
            <Button size="small" color="primary">
              View Details
            </Button>
          </CardActions>
        </Card>
      );
  }

  return (
    <>
      <h2>Products</h2>
      <div className="main-product">{productsHTML}</div>
    </>
  );
}

// connect() --> returns a function (assume it's called foo)
// let foo = connect(mapStateToProps);
// let connectedComponent = foo(Products)
// export default connectedComponent

const mapStateToProps = state => {
  return {
    products: state.products.allProducts,
    currentCategory: state.categories.currentCategory
  };
};

const mapDispatchToProps = (dispatch, getState) => ({
  getProducts: data => dispatch(actions.getProducts(data)),
  addToCart: data => dispatch(actions.addToCart(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
