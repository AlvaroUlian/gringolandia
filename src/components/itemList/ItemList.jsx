import Item from "../item/Item";
import Row from "react-bootstrap/Row";

const ItemList = ({ productsItem }) => {
  return (
    <>
      <Row xs={1} md={productsItem.length}>
        {productsItem.length ? (
          productsItem.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              price={item.price}
              category={item.category}
              img={item.img}
              stock={item.stock}
              description={item.description}
            />
          ))
        ) : (
          <p>Cargando ...</p>
        )}
      </Row>
    </>
  );
};

export default ItemList;
