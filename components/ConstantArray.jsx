
// Yearの配列
const yearStart = 2015
const now = new Date();
const nowYear = now.getFullYear();
const yearArray = (a, z) => {
  const list = [];
  for (let i = a; i <= (z + 1); i++) {
      list.push(i)
  }
  return list;
};
export const Years = yearArray(yearStart, nowYear)