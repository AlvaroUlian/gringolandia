import { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";
import { Container, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import {
  serverTimestamp,
  doc,
  setDoc,
  collection,
  updateDoc,
  increment,
} from "firebase/firestore";
import { db } from "../../utils/firebaseConfig";

const Cart = () => {
  const { cartList, clear, totalPrice } = useContext(CartContext);
  const createOrder = async () => {
    let itemsForDB = cartList.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      cantidad: item.cantidad,
    }));
    let order = {
      buyer: {
        name: "Vicente Fernandez",
        email: "chente@elrey.com",
        phone: "923 555 7843",
      },
      date: serverTimestamp(),
      items: itemsForDB,
      total: totalPrice,
    };
    const newOrderRef = doc(collection(db, "orders"));
    await setDoc(newOrderRef, order);
    alert(
      "Qué onda carnal, tu orden es la: " +
        newOrderRef.id +
        " por si las moscas"
    );
    clear();
    
    itemsForDB.map(async (item) => {
      const itemRef = doc(db, "productsMx", item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.cantidad),
      });
    })
    
  };

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
            <center>
              <h4>Total de lana: U$S {totalPrice}</h4>
            </center>

            <Container>
              <Row>
                <center>
                  <Button variant="danger" onClick={() => clear()}>
                    Ni modo, vaciemos el carrito
                  </Button>
                </center>
              </Row>
              <Row style={{ paddingTop: "5px" }}>
                <center>
                  <Button variant="outline-dark" onClick={createOrder}>
                    Qué chulada de compra
                  </Button>
                </center>
              </Row>
            </Container>
          </>
        ) : (
          <>
            <h5>Esto está chingón, mejor ...</h5>
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
