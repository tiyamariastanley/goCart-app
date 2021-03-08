const {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    FIND_PRODUCT_REQUEST,
  } = require('../constants/productConstants');
  
  export const productListReducer = (
    state = { loading: true, products: [] },
    action
  ) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { loading: true };
      case PRODUCT_LIST_SUCCESS:
        return { loading: false,products: action.payload};
      case PRODUCT_LIST_FAIL:
        return { loading: false, error: action.payload };
      case FIND_PRODUCT_REQUEST:
        const foundItems = state.products.filter(x => x.category.toLowerCase() === action.payload.toLowerCase());
            if(foundItems.length>0){
                return {
                  ...state,products:foundItems
                }
            } else {
               return { ...state,error:action.payload};
            }
      default:
        return state;
    }
  };

  export const productDetailsReducer = (
    state = { loading: true, product: {} },
    action
  ) => {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return { loading: true };
      case PRODUCT_DETAILS_SUCCESS:
        return { loading: false,product: action.payload};
      case PRODUCT_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };