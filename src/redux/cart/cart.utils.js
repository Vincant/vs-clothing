// export const addItemToCart = (cartItems, addItem) => {
//   const cartItemAlredyExist = cartItems.find(
//     cartItem => cartItem.id === addItem.id
//   );
//   if(cartItemAlredyExist){
//     return cartItems.map(cartItem => 
//       cartItem.id === addItem.id
//         ? {...cartItem, quantity : cartItem.quantity + 1}  // or increase quantity for some Item
//         : cartItem
//       );
//   }
//   return [...cartItems, { ...addItem, quantity: 1 }];  // or add new Item
// }

// add Item to cart
export const addItemToCart = (cartItems, addItem) => {
  const cartItemAlredyExist = cartItems.find(
    cartItem => cartItem.id === addItem.id
  );

  if(cartItemAlredyExist){
    return cartItems.map(cartItem => 
      cartItem.id === addItem.id
        ? {...cartItem, quantity : cartItem.quantity + 1}  // or increase quantity for some Item
        : cartItem
      );
  }
  return [...cartItems, { ...addItem, quantity: 1 }];  // or add new Item
}

// remove Item from cart
export const removeItemFromCart = (cartItems, removeItem) => (
  cartItems.filter(cartItem => cartItem.id !== removeItem.id)
);

// increase quantity Item in card
export const increaseItemInCart = (cartItems, increaseItem) => {
  return cartItems.map(cartItem => 
    cartItem.id === increaseItem.id
      ? {...cartItem, quantity : cartItem.quantity + 1} 
      : cartItem
    );
};

// decrease quantity Item in card
export const decreaseItemInCart = (cartItems, decreaseItem) => {
  return cartItems.map(cartItem => 
    cartItem.id === decreaseItem.id
      ? {...cartItem, quantity : cartItem.quantity - 1}
      : cartItem                                          
  );
};
