import { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";
import { Card, Button, Row, Col } from "react-bootstrap";

const CartItem = ({ id, name, price, img, cantidad }) => {
  const { removeItem } = useContext(CartContext);

  return (
    <Row>
      <Col sm={9} style={{ marginTop: "10px" }}>
        <Card className="" style={{ width: "85%" }}>
          <Row style={{
                  marginTop: "15px",
                  paddingLeft: "15px",
                  marginBottom: "15px",
                }}>
            <Col>
              <Card.Img
                className="rounded-3"
                src={img}
                alt={name}
                style={{
                  width: "12rem",
                  height: "8rem",
                }}
              />
            </Col>
            <Col>
              <Card.Body>
                <Row>
                  <Card.Title>{name}</Card.Title>
                </Row>
                <Row>
                  <Col>
                    <Card.Text>Precio U$S {price}</Card.Text>
                    <Card.Text className="text-muted">
                      Cantidad: {cantidad} item(s)
                    </Card.Text>
                  </Col>
                  <Col>
                    <Button
                      variant="dark"
                      onClick={() => removeItem(id, cantidad, price)}
                    >
                      Me vale madre
                    </Button>
                  </Col>
                </Row>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};

export default CartItem;
