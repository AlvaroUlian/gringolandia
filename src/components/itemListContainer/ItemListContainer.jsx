import Card from "react-bootstrap/Card";
import ItemCount from "../itemCount/ItemCount";

function ItemListContainer({ greeting }) {
  function onAdd(cantidad) {
    alert("Este Gringo va a comprar " + cantidad + " pinches items")
  }
  return (
    <>
      <Card>
        <Card.Body>{greeting}</Card.Body>
      </Card>
      <ItemCount stock={5} initial={1} onAdd={onAdd}/>
    </>
  );
}

export default ItemListContainer;
