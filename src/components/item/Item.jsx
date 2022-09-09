import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const Item = ({ name, price, img, stock, description }) => {
  const Detalles = () => {
    alert(description);
  };
  return (
    <>
      <center>
          <Col>
            <Card className="text-center" style={{ width: "18rem" }}>
              <Card.Header>{name}</Card.Header>
              <Card.Body>
                <Card.Img src={img} />
                <Card.Text>
                  Te lo llevas por {price}
                </Card.Text>
                <Button variant="outline-dark" onClick={() => Detalles()}>
                  Detalles
                </Button>
              </Card.Body>
              <Card.Footer className="text-muted">
                Stock disponible = {stock} unidades
              </Card.Footer>
            </Card>
          </Col>
      </center>
    </>
  );
};

export default Item;
