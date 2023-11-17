import USER from '../Constant';

export const filterData = filteredData => async dispatch => {
  dispatch({
    type: USER.FILTERED_DATA,
    payload: filteredData,
  });
};

export const addToCart = addToCartData => async dispatch => {
  console.log('addToCartDataaddToCartData aaaaaaaaa', addToCartData);
  dispatch({
    type: USER.CART_DATA,
    payload: addToCartData,
  });
};

export const deleteToCart = data => ({
  type: USER.IDC_CART,
  payload: data,
});

export const removeToCart = RemovedData => async dispatch => {
  dispatch({
    type: USER.REMOVE_CART,
    payload: RemovedData,
  });
};
export const ABC = () => async dispatch => {
  dispatch({
    type: 'ABHAY',
    payload: '',
  });
};

export const requestUsers = data => async dispatch => {
  dispatch({
    type: USER.LOAD,
  });
  try {
    dispatch({
      type: USER.LOAD_SUCCESS,
      usersData: data,
      isError: false,
    });
  } catch (e) {
    dispatch({
      type: USER.LOAD,
      usersData: [],
      isError: true,
    });
  }
};
