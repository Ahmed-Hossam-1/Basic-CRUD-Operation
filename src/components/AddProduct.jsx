import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const AddProduct = () => {
  const [id, setId] = useState(0);
  const [category, seCategory] = useState("");
  const [price, setPrice] = useState(0);
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/products", {
        id,
        category,
        price,
      })
      .then((res) => console.log(res.status));
  };

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>ID</Form.Label>
          <Form.Control
            onChange={(e) => setId(e.target.value)}
            type="number"
            placeholder="Enter ID"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>Category</Form.Label>
          <Form.Control
            onChange={(e) => seCategory(e.target.value)}
            type="text"
            placeholder="Enter Category"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNumber">
          <Form.Label>Price</Form.Label>
          <Form.Control
            onChange={(e) => setPrice(e.target.value)}
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

export default AddProduct;
