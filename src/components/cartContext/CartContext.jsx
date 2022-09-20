import { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [units, setUnits] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItem = (product, cantidad) => {
    if (!isInCart(product.id)) {
      setCartList([
        ...cartList,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          cantidad: cantidad,
          img: product.img,
        },
      ]);
      setUnits(units + cantidad);
      setTotalPrice(totalPrice + (product.price * cantidad));
    } else {
      const cartAux = cartList.map((item) => {
        if (item.id === product.id) {
          item.cantidad += cantidad;
          item.subtotal += product.price * cantidad;
        }
        return item;
      });
      setCartList(cartAux);
      setTotalPrice(totalPrice + product.price * cantidad);
    }
  };

  const isInCart = (id) => {
    return cartList.find((item) => item.id === id);
  };

  const removeItem = (id, cantidad, price) => {
    const carritoFiltrado = cartList.filter((item) => item.id !== id);
    setCartList(carritoFiltrado);
    setTotalPrice(totalPrice - cantidad * price);
    setUnits(units - cantidad);
  };

  const clear = () => {
    setCartList([]);
    setUnits(0);
    setTotalPrice(0);
  };

  return (
    <>
      <CartContext.Provider
        value={{ cartList, addItem, clear, totalPrice, removeItem, units }}
      >
        {children}
      </CartContext.Provider>
    </>
  );
};

export default CartContextProvider;
