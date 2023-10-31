import USER from '../Constant';

export const filterData = filteredData => async dispatch=> {
  console.log('filteredData..........',filteredData);
  dispatch({
    type:USER.FILTERED_DATA,
    payload: filteredData,
  })
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
      // type: USER.LOAD_SUCCESS,
      type: USER.LOAD,
      usersData: [],
      isError: true,
    });
  }
};
