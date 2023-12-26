import { MdArrowOutward } from "react-icons/md";
import "../styles/blog.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { BlogProps } from "../types";
import { baseApi } from "../baseAI";

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);

  useEffect(() => {
    const getBlog = async () => {
      const { data } = await baseApi.get("/blogs");
      setBlogs(data.data);
    };
    getBlog();
  }, []);

  return (
    <section className="blogSection">
      {blogs.map((blog) => (
        <article key={blog.id} className="blog">
          <img src={blog.image} alt="" />
          <div>
            <p className="author">{blog.author}</p>
            <label className="publishDate">{blog.publish_date}</label>
          </div>
          <h3 className="title">{blog.title}</h3>
          <section className="categories">
            {blog.categories.map((category) => (
              <button
                key={category.id}
                style={{
                  backgroundColor: category.background_color,
                  color: category.text_color,
                }}
              >
                {category.title}
              </button>
            ))}
          </section>
          <p className="description">{blog.description}</p>
          <Link
            to={`/blog/${blog.id}`}
            state={{ id: blog.id, blogs }}
            className="fullView"
            onClick={() => window.scrollTo(0, 0)}
          >
            სრულად ნახვა
            <MdArrowOutward className="arrowView" />
          </Link>
        </article>
      ))}
    </section>
  );
};

export default Blog;
