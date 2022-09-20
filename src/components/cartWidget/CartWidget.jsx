import * as React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <>
      <FontAwesomeIcon icon={faCartArrowDown} />
      <Badge bg="danger">
        <Button variant="dark">
          <FontAwesomeIcon icon={faCartArrowDown} />
          <sup>3</sup>
        </Button>
      </Badge>
    </>
  );
};

export default CartWidget;
