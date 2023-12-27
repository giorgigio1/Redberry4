import "../styles/addBlogHeader.css";
import logo from "../images/header/Logo.png";

const AddBlogHeader = () => {
  return (
    <figure className="addBlogHeader">
      <img src={logo} alt="" />
    </figure>
  );
};

export default AddBlogHeader;
