import { useContext } from "react"
import { CartContext } from "../cartContext/CartContext";
import { Container, Card, Button, Row, Col } from "react-bootstrap"


const CartItem = ({ id, name, price, img, cantidad }) => {

  const { removeItem } = useContext(CartContext)

  return (
    <Container className="">
      <Card className="" style={{ width: '85%' }}>
        <Row className='no-gutters'>
          <Col className="col-sm">
            <Card.Img className="rounded-3" src={img} alt={name} style={{ width: "30%", marginTop: "15px", paddingLeft: "15px"}} />
          </Col>
          <Col className="col-lg">
            <Card.Body>
              <Row>
                <Container className="col align-self-start">
                  <Card.Title>{name}</Card.Title>
                </Container>
              </Row>
              <Row>
                <Col className="col-sm" >
                  <Card.Text>Precio U$S {price}</Card.Text>
                  <Card.Text className="text-muted">Cantidad: {cantidad} item(s)</Card.Text>
                </Col>
                <Col className="col-sm">
                  <Button variant="dark" onClick={() => removeItem(id, cantidad, price)}>Me vale madre</Button>
                </Col>
              </Row>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default CartItem