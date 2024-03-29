export const cartReducer = (state, action) => {

    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            }
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            }
        case "CHANGE_CART_QTY":
            return {
                ...state,
                cart: state.cart.filter((c) =>
                    c.id === action.payload.id ? (c.qty = action.payload.qty) : c.qty
                ),
            };
        default:
            return state
    }
}


export const productReducer = (state, action) => {

    switch (action.type) {
        case "FILTER_BY_SEARCH":
            return { ...state, searchQuery: action.payload };
        default:
            return state;
    }
}