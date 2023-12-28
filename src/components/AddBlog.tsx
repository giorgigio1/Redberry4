import "../styles/addBlog.css";
import { Link } from "react-router-dom";
import AddBlogHeader from "./AddBlogHeader";
import { InputFields } from "./global/InputFields";
import arrowBackGray from "../images/blog/arrowLeftGray.png";
import upload from "../images/blog/upload.png";
import { Formik, Form } from "formik";
import {
  emailCorrect,
  minFourSymbols,
  minTwoSymbols,
  minTwoWords,
  onlyGeorgianLetter,
} from "../validation/validationSchema";
import { useEffect, useState } from "react";
import { baseApi } from "../baseAI";
import { CategoryProps } from "../types";

const AddBlog = () => {
  const [categories, setCategories] = useState<CategoryProps[]>([]);

  useEffect(() => {
    const getCategories = async () => {
      const { data } = await baseApi.get("/categories");
      setCategories(data.data);
    };
    getCategories();
  }, []);

  return (
    <Formik
      initialValues={{
        title: "",
        description: "",
        image: "",
        author: "",
        publish_date: "",
        categories: [],
        email: "",
      }}
      // validationSchema={}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <Form>
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
                name="author"
                label="ავტორი *"
                placeholder="შეიყვანეთ ავტორი"
                type="text"
                validation={[
                  { func: minFourSymbols, message: "მინიმუმ 4 სიმბოლო" },
                  { func: minTwoWords, message: "მინიმუმ 2 სიტყვა" },
                  {
                    func: onlyGeorgianLetter,
                    message: "მხოლოდ ქართული ასოები",
                  },
                ]}
              />
              <InputFields
                name="title"
                label="სათაური *"
                placeholder="შეიყვანეთ სათაური"
                type="text"
                validation={[
                  { func: minTwoSymbols, message: "მინიმუმ 2 სიმბოლო" },
                ]}
              />
            </div>
            <InputFields
              validation={[
                { func: minTwoSymbols, message: "მინიმუმ 2 სიმბოლო" },
              ]}
              label="აღწერა *"
              placeholder="შეიყვანეთ აღწერა"
              name="description"
              type="textarea"
            />
            <div className="addBlog2">
              <InputFields
                name="date"
                label="გამოქვეყნების თარიღი *"
                type="date"
              />
              <div className="kategoria">
                <label>კატეგორია *</label>
                <select>
                  <option hidden>აირჩიეთ ხარისხი</option>
                  {categories.map((category) => (
                    <option key={category.id}>
                      <div
                        style={{
                          backgroundColor: category.background_color,
                          color: category.text_color,
                        }}
                      >
                        {category.title}
                      </div>
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="addBlog2">
              <InputFields
                name="email"
                label="ელ-ფოსტა *"
                placeholder="Example@redberry.ge"
                type="email"
                validation={[
                  { func: emailCorrect, message: "მეილი უნდა მთავრდებოდეს @redberry.ge-ით", strong: true },
                ]}
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
      </Form>
    </Formik>
  );
};

export default AddBlog;
