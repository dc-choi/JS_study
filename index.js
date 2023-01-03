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
// function book() {
// 	debugger;
// 	var title = 'JS';
// 	function getBook() {
// 		return title;
// 	}
// 	var readBook = function(){};
// 	getBook();
// }

// book();

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

// 다음 함수의 실행을 엔진 관점에서 논리적으로 해석하시오.
function book() {
	debugger;
	function get() {
		return point
	}
	var point = 10;
	return get();
}
console.log(book());

/**
 * 1. book 오브젝트의 [[Scope]]에 글로벌 오브젝트를 설정한다. (상위를 설정해준다.)
 * 2. book()을 호출한다.
 * 3. 엔진은 book()의 실행 콘텍스트를 생성하고 그 안으로 이동한다.
 * 
 * 4. 렉시컬, 변수, this 바인딩 환경 컴포넌트를 생성하여 첨부한다.
 * 5. get()과 var point를 환경 레코드로 생성하고 렉시컬 환경 컴포넌트에 바인딩함.
 * 6. 함수 안에서 외부 변수를 사용하지 않아서, 외부 렉시컬 환경 참조를 생성해도 따로 렉시컬 환경 컴포넌트에 값이 바인딩이 되지않는다.
 * 
 * 7. 파라미터를 따로 사용하지 않아서, 환경 레코드에 작성되지 않는다.
 * 8. get()을 function 오브젝트로 생성한다.
 * 9. var point의 초기값을 설정한다.
 * 
 * 10. 함수 안의 코드를 실행함. (이때 point의 값을 설정한다.)
 * 11 . 실행 콘텍스트 안에서 관련된 함수와 변수를 사용할 수 있습니다.
 */

console.log(`member-${new Date().getTime()}`);
console.log(`member-${Date.now()}`);

const arr = [];
console.log(typeof arr);
console.log(Array.isArray(arr));

const date = new Date();
console.log(date);
date.setDate(date.getDate() + 1)
console.log(date);

// 브라우저에서 실행해야하는 코드
/**
 * 실행 컨텍스트를 만들때 스코프가 실행시점에 맞춰서 만들어짐
 */
// var book = {
// 	value: 123,
// 	get: function() {
// 		var value = 456;
// 		console.log(this === window);
// 		console.log(this.value);
// 	}
// };

// book.get(); // 일반적인 this의 동작처럼 동작함.

// var fn = book.get;
// fn();
// // 실행시점에서 스코프가 결정되기 때문에 this가 window를 가리킴. 고로 true가 나옴
// // this에 value라는 변수가 없기 떄문에 undefined가 나옴.

(function() {
	console.log("즉시 함수 실행");
}())

// 브라우저에서 실행해야하는 코드
/**
 * 클로저 논리 설명
 */

// function book(bookParam) {
// 	var point = 100;
// 	function getPoint(pointParam) {
// 		point = point + bookParam + pointParam;
// 		return point;
// 	}
// 	return getPoint;
// }
// var obj = book(200);
// console.log(obj(400)); // 700