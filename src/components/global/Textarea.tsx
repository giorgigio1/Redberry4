import styled from "styled-components";

interface TextareaProps {
    title?: string;
    placeholder?: string;
    rows?: number;
    name?: string;
    onChange?: any;
    value?: string;
}

export const Textarea = ({
  title,
  placeholder,
  rows,
  name,
  onChange,
  value,
}: TextareaProps) => (
  <TextareaWrapper>
    <label>{title}</label>
    <textarea
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      rows={rows}
    ></textarea>
  </TextareaWrapper>
);

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
