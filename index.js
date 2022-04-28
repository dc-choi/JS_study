/** 이 주석은 개발자들 사이의 코딩 관례
 * @function getName
 * 1. 
 * @param { String } code
 * @return { String } name
 */

let idx = 0; // for 루프를 돌리기 위한 변수
let odd = 0; // 홀수의 누적 값
let even = 0; // 짝수의 누적 값
let sum = 0; // for 루프의 반복 누적 값

for (idx; idx < 50; idx++) {
	if (idx % 2 === 0)
		odd += idx;
	else
		even += idx;
	sum += idx;
}

console.log(`홀수의 누적 값: ${odd}`);
console.log(`짝수의 누적 값: ${even}`);
console.log(`총 누적 값: ${sum}`);

let number = 10;
let objNumber = Number(10);

console.log(typeof number);
console.log(typeof objNumber); // new 연산자를 붙이면 인스턴스로 생성됨.
console.log(number === objNumber);
console.log(typeof 20..toString()); // IEEE 754 표준으로 인해 JS는 숫자를 실수형으로 표시함.
console.log(typeof number.toString());

console.log("12345".indexOf(4));
console.log("12345".indexOf(4, -1));
console.log("12345".indexOf(4, 2));
console.log("12345".indexOf(6));
console.log("12345".lastIndexOf(3));
console.log("12345".lastIndexOf(1, 1));
console.log("12345".lastIndexOf(5, 1));
console.log("12345".lastIndexOf(3, -1));