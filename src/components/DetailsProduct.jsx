import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailsProduct = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/products/${productId}`)
      .then((res) => setProduct(res.data));
  }, []);
  return (
    <>
      <h1>Products Detail # {productId}</h1>
      <h2>{product.title}</h2>
      <p> {product.price} </p>
      <img src={product.image} alt="..." />
    </>
  );
};

export default DetailsProduct;
