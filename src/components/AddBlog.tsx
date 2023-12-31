import "../styles/addBlog.css";
import { Link } from "react-router-dom";
import AddBlogHeader from "./AddBlogHeader";
import { InputFields } from "./global/InputFields";
import arrowBackGray from "../images/blog/arrowLeftGray.png";
import upload from "../images/blog/upload.png";
import { Formik, Form, Field } from "formik";
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
import { MdOutlineClose } from "react-icons/md";
import uploadedImage from "../images/blog/gallery.png";
import { MultiSelectField } from "./global/MultiSelectField";

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
      onSubmit={async (values) => {
        try {
          const formData = new FormData();
          formData.append("title", values.title);
          formData.append("description", values.description);
          formData.append("image", values.image);
          formData.append("author", values.author);
          formData.append("publish_date", values.publish_date);
          formData.append("categories", JSON.stringify(values.categories));
          formData.append("email", values.email);
          await baseApi.post("/blogs", formData);
        } catch (error) {
          console.error("Error submitting form:", error);
        }
      }}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div className="addBlodBody">
            <AddBlogHeader />
            <div className="addBlog">
              <h1>ბლოგის დამატება</h1>
              <h5>ატვირთეთ ფოტო</h5>
              {values.image ? (
                <div className="uploadedImage">
                  <div>
                    <img src={uploadedImage} alt="" />
                    <span className="ml-3">
                      {(values.image as unknown as any)?.name}
                    </span>
                  </div>
                  <MdOutlineClose
                    style={{ cursor: "pointer", fontSize: "20px" }}
                    onClick={() => setFieldValue("image", "")}
                  />
                </div>
              ) : (
                <div className="uploadContainer">
                  <div className="upload">
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={(event) => {
                        setFieldValue(
                          "image",
                          event?.currentTarget?.files?.[0]
                        );
                      }}
                    />
                    <img src={upload} alt="" />
                    <p>
                      ჩააგდეთ ფაილი აქ ან <span>აირჩიე ფაილი</span>
                    </p>
                  </div>
                </div>
              )}
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
                  name="publish_date"
                  label="გამოქვეყნების თარიღი *"
                  type="date"
                />
                <div className="kategoria">
                  <label>კატეგორია *</label>
                  <Field
                    name="categories"
                    isMulti
                    component={MultiSelectField}
                    options={categories.map((category) => ({
                      value: category.id,
                      label: category.title,
                      color: category.background_color,
                      textColor: category.text_color,
                    }))}
                  />
                </div>
              </div>
              <div className="addBlog2">
                <InputFields
                  name="email"
                  label="ელ-ფოსტა *"
                  placeholder="Example@redberry.ge"
                  type="email"
                  validation={[
                    {
                      func: emailCorrect,
                      message: "მეილი უნდა მთავრდებოდეს @redberry.ge-ით",
                      strong: true,
                    },
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
            <Link to="/" className="backArrow">
              <img src={arrowBackGray} alt="" />
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddBlog;
