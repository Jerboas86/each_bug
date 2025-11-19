export class PrivateItem {
	prop: number;
	constructor() {
		this.prop = Math.random();
	}

	serialize() {
		this.prop = Math.random();
		return JSON.stringify(this.prop);
	}
}

export class PrivateItems {
	items: PrivateItem[] = [];

	addItem(item: PrivateItem) {
		this.items.push(item);
	}
}
