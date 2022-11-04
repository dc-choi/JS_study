const MILLISECONDS_PER_SECOND = 1000;
const SECONDS_PER_MINUTE = 60;
const MINUTES_PER_HOUR = 60;

const SECOND = MILLISECONDS_PER_SECOND;
const MINUTE = SECOND * SECONDS_PER_MINUTE;
const HOUR = MINUTE * MINUTES_PER_HOUR;

const regex = /[^A-z]/g;
const expire = '12h';
const now = new Date().getTime();
const expireDate = new Date('2022-11-02T06:04:43.951Z').getTime();
const str = expire.replace(regex, "");
let result;

if (str === 'h') {
	let parsed = expire.split('h');
	result = (now - expireDate) > (parseInt(parsed[0]) * HOUR);
} else if (str === 'm') {
	let parsed = expire.split('m');
	result = (now - expireDate) > (parseInt(parsed[0]) * MINUTE);
} else {
	console.log('error');
}

console.log(MINUTE);
console.log(HOUR);
console.log(result);

if (result) {
	console.log('error');
} else {
	console.log('not error');
}
