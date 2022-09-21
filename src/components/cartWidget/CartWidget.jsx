import * as React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { CartContext } from "../cartContext/CartContext";

const CartWidget = ({ cantidad }) => {
  const { units } = useContext(CartContext);

  return (
    <>
      <Badge bg="danger" as={Link} to="/cart">
        <Button variant="dark">
          <FontAwesomeIcon icon={faCartArrowDown} />
          <sup>{cantidad}</sup>
          {units > 0 ? <sup>{units}</sup> : <sup>{units}</sup>}
        </Button>
      </Badge>
    </>
  );
};

export default CartWidget;
