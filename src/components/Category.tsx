import { useEffect, useState } from "react";
import "../styles/category.css";
import axios from "axios";

interface CategoryProps {
  id: number;
  title: string;
  background_color: string;
  text_color: string;
}

const Category: React.FC = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

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
    <div className="category">
      {categories.map((category) => (
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

export default Category;
