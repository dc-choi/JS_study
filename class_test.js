/**
 * User
 * 
 * @param {string} lastname
 * @param {string} firstname
 * @param {number} age
 * 
 * @return {User} User
 */
class User {
	constructor(lastname = '', firstname = '', age = 1) {
		this.lastname = lastname;
		this.firstname = firstname;
		this.age = age;
	}

	get age() {
		return this._age;
	}

	set age(value) {
		this._age = value <= 1 ? 1 : value
	}

	get fullname() {
		return `${this.firstname} ${this.lastname}`;
	}

	getfullname() {
		return `${this.firstname} ${this.lastname}`;
	}

	getFullName = () => {
		return `${this.firstname} ${this.lastname}`;
	}
}

const dongchul = new User('choi', 'dongchul', 0);

console.log(dongchul); // 인스턴스
console.log(dongchul.firstname); // 프로퍼티 호출
console.log(dongchul.fullname); // getter 호출
console.log(dongchul.getfullname()); // method 호출
console.log(dongchul.getFullName()); // 프로퍼티 호출
console.log(dongchul.age); // getter 호출
console.log(dongchul._age); // 프로퍼티 호출
