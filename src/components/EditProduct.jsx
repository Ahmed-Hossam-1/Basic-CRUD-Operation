import axios from "axios";
import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { editproduct } = useParams();
  //   console.log(editproduct);
  const [category, setNewCategory] = useState("");
  const [price, setNewPrice] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:3000/products/${editproduct}`, {
        category,
        price,
      })
      .then((res) => console.log(res.status));
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Category</Form.Label>
          <Form.Control
            onChange={(e) => setNewCategory(e.target.value)}
            // value={product.category}
            type="text"
            placeholder="Enter Category"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={(e) => setNewPrice(e.target.value)}
            // value={product.price}
            type="number"
            placeholder="Enter Price"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default EditProduct;
