import { useEffect, useState } from "react";
import ItemList from "../itemList/ItemList";
//import promesa from "../../utils/promesa";
//import productsMx from "../../utils/products";
import { useParams } from "react-router-dom";
import { firestoreFetch } from "../../utils/Firestorefetch";

const ItemListContainer = () => {
  const [prods, setProds] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    firestoreFetch(idCategory)
    .then(result => setProds(result))
    .catch(err => console.log(err));
}, [idCategory]);

useEffect(() => {
return (() => {
  setProds([]);
})
}, []);

  return (
    <>
      <ItemList productsItem={prods} />
    </>
  );
};

export default ItemListContainer;
