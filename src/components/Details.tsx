import Header from "./Header";
import BlogView from "./BlogView";
import arrowBack from "../images/blog/ArrowLeft.png";
import "../styles/details.css";
import { Link } from "react-router-dom";

const Details = () => {
  return (
    <div className="details">
      <Header />
      <Link to="/">
        <img className="backArrow" src={arrowBack} alt="" />
      </Link>
      <BlogView />
    </div>
  );
};

export default Details;
