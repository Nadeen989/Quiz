import { Link } from "react-router-dom";
import "./Hed.css";

const Hed = () => {
  return (
    <div className="hed">
      <Link to="/" className="title">
        Intuitive Quiz Hub
      </Link>
      <hr className="divider" />
    </div>
  );
};

export default Hed;
