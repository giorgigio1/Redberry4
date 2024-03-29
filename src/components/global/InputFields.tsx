import { Field, useField } from "formik";
import { useState } from "react";
import styled from "styled-components";
import errorImage from "../../images/loginModal/error.png";

interface InputFieldsProps {
  name?: string;
  label?: string;
  placeholder?: string;
  type?: string;
  validation?: {
    func: (...args: any) => any;
    message: string;
    strong?: boolean;
  }[];
}

export const InputFields = ({
  name,
  label,
  placeholder,
  type,
  validation,
}: InputFieldsProps) => {
  const [field] = useField(name || "");

  const [touched, setTouched] = useState(false);

  const isValid =
    touched && validation && validation.every((item) => item.func(field.value));

  return (
    <WrapperDiv>
      <label>{label}</label>
      <Field
        onFocus={() => setTouched(true)}
        name={name}
        type={type}
        placeholder={placeholder}
        rows={4}
        as={type === "textarea" ? "textarea" : "input"}
        className={`
          ${touched && isValid ? "success" : ""}
          ${type === "date" && touched ? "success" : ""}
          ${touched && !isValid ? "fail" : ""}
        `}
      />
      <ul>
        {validation &&
          validation.map((item, index) => (
            <li
              key={index}
              className={
                touched
                  ? !item.func(field.value)
                    ? "text-danger"
                    : "text-success"
                  : ""
              }
            >
              {item.strong && touched && !item.func(field.value) ? (
                <strong>
                  <img src={errorImage} alt="" /> {item.message}
                </strong>
              ) : (
                !item.strong && item.message
              )}
            </li>
          ))}
      </ul>
    </WrapperDiv>
  );
};

const WrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-top: 30px;
  & label {
    margin: 0;
    fontsize: 14px;
    color: #1a1a1f;
    font-weight: bolder;
  }
  & input,
  & input[type="date"],
  & textarea {
    padding: 10px 10px;
    margin: 8px 0;
    border-radius: 15px;
    border: 1px solid #ccc;
    outline: none;

    &:focus {
      border-color: #4caf50;
    }
  }

  & input[type="date"].fail,
  & input.fail,
  & textarea.fail {
    border-color: red;
    background-color: #ffe6e6;
  }
  & input[type="date"].success,
  & input.success,
  & textarea.success {
    border-color: #4caf50;
    background-color: #f8fff8;
  }
  span {
    color: #85858d;
    font-size: 12px;
  }
  & ul {
    padding: 0 0 0 15px;
  }
  & ul li {
    color: #85858d;
    font-size: 12px;
    width: 100%;
    margin-left: 0;
  }
  & textarea {
    padding: 10px 0 70px 10px;
    margin-top: 5px;
    border-radius: 12px;
    border: 1px solid #e4e3eb;
    resize: none;
    overflow: hidden;
    outline: none;
    margin-bottom: 5px;
  }
`;
