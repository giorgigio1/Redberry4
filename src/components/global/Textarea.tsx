import { Field, useField } from "formik";
import { useState } from "react";
import styled from "styled-components";

interface TextareaProps {
  title?: string;
  placeholder?: string;
  rows?: number;
  name?: string;
  onChange?: any;
  value?: string;
  validation?: {
    func: (...args: any) => any;
    message: string;
  }[];
}

export const Textarea = ({
  title,
  placeholder,
  rows,
  name,
  onChange,
  value,
  validation,
}: TextareaProps) => {
  const [touched, setTouched] = useState(false);
  const [field] = useField(name || "");

  return (
    <TextareaWrapper>
      <label>{title}</label>
      <Field
        value={value}
        onChange={onChange}
        name={name}
        placeholder={placeholder}
        rows={rows}
        onFocus={() => setTouched(true)}
        
      ></Field>
      {validation &&
        validation.map((item, index): any => (
          <ul key={index}>
            <li
              className={
                touched
                  ? !item.func(field.value)
                    ? "text-danger"
                    : "text-success"
                  : ""
              }
            >
              {item.message}
            </li>
          </ul>
        ))}
    </TextareaWrapper>
  );
};

const TextareaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  & label {
    color: #1a1a1f;
    font-weight: bolder;
  }
  & textarea {
    padding: 10px 0 70px 10px;
    margin-top: 5px;
    border-radius: 12px;
    border: 1px solid #e4e3eb;
    resize: none;
    overflow: hidden;
    outline: none;
  }
`;
