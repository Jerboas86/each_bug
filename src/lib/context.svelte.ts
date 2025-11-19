export class Item {
	prop: number;
	constructor() {
		this.prop = Math.random();
	}

	serialize() {
		return JSON.stringify({ property: Math.random() });
	}
}

export class Context {
	items: Item[] = $state.raw([]);

	addItem(item: Item) {
		this.items.push(item);
	}
}

export const context = new Context();
