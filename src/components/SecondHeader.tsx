import blog from "../images/blog/Blog.png";
import "../styles/secondHeader.css";

const SecondHeader = () => {
  return (
    <div className="secondHeader">
      <h1>ბლოგი</h1>
      <img src={blog} alt="" />
    </div>
  );
};

export default SecondHeader;
