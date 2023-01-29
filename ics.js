// YYYYMMDD 형식으로 출력
const splitDate = new Date().toISOString().split('T');
console.log(splitDate[0].replace(/\-/g, ''));