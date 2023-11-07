import USER from '../Constant';

const initialState = {
  usersData: [{ky: 'asaiudgs8ayds67'}],
  isLoading: false,
  isError: false,
  filterData: [],
  cart: [],
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
        cart: [],
      };
    case USER.CART_DATA:
      var itemToAdd = action.payload;
      var existingItemIndex = state?.cart?.findIndex(
        item => item.id === itemToAdd.id,
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          qty: updatedCart[existingItemIndex].qty + 1,
        };

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }

    case USER.IDC_CART:
      // Decrease  quantity
      console.log('actionhfjhsjfhdjfhdhfjdfhj', action.payload);

      var itemToAdd = action.payload;
      var existingItemIndex = state?.cart?.findIndex(
        item => item.id === itemToAdd.id,
      );

      if (existingItemIndex !== -1) {
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          qty: updatedCart[existingItemIndex].qty - 1,
        };

        return {
          ...state,
          cart: updatedCart,
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      }
    // let myIndex = -1;
    // state.cart.map((ele, index) => {
    //   if (ele.id == action.payload.id) {
    //     myIndex = index;
    //   }
    // });

    // if (myIndex == -1) {
    //   return {...state, cart: [...state?.cart, action.payload]};
    // } else {
    //   state.cart[myIndex].qty = state.cart[myIndex].qty - 1;
    //   return {
    //     ...state,
    //     cart: [...state?.cart],
    //   };
    // }

    case USER.FILTERED_DATA:
      return {
        ...state,
        filterData: action?.payload,
      };

    case USER.REMOVE_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};
export default Reducers;

// case USER.CART_DATA:
//   var itemToAdd = action.payload;
//   var existingItemIndex = state?.cart?.findIndex(
//     item => item.id === itemToAdd.id,
//   );

//   if (existingItemIndex !== -1) {
//     const updatedCart = [...state.cart];
//     updatedCart[existingItemIndex] = {
//       ...updatedCart[existingItemIndex],
//       qty: updatedCart[existingItemIndex].qty + 1,
//     };

//     return {
//       ...state,
//       cart: updatedCart,
//     };
//   } else {
//     return {
//       ...state,
//       cart: [...state.cart, action.payload],
//     };
//   }

// ***************/

// case USER.CART_DATA:
//   const { product_id } = action.payload;
//   if (state.cart) {
//     return {
//       ...state,
//       cart: [...state.cart, action?.payload],
//       // cart: [...state.filter(p=>p.id !==action.payload.cart), action?.payload],
//     };
//   } else {
//     return {
//       ...state,
//       cart: [action?.payload],
//     };
//   }

// ************------------------

// console.log('state issssssssssss', state?.cart?.cart?.cart);
// console.log('in cart data', action.payload);
//   const itemToAdd = action.payload;
// const existingItemIndex = state?.cart.cart.findIndex(item => {
// //  console.log('item>>>>>>>>>>>>>>>',item);
//   item.id === action.payload?.id;
// });

// console.log('existingItemIndex...', existingItemIndex);

//   if (state.cart !== -1) {
//     const updatedCart = [...existingItemIndex, itemToAdd];
//     updatedCart[existingItemIndex] = {
//       ...updatedCart[existingItemIndex],
//       qty: updatedCart[existingItemIndex].qty + 1,
//     };
//     return {
//       ...state,
//       cart: updatedCart,
//     };
//   }
//  else {

// ******************************************

// case USER.CART_DATA:
//   let tmp1 = []

//   if(state.cart){
//     state?.cart?.map((item) => {
//       if(item?.id === action?.payload?.id){
//         tmp1?.push({
//           ...item,
//           qty:item?.qty + 1
//         })

//       }else {
//         tmp1?.push({
//           ...item,
//         })
//       }
//     })

//   }else {
//     tmp1?.push(action?.payload)
//   }     return {
//     ...state,
//     cart: tmp1?.length ? tmp1 : [...state.cart, action.payload],
//   };
