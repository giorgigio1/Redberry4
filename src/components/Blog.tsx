import giorgi from "../images/blog/giorgi.jpg";
import { MdArrowOutward } from "react-icons/md";
import "../styles/blog.css";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <article className="blog">
      <img src={giorgi} alt="" />
      <p className="author">გიორგი გიორგაძე</p>
      <label className="publishDate">02.11.2023</label>
      <h3 className="title">EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა</h3>
      <section className="categories">
        <button className="market">მარკეტი</button>
        <button className="app">აპლიაცია</button>
        <button className="ai">ხელოვნური ინტელექტი</button>
      </section>
      <p className="description">
        6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
        სიზუსტისთვის, ეს პროცესი ძალიან გაიწელა დაახლოებით კიდევ 6 თვის მანძილზე
      </p>
      <Link to="/blog" className="fullView">
        სრულად ნახვა
        <MdArrowOutward className="arrowView" />
      </Link>
    </article>
  );
};

export default Blog;
