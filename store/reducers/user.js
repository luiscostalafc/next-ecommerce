import {HYDRATE} from 'next-redux-wrapper';

const initialState = {
  user: 'Lucas Pulliese',
  favProducts: [],
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAV_PRODUCT':   
      const index = state.favProducts.includes(action.id);

      if(!index) {
        state.favProducts.push(action.id);

        return {
          ...state,
          favProducts: state.favProducts
        };
      }
    default:
      return state;
  }
}

export default userReducer;