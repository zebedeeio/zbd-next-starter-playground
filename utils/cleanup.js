export const cleanup = (obj) => {
  const newObj = {};

  for (const [key, value] of Object.entries(obj)) {
    if (value !== null && value !== undefined) {
      newObj[key] = value;
    }
  }

  return newObj;
}