import Item from "../item/Item";

const ItemList = ({ productsItem }) => {
  return (
    <>
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
    </>
  );
};

export default ItemList;
