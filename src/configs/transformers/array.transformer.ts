const valueToArray = (inp: any) => {
  const value = inp.value;
  if (Array.isArray(value)) {
    return value;
  }

  if (typeof value === 'string') {
    return value.split(',');
  }
  return [];
};

export { valueToArray };
