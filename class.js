
class Person{
	constructor(name) {
		this.name = name;
	}

	sayHi() {
		console.log(`Hi~~ I'm ${this.name}`);
	}
}

class Developer extends Person {
	constructor(name) {
		super(name);
	}

	coding() {
		console.log(`coding... I'm ${this.name}`);
	}
}

class BackEndDeveloper extends Developer {
	constructor(name) {
		super(name);
	}

	nodeJS() {
		console.log(`nodeJS... I'm ${this.name}`);
	}
}

const dongchul = new BackEndDeveloper('dongchul');
dongchul.sayHi();
dongchul.coding();
dongchul.nodeJS();

