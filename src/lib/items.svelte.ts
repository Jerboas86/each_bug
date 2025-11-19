import { PrivateItems, type PrivateItem } from './Items';

export class ItemsState {
	#items = $state(new PrivateItems());

	addItem(item: PrivateItem) {
		this.#items.addItem(item);
		this.#invalidate();
	}

	get items() {
		return this.#items.items;
	}

	#invalidate() {
		const memo = this.#items;
		this.#items = null as unknown as PrivateItems;
		this.#items = memo;
	}
}

export const itemsState = new ItemsState();
