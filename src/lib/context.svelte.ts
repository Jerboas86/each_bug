export class Item {
	prop: number;
	constructor() {
		this.prop = Math.random();
	}

	serialize() {
		return JSON.stringify({ property: Math.random() });
	}
}

export class Items {
	items: Item[] = $state.raw([]);

	addItem(item: Item) {
		this.items.push(item);
		this.#invalidate();
	}

	#invalidate() {
		const memo = this.items;
		this.items = null as unknown as Item[];
		this.items = memo;
	}
}

export const items = new Items();
