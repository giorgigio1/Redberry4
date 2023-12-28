import "../styles/addBlog.css";
import { Link } from "react-router-dom";
import AddBlogHeader from "./AddBlogHeader";
import { InputFields } from "./global/InputFields";
import { Textarea } from "./global/Textarea";
import arrowBackGray from "../images/blog/arrowLeftGray.png";
import upload from "../images/blog/upload.png";

const AddBlog = () => {
  return (
    <div className="addBlodBody">
      <AddBlogHeader />
      <div className="addBlog">
        <h1>ბლოგის დამატება</h1>
        <div className="uploadContainer">
          <h5>ატვირთეთ ფოტო</h5>
          <div className="upload">
            <input type="file" className="" />
            <img src={upload} alt="" />
            <p>
              ჩააგდეთ ფაილი აქ ან <span>აირჩიე ფაილი</span>
            </p>
          </div>
        </div>
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
      <Link to="/home" className="backArrow">
        <img src={arrowBackGray} alt="" />
      </Link>
    </div>
  );
};

export default AddBlog;
