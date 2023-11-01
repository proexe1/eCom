import USER from '../Constant';

const initialState = {
  usersData: [],
  isLoading: false,
  isError: false,
  filterData: [],
};

 const Reducers = (state = initialState, action) => {

  switch (action.type) {
    case USER.LOAD:
      return {
        ...state,
        isLoading: true,
        isError: false,    
      };

    case USER.LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        usersData: action?.usersData,
        filterData: action?.payload,
      };

    case USER.FILTERED_DATA:
      return{
        ...state,
        filterData: action?.payload,
      };
   
    default:
      return state;
  }
};

export default Reducers;
