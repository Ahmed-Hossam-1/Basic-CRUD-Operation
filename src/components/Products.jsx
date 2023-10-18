import axios from "axios";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Products() {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:3000/products")
      .then((res) => setProduct(res.data));
  };

  const Delete = (product) => {
    Swal.fire({
      title: `are you sure delete ${product.title} ? `,
      showCancelButton: true,
    }).then((data) => {
      if (data.isConfirmed) {
        axios
          .delete(`http://localhost:3000/products/${product.id}`)
          .then(getData);
      }
    });
  };
  return (
    <>
      <h1>Products Page</h1>
      <Link to="add">
        <button className="btn btn-success btn-sm mt-3">Add Product</button>
      </Link>
      <Table striped className="mt-5">
        <thead>
          <tr>
            <th>ID</th>
            <th>Category</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {product.map((pro) => (
            <tr key={pro.id}>
              <td>{pro.id}</td>
              <td>{pro.category}</td>
              <td>{pro.price}</td>
              <td>
                <button
                  onClick={() => Delete(pro)}
                  className="btn btn-danger btn-sm"
                >
                  Delete
                </button>
                <Link to={`${pro.id}`} className="btn btn-info btn-sm">
                  View
                </Link>
                <Link to={`${pro.id}`} className="btn btn-primary btn-sm">
                  Edit
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default Products;
