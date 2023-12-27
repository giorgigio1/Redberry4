import "../styles/addBlog.css";
import { Link } from "react-router-dom";
import AddBlogHeader from "./AddBlogHeader";
import { InputFields } from "./global/InputFields";
import { Textarea } from "./global/Textarea";

const AddBlog = () => {
  return (
    <div className="addBlodBody">
      <AddBlogHeader />
      <div className="addBlog">
        <h1>ბლოგის დამატება</h1>
        <h5>ატვირთეთ ფოტო</h5>
        <input type="file" />
        <div className="addBlog2">
          <InputFields
            label="სათაური *"
            placeholder="სათაური"
            description="მინიმუმ 3 სიმბოლო"
            type="text"
            onChange={() => {}}
            value=""
          />
          <InputFields
            label="სათაური *"
            placeholder="შეიყვანეთ სათაური"
            description="მინიმუმ 2 სიმბოლო"
            type="text"
            name="title"
            onChange={() => {}}
            value=""
          />
        </div>
        <Textarea title="აღწერა *" placeholder="შეიყვანეთ აღწერა" />
        <div className="addBlog2">
          <InputFields label="გამოქვეყნების თარიღი *" type="date" />
          <div className="kategoria">
            <label>კატეგორია *</label>
            <select>
              <option hidden>აირჩიეთ ხარისხი</option>
              <option value="1">კატეგორია 1</option>
              <option value="2">კატეგორია 2</option>
              <option value="3">კატეგორია 3</option>
            </select>
          </div>
        </div>
        <div className="addBlog2">
          <InputFields
            label="ელ-ფოსტა *"
            placeholder="Example@redberry.ge"
            type="email"
          />
          <div className="w-50"></div>
        </div>
        <div>
          <button className="gamoqveyneba w-50 float-right" type="submit">
            გამოქვეყნება
          </button>
        </div>
      </div>
      <Link to="/home">Home Page</Link>
    </div>
  );
};

export default AddBlog;
