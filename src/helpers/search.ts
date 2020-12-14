const wordStartsWithParameter = (word: string, parameter: string): boolean => {
  const lowerWord = word.toLowerCase();
  const lowerParameter = parameter.toLowerCase();

  return lowerWord.startsWith(lowerParameter);
};

export default wordStartsWithParameter;
