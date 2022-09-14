import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
//import { LinkContainer } from "react-router-bootstrap";

const Item = ({ id, name, price, img, stock, description }) => {
  
  return (
    <>
      <center>
          <Col style={{marginTop: '20px'}}>
            <Card className="text-center" style={{ width: "20rem" }}>
              <Card.Header><h5>{name}</h5></Card.Header>
              <Card.Body>
                <Card.Img src={img} />
                <Card.Text>
                  Si tienes lana, cómprate uno por {price}
                </Card.Text>
                <Link to={`/item/${id}`}>
                <Button variant="outline-dark">
                  Héchale un ojo
                </Button>
                </Link>
              </Card.Body>
              <Card.Footer className="text-muted">
                Solamente quedan {stock} unidades. Apúrale!!!
              </Card.Footer>
            </Card>
          </Col>
      </center>
    </>
  );
};

export default Item;
