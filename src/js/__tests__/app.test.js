import { Magician } from "../app";

test("test 001", () => {
	const nemo = new Magician("Magician");
	nemo.stoned = 20;
	expect(nemo.stoned).toBe("У Magician => атака: 0 и защита 10 балов");
});

test("test 002", () => {
	const nemo = new Magician("Magician");
	nemo.stoned = 90;
	expect(nemo.stoned).toBe("У Magician => атака: 0 и защита 10 балов");
});

test("test 003", () => {
	const nemo = new Magician("Magician");
	nemo.stoned = 2;
	expect(nemo.stoned).not.toBe("У Magician => атака: 0 и защита 10 балов");
});
