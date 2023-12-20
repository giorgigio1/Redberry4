import "../styles/blogView.css";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

interface BlogProps {
  id: number;
  author: string;
  title: string;
  description: string;
  image: string;
  publish_date: string;
  email: string;
  categories: {
    id: number;
    title: string;
    background_color: string;
    text_color: string;
  }[];
}

const BlogView: React.FC = () => {
  const id = useLocation().state.id;

  const [blog, setBlog] = useState<BlogProps | undefined>();

  useEffect(() => {
    const getBlogWithId = async () => {
      const { data } = await axios.get(
        `https://api.blog.redberryinternship.ge/api/blogs/${id}`,
        {
          headers: {
            Authorization:
              "Bearer b45d409e8ae208855a91869bc3a54d0289d90b3cdb404ca9208e3a6e4955c004",
          },
        }
      );
      setBlog(data);
    };
    getBlogWithId();
  }, []);

  return (
    <article className="blogView">
      <img src={blog?.image} alt="" />
      <p className="author">{blog?.author}</p>
      <label className="publishDate">{blog?.publish_date}</label>
      <span> • {blog?.email}</span>
      <h2 className="title">{blog?.title}</h2>
      <section className="categories">
        {blog?.categories.map((category) => (
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
      <p className="description">{blog?.description}</p>
    </article>
  );
};

export default BlogView;
