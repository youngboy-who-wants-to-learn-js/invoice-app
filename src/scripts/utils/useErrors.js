export const useErrors = (initErrors) => {
  let errors = { ...initErrors };

  const setErrors = (field, errorName) => {
    // 😢
    errors[field] = errorName;
  };

  const cleanErrors = () => {
    // 😢
    Object.keys(errors).forEach((er) => {
      errors[er] = "";
    });
  };

  return {
    errors,
    setErrors,
    cleanErrors,
  };
};
