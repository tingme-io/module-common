const valueToBoolean = (inp: any) => {
  const value = inp.value;
  switch (true) {
    case typeof value === 'boolean':
      return value;
    case value === null:
    case value === undefined:
    case ['false', 'off', 'no', '0'].includes(value.toLowerCase()):
      return false;
    case ['true', 'on', 'yes', '1'].includes(value.toLowerCase()):
      return true;
    default:
      return false;
  }
};

export { valueToBoolean };
