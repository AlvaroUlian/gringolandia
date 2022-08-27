import Card from 'react-bootstrap/Card';

function ItemListContainer({ greeting }) {
  return (
    <Card>
      <Card.Body>{greeting}</Card.Body>
    </Card>
  );
}

export default ItemListContainer;
