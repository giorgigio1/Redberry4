import { useEffect, useState } from "react";
import "../styles/sort.css";
import axios from "axios";

const Sort = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await axios.get(
        "https://api.blog.redberryinternship.ge/api/categories"
      );
      setCategories(data.data);
    };
    getCategories();
  }, []);
  return (
    <div className="sort">
      {categories.map((category: any) => (
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
    </div>
  );
};

export default Sort;
