
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


// 現在のSeason（春=0、夏=1、秋=2、冬期=3）
let nowSeasonNum = ""
const nowMonth = now.getMonth();
switch (nowMonth) {
  case 0:
  case 1:
  case 2:
    nowSeasonNum = 3;
    break
  case 3:
  case 4:
  case 5:
    nowSeasonNum = 0;
    break
  case 6:
  case 7:
  case 8:
    nowSeasonNum = 1;
    break
  case 9:
  case 10:
  case 11:
    nowSeasonNum = 2;
    break
}

// シーズンのvalueと表示文字用の配列
const seasonArray = [["spring", "春シーズン"],["summer", "夏シーズン"],["autumn", "秋シーズン"],["winter", "冬シーズン"]];

// yearArray:現在の年+1までを配列,nowYear:今年
const Years = {yearOption: yearArray(yearStart, nowYear), nowYear: nowYear};
export {Years, nowSeasonNum, seasonArray};