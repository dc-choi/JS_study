/** 이 주석은 개발자들 사이의 코딩 관례
 * @function getName
 * 1. 
 * @param { String } code
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