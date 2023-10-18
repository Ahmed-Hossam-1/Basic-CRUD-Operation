import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <>
      <ul className="list-unstyled">
        <li>
          <Link to="/products">All Products</Link>
        </li>
        <li>
          <Link to="/categores">All Categores</Link>
        </li>
      </ul>
    </>
  );
};

export default SideBar;
