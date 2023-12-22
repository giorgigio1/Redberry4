import "../styles/blogView.css";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdArrowOutward } from "react-icons/md";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";

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

const PrevArrow = ({ onClick }: any) => (
  <div className="custom-arrow prev" onClick={onClick}>
    <IoIosArrowDropleftCircle />
  </div>
);

const NextArrow = ({ onClick }: any) => (
  <div className="custom-arrow next" onClick={onClick}>
    <IoIosArrowDroprightCircle style={{ fontSize: "50px", color: "#5D37F3" }} />
  </div>
);

const BlogView: React.FC = () => {
  const { id, blogs } = useLocation().state;

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
  }, [id]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div>
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
      <div className="slider">
        <h2 className="similarArticles">მსგავსი სტატიები</h2>
        <Slider {...settings} className="custom-slider">
          {blogs.map((blog: any) => (
            <article key={blog?.id} className="blog custom-slide">
              <img src={blog?.image} alt="" />
              <div>
                <p className="author">{blog?.author}</p>
                <label className="publishDate">{blog?.publish_date}</label>
              </div>
              <h3 className="title">{blog?.title}</h3>
              <section className="categories">
                {blog?.categories.map((category: any) => (
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
              <Link
                to={`/blog/${blog.id}`}
                state={{ id: blog.id, blogs }}
                className="fullView"
              >
                სრულად ნახვა
                <MdArrowOutward className="arrowView" />
              </Link>
            </article>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogView;
