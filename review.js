class Review {
	taste;
	amount;
	price;
	delivery;

	constructor(taste = 5, amount = 5, price = 5, delivery = 5) {
		this.taste = taste;
		this.amount = amount;
		this.price = price;
		this.delivery = delivery;
	}

	print() {
		console.log(`Taste: ${this.taste}, Amount: ${this.amount}, Price: ${this.price}, Delivery: ${this.delivery}`);
	}
}

class App {
	static main() {
		const review = new Review();
		review.print();
	}
}

App.main();