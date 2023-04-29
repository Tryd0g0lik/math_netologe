class Main {
	constructor(type, attack, defence) {
		this.type = type;
		this.attack = attack;
		this.defence = defence;
	}

	set stoned(value) {
		/*
		* TODO: "value" - Дистанция.
			* "atack" - Сила урона.
			* "stoned" - Сила "дурман".
			*/

		const result = Math.round(this.defence - (this.defence * (value * 10 / 100)));
		this.attack = result;

		if (result <= 0) {
			this.attack = 0;
		}

		this.stone = this.attack - Math.round((Math.log2(value) * 5));
	}

	get stoned() {
		const st = [this].filter((item) => {
			if (!item.stone !== true) {
				return item.stone;
			}
			return undefined;
		});

		return st;
	}
}

export class Magician extends Main {
	constructor(name, type = "Magician", attack = Number(10), defence = Number(40)) {
		super(name, type, attack, defence);
	}

	setStoned(value) {
		super.stoned = value;
	}

	getStoned() {
		console.log("this.stone:=>", this.stone);
		const st = this.stone;
		return st;
	}
}

export class Daemon extends Main {
	constructor(name, type = "Daemon", attack = Number(25), defence = Number(40)) {
		super(name, type, attack, defence);
	}

	setStoned(value) {
		super.stoned = value;
	}

	getStoned() {
		console.log("this.stone:=>", this.stone);
		const st = this.stone;
		return st;
	}
}

console.log("\--------------Magus--------------/");
const mg = new Magician("Magus");
mg.setStoned(5);
mg.getStoned();
console.log(`===>: ${mg.stone}`);
console.log();
console.log("\--------------Org---------------/");
const org = new Magician("Org");
org.setStoned(5);
org.getStoned();
console.log(`===>: ${org.stone}`);
