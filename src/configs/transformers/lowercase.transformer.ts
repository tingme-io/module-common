const valueToLowercase = (inp: any) => {
  const value = inp.value;
  if (!value || typeof value !== 'string') {
    return value;
  }
  return value.toLowerCase();
};

export { valueToLowercase };
