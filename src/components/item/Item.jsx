import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Item = ({ name, img, stock, description }) => {
  const Detalles = () => {
    alert( {description} );
  };
  return (
    <>
      <center>
        <Card className="text-center" style={{ width: "18rem" }}>
          <Card.Header>Comida típica Mexicana</Card.Header>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              <img
                src={img}
                width="100"
                className="d-inline-block align-top"
                alt="Foto"
              />
            </Card.Text>
            <Button variant="primary" onClick={() => Detalles()}>
              Detalles
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">
            Stock disponible {stock}
          </Card.Footer>
        </Card>
      </center>
    </>
  );
};

export default Item;
