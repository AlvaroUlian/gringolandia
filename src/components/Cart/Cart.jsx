import { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";
import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const Cart = () => {
  const { cartList, clear, totalPrice } = useContext(CartContext);

  return (
    <>
      <Container>
        {cartList.length > 0 ? (
          <>
            {cartList.map((product) => (
              <CartItem
                key={`cartList-${product.id}`}
                id={product.id}
                name={product.name}
                price={product.price}
                img={product.img}
                cantidad={product.cantidad}
              />
            ))}

            <h4>Total de lana: U$S {totalPrice}</h4>
            <Container>
              <Button variant="danger" onClick={() => clear()}>
                Ni modo, vaciemos el carrito
              </Button>
            </Container>
          </>
        ) : (
          <>
            <p>Esto está chingón, mejor ...</p>
            <Button variant="primary" as={Link} to="/gringolandia-Ulian">
              Nos devolvemos
            </Button>
          </>
        )}
      </Container>
    </>
  );
};

export default Cart;
