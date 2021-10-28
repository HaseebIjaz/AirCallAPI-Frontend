export const objectToQueryParams = (paramsObj: Record<string, unknown>) => {
  const stringParams = [];
  for (const [key, value] of Object.entries(paramsObj)) {
    stringParams.push(key + '=' + value);
  }
  return stringParams.join('&');
};
