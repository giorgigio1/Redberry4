import styled from "styled-components";

interface InputFieldsProps {
  label?: string;
  placeholder?: string;
  description?: string;
  type?: string;
  name?: string;
  onChange?: any;
  value?: string;
}

export const InputFields = ({
  label,
  placeholder,
  description,
  type,
  name,
  onChange,
  value,
}: InputFieldsProps) => {
  return (
    <WrapperDiv>
      <label>{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
      <span>{description}</span>
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
  & input {
    padding: 10px 10px;
    margin: 8px 0;
    border-radius: 15px;
    border: 1px solid #e4e3eb;
    outline: none;
  }
  span {
    color: #85858d;
    font-size: 12px;
  }
`;
