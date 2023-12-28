// import * as Yup from "yup";

// const georgianLettersRegex = /^[\u10A0-\u10EA]+$/;

// export const validationSchema = Yup.object().shape({
//   title: Yup.string()
//     .required("")
//     .min(2),
//   description: Yup.string()
//     .required()
//     .min(2, "At least 2 characters required"),
//   image: Yup.string().required("Required"),
//   email: Yup.string().email("Invalid email").required("Required"),
//   author: Yup.string()
//     // .required("Required")
//     .matches(georgianLettersRegex, "onlyGeorgianLetter")
//     .test("min-words", "minTwoWords", (value) => {
//       if (!value) {
//         return false;
//       }
//       const words = value.split(/\s+/);
//       return words.length >= 4;
//     })
//     .min(4, "minFourSymbol"),
//   publish_date: Yup.date().required("Required"),
//   categories: Yup.array().required("Required"),
// });

export const minTwoSymbols = (value: string) => {
  if (!value) {
    return false;
  }
  return value.length >= 2;
};

export const minFourSymbols = (value: string) => {
  if (!value) {
    return false;
  }
  return value.length >= 4;
};

export const minTwoWords = (value: string) => {
  if (!value) {
    return false;
  }
  const words = value.trim().split(/\s+/);
  return words.length >= 2;
};

export const onlyGeorgianLetter = (value: string) => {
  if (!value) {
    return false;
  }
  const georgianLettersRegex = /^[\u10A0-\u10EA\s]+$/;
  return georgianLettersRegex.test(value);
};

export const emailCorrect = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const redBerryDomainRegex = /@redberry\.ge$/;

  return emailRegex.test(value) && redBerryDomainRegex.test(value);
};
