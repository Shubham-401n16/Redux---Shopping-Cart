import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Button } from "@material-ui/core";
//import * as actions from '../store/storeAction';
import * as actions from "../store/store-actions";

function Categories(props) {
  const { getCategories, changeCategory } = props;
  useEffect(() => {
    getCategories();
  }, [getCategories]);

  let categoriesHTML = [];

  for (let i = 0; i < props.categories.length; i++)
    categoriesHTML.push(
      <Button
        variant="contained"
        color="secondary"
        key={i}
        onClick={e => {
          changeCategory(props.categories[i].name);
        }}
      >
        {props.categories[i].displayName || props.categories[i].name}
      </Button>
    );

  return (
    <>
      <div className="main-category">{categoriesHTML}</div>
    </>
  );
}

const mapStateToProps = state => {
  return {
    categories: state.categories.allCategories
  };
};

const mapDispatchToProps = (dispatch, getState) => ({
  getCategories: data => dispatch(actions.getCategories(data)),
  changeCategory: payload => dispatch(actions.changeCategory(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Categories);
