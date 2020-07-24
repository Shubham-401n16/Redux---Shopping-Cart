import React from "react";
import { connect } from "react-redux";
import {
  Grid,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@material-ui/core";
import { Delete } from "@material-ui/icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import * as actions from "../store/store-actions.js";

function SimpleCart(props) {
  const { removeFromCart } = props;

  let cartHTML = [];

  props.cartContents.forEach((item, i) => {
    cartHTML.push(
      <Grid>
        <Typography>{item.name}</Typography>

        <Button
          onClick={e => {
            removeFromCart(item);
          }}
        >
          <Delete />
        </Button>
      </Grid>
    );
  });

  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="additional-actions1-content"
        id="additional-actions1-header"
      >
        <Typography>Items</Typography>
      </AccordionSummary>
      <AccordionDetails>{cartHTML}</AccordionDetails>
    </Accordion>
  );
}

function mapStateToProps(state) {
  return {
    cartContents: state.cart.cartContents,
    cartCount: state.cart.cartCount
  };
}

const mapDispatchToProps = (dispatch, getState) => ({
  removeFromCart: data => dispatch(actions.removeFromCart(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SimpleCart);
