let data = {
  modalShow: false
};
const todos = (state = data, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        totalCount: action.count,
        cart: {
          products: [
            ...state.cart.products,
            {
              name: action.data.name,
              price: action.data.price,
              image: action.data.image
            }
          ]
        }
      };
    default:
      return state;
  }
};

export default todos;
