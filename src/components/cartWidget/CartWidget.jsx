import * as React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

function CartWidget() {
  return (
    <Button variant="secondary">
      <FontAwesomeIcon icon={faCartArrowDown} />
      <Badge bg="secondary">9</Badge>
      <span className="visually-hidden">unread messages</span>
    </Button>
  );
}

export default CartWidget;
