
// Yearに関する
const yearStart = 2015
const now = new Date();
// その年は他で使うためにエクスポート
export const nowYear = now.getFullYear();
const yearArray = (a, z) => {
  const list = [];
  for (let i = a; i <= (z + 1); i++) {
      list.push(i)
  }
  return list;
};
// 現在の年+1までを配列としてエクスポート
export const Years = yearArray(yearStart, nowYear)