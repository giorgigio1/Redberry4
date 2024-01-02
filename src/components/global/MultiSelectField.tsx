import { useState } from "react";
import Select from "react-select";

export const MultiSelectField = ({
  field,
  form,
  isMulti,
  options,
  ...props
}: any) => {
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const handleChange = (selectedOption: any) => {
    form.setFieldValue(field.name, selectedOption);
    setSelectedOption(selectedOption);
  };

  const customStyles = {
    control: (provided: any, state: any) => {
      const isOptionSelected =
        selectedOption !== null && selectedOption.length > 0;
      return {
        ...provided,
        padding: "3px",
        borderRadius: "15px",
        marginTop: "1px",
        borderColor: state.isFocused
          ? "#4CAF50"
          : isOptionSelected
          ? "#4CAF50"
          : "#e4e3eb",
        backgroundColor: state.isFocused
          ? "#F8FFF8"
          : isOptionSelected
          ? "#F8FFF8"
          : provided.backgroundColor,
        "&:hover": {
          borderColor: "#4CAF50",
        },
      };
    },
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
      padding: "4px",
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

  const customTheme = (theme: any) => ({
    ...theme,
    colors: {
      ...theme.colors,
      primary25: "#F8FFF8",
      primary: "#4CAF50",
    },
  });

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
        theme={customTheme}
        components={{
          ClearIndicator: null,
        }}
      />
    </div>
  );
};
