export const randomInRange = (start: number, end: number) => {
  return start + Math.floor(Math.random() * (end - start - 1));
};
