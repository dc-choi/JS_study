
function Person(name) {
	this.name = name
}
Person.sayHi = function() {
	console.log(`Hi~~ I'm ${this.name}`);
}

const dongchul = new Person('dongchul');
dongchul.sayHi();

