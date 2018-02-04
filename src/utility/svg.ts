
export const toPath = (points: number[], offset: number = 0): string => {
  let str = '';
  const count = points.length;
  for (let i = 0; i < count; i += 2) {
    let letter = ' L';
    if (i === 0) {
      letter = 'M';
    }
    str += `${letter}${points[i] + offset} ${points[i + 1]}`;
  }
  if (count > 0) {
    str += ' Z';
  }
  return str;
};
