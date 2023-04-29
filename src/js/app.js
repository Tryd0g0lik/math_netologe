class Main {
	constructor(type, defence) {
		this.type = type;
		this.defence = defence;
	}

	set attacks(value) {
		const resp = Math.round(this.defence - (this.defence * (value * 10 / 100)));
		this.attack = resp;
	}

	get attacks() {
		const result = this.attack;
		return result;
	}

	set stoneds(value) {
		/*
		* TODO: "value" - Дистанция.
		* "atack" - Сила урона.
		* "stoned" - Сила "дурман".
		*/
		this.stoned = this.attack - Math.round((Math.log2(value) * 5));
	}

	get stoneds() {
		const st = this.stoned;
		return st;
	}
}

export class Magician extends Main {
	constructor(name, type = "Magician", defence = 35) {
		super(type, defence);
		this.type = name;
	}

	magicianAttacks(value) {
		super.attacks = value;
		this.magicianAttack = super.attacks;
		const at = this.magicianAttack;
		return at;
	}

	magicianStoneds(value) {
		// super.stoned = value;
		super.stoneds = value;
		this.magicianStoned = super.stoneds;
		const st = this.magicianStoned;
		return st;
	}
}

export class Daemon extends Main {
	constructor(name, type = "Daemon", defence = 40) {
		super(type, defence);
		this.type = name;
	}

	daemonAttacks(value) {
		super.attacks = value;
		this.daemonAttack = super.attacks;
		const at = this.daemonAttack;
		return at;
	}

	daemonStoneds(value) {
		// super.stoned = value;
		super.stoneds = value;
		this.daemonStoned = super.stoneds;
		const st = this.daemonStoned;
		return st;
	}
}

// console.log("\--------------Magus--------------/");
// const mg = new Magician("Magus");
// mg.magicianAttacks(5);
// mg.magicianStoneds(5);
// console.log("MagusAttack ===>:", mg.magicianAttack);
// console.log("MagusStoned ===>:", mg.magicianStoned);
// console.log();
// console.log("\--------------Org---------------/");
// const org = new Daemon("Org");
// org.daemonAttacks(5);
// console.log("OrgAttack ===>:", org.daemonAttack);
// org.daemonStoneds(5);
// console.log("daemonStoned ===>:", org.daemonStoned);
