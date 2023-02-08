// YYYYMMDD 형식으로 출력
const splitDate = new Date().toISOString().split('T');
console.log(splitDate[0].replace(/\-/g, ''));

const parseStr = Number(undefined);
const parseStr2 = Number(null);
const parseStr3 = Number('');

console.log(parseStr);
console.log(parseStr2);
console.log(parseStr3);