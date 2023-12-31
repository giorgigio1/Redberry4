import Select from "react-select";

export const MultiSelectField = ({
  field,
  form,
  isMulti,
  options,
  ...props
}: any) => {
  const handleChange = (selectedOption: any) => {
    form.setFieldValue(field.name, selectedOption);
  };

  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      padding: "4px",
      borderRadius: "15px",
      marginTop: "3px",
      border: "1px solid #e4e3eb",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected
        ? "#000000"
        : state.isFocused
        ? "#CCCCCC"
        : state.data.color,
      color: state.isSelected
        ? "#FFFFFF"
        : state.isFocused
        ? "#000000"
        : state.data.textColor,
    }),
    multiValue: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.data.color,
      color: state.data.textColor,
      borderRadius: "12px",
      padding: "4px;",
    }),
    multiValueLabel: (provided: any, state: any) => ({
      ...provided,
      color: state.data.textColor,
    }),

    multiValueRemove: (provided: any) => ({
      ...provided,
      ":hover": {
        color: "black",
      },
    }),
  };

  return (
    <div>
      <Select
        {...field}
        {...props}
        options={options}
        onChange={handleChange}
        onBlur={field.onBlur}
        isMulti={isMulti}
        styles={customStyles}
        placeholder="შეიყვანეთ სათაური"
        components={{
          ClearIndicator: null,
        }}
      />
    </div>
  );
};
