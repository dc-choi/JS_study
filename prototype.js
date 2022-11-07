
function Person(name) {
	this.name = name
}
Person.prototype.sayHi = function() {
	console.log(`Hi~~ I'm ${this.name}`);
}

function Developer(name) {
	Person.call(this, name);
}
Developer.prototype = Object.create(Person.prototype, {});
Developer.prototype.coding = function() {
	console.log(`coding... I'm ${this.name}`);
}

function BackEndDeveloper(name) {
	Developer.call(this, name);
}
BackEndDeveloper.prototype = Object.create(Developer.prototype, {});
BackEndDeveloper.prototype.nodeJS = function() {
	console.log(`nodeJS... I'm ${this.name}`);
}

const dongchul = new BackEndDeveloper('dongchul');
dongchul.sayHi();
dongchul.coding();
dongchul.nodeJS();

