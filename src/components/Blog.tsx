import { MdArrowOutward } from "react-icons/md";
import "../styles/blog.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

//b45d409e8ae208855a91869bc3a54d0289d90b3cdb404ca9208e3a6e4955c004

interface Category {
  id: number;
  title: string;
  background_color: string;
  text_color: string;
}

interface BlogProps {
  id: number;
  author: string;
  title: string;
  description: string;
  image: string;
  publish_date: string;
  categories: Category[];
}

const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogProps[]>([]);

  useEffect(() => {
    const getBlog = async () => {
      const { data } = await axios.get(
        "https://api.blog.redberryinternship.ge/api/blogs",
        {
          headers: {
            Authorization:
              "Bearer b45d409e8ae208855a91869bc3a54d0289d90b3cdb404ca9208e3a6e4955c004",
          },
        }
      );
      setBlogs(data.data);
    };
    getBlog();
  }, []);

  return (
    <>
      {blogs.map((blog) => (
        <article key={blog.id} className="blog">
          <img src={blog.image} alt="" />
          <div>
            <p className="author">{blog.author}</p>
            <label className="publishDate">{blog.publish_date}</label>
          </div>
          <h2 className="title">{blog.title}</h2>
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
            state={{ id: blog.id }}
            className="fullView"
          >
            სრულად ნახვა
            <MdArrowOutward className="arrowView" />
          </Link>
        </article>
      ))}
    </>
  );
};

export default Blog;
