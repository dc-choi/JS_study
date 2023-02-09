// YYYYMMDD 형식으로 출력
const date = new Date().toISOString();
const splitDate = new Date().toISOString().split('T');
console.log(date);
console.log(splitDate[0].replace(/\-/g, ''));

const parseStr = Number(undefined);
const parseStr2 = Number(null);
const parseStr3 = Number('');

console.log(parseStr);
console.log(parseStr2);
console.log(parseStr3);

const checkBool = !!!undefined;
const checkBool2 = !!!null;
const checkBool3 = !!!'';
const checkBool4 = !!!0;

console.log(checkBool);
console.log(checkBool2);
console.log(checkBool3);
console.log(checkBool4);