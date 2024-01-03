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

  const georgianLettersRegex =
    /[^\u10A0-\u10FF]*[\u10A0-\u10FF]+[^\u10A0-\u10FF]*/;
  return georgianLettersRegex.test(value);
};

export const emailCorrect = (value: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const redBerryDomainRegex = /@redberry\.ge$/;

  return emailRegex.test(value) && redBerryDomainRegex.test(value);
};
