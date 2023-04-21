class Main {
	constructor(type, attack, defence) {
		this.type = type;
		this.attack = attack;
		this.defence = defence;
	}

	get stoneds() {
		return `У ${this.type} => атака: ${this.attack} и защита ${this.defence} балов`;
	}

	set stoneds(value) {
		/*
		* TODO: "value" - Дистанция.
			* "atack" - Сила урона.
			* "stoned" - Сила "дурман".
			*/
		const result = Math.round(this.defence - (this.defence * (value * 10 / 100)));
		result <= 0 ? this.attack = 0 : this.attack = result;

		this.stoned = this.attack - (Math.log2(value) * 5);
	}
}

export class Magician extends Main {
	constructor(name, type = "Magician", attack = 10, defence = 40) {
		super(name, type, attack, defence);
	}
}

export class Daemon extends Main {
	constructor(name, type = "Daemon", attack = 10, defence = 40) {
		super(name, type, attack, defence);
	}
}
// const nemo = new Magician("Magician");
// nemo.stoneds = 20
// console.log(nemo.stoneds)
