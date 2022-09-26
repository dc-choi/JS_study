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

let value = [101, 26, 7, 1234];
value.sort((one, two) => {
	return two - one;
});
console.log(value);

let array = [];
for (let i = 1; i <= 1000000; i++) {
	array.push(i);
}

let check = () => {};

let start = Date.now();
array.forEach(() => {
	check();
});
let end = Date.now();

console.log(end - start);

let data = { data: 'qwer', data2: 'qwerqwerqwer'};
console.log(JSON.stringify(data, null, 4));

/**
 * 브라우저에서 실행해야하는 코드
 */
function book() {
	// debugger;
	// var title = 'JS';
	// function getBook() {
	// 	return title;
	// }
	// var readBook = function(){};
	// getBook();
}

book();

// 선언문은 두번 선언하면 선언마다 갱신된다. 그래서 책2가 나옴.
function getBook() {
	return '책1';
}
console.log(getBook());
function getBook() {
	return '책2';
}

// 표현식은 두번 선언할 경우 이미 값이 있다고 판단하여 맨 처음만 할당된다. 책1이 나옴.
var getBook2 = function() {
	return '책1';
}
console.log(getBook2());
var getBook2 = function() {
	return '책2';
};

// 선언문이 JS 엔진상 먼저 읽히기 때문에 책2가 나온다.
function getBook3() {
	return '책2';
}
console.log(getBook3());
var getBook3 = function() {
	return '책1';
}

// 선언문을 먼저 읽지만 표현식을 초기화하면서 선언문으로 할당한 것이 초기화됨.
var getBook4 = function() {
	return '책1';
}
console.log(getBook4());
function getBook4() {
	return '책2';
}
