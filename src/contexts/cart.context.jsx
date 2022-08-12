// import { createContext, useState, useEffect, useReducer } from "react";

// const addCartItem = (cartItems, productToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );

//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// const removeCartItem = (cartItems, productToRemove) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToRemove.id
//   );

//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
//   }

//   return cartItems.map((cartItem) =>
//     cartItem.id === productToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

// const deleteCartItem = (cartItems, productToRemove) => {
//   return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
// };

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   deleteItemFromCart: () => {},
//   cartCount: 0,
//   cartTotal: 0,
// });

// export const CartProvider = ({ children }) => {

//   const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE);
//   const {cartItems , cartCount , cartTotal , isCartOpen } = state; 

//   const updateCartItemsReducer = (newCartItems) => {
//     const newCartTotal = newCartItems.reduce(
//       (total, cartItems) => total + cartItems.price * cartItems.quantity,
//       0
//     );

//     const newCartCount = newCartItems.reduce(
//       (total, cartItems) => total + cartItems.quantity,
//       0
//     );

//     dispatch({
//       type: CART_ACTION_TYPE.SET_CART_ITEM,
//       payload: {
//         cartItems: newCartItems,
//         cartCount: newCartCount,
//         cartTotal: newCartTotal,
//       },
//     });

//   };

//   const removeItemFromCart = (product) => {
//     const newCartItems = removeCartItem(cartItems, product);
//     updateCartItemsReducer(newCartItems);
//   };

//   const addItemToCart = (product) => {
//     const newCartItems = addCartItem(cartItems, product);
//     updateCartItemsReducer(newCartItems);
//   };

//   const deleteItemFromCart = (product) => {
//     const newCartItems = deleteCartItem(cartItems, product);
//     updateCartItemsReducer(newCartItems);
//   };

//   const setIsCartOpen = (bool) => {
//     dispatch({type : CART_ACTION_TYPE.SET_IS_CART_OPEN , payload : bool });
//   }

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     cartItems,
//     addItemToCart,
//     cartCount,
//     cartTotal,
//     removeItemFromCart,
//     deleteItemFromCart,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };
