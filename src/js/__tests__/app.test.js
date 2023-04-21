import { Magician } from "../app";

test("test 001", () => {
	const nemo = new Magician("Magician");
	nemo.stoneds = 20;
	expect(nemo.stoneds).toBe("У Magician => атака: 0 и защита 10 балов");
});

test("test 002", () => {
	const nemo = new Magician("Magician");
	nemo.stoneds = 90;
	expect(nemo.stoneds).toBe("У Magician => атака: 0 и защита 10 балов");
});

test("test 003", () => {
	const nemo = new Magician("Magician");
	nemo.stoneds = 2;
	expect(nemo.stoneds).not.toBe("У Magician => атака: 0 и защита 10 балов");
});
