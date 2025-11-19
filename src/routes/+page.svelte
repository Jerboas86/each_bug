<script lang="ts">
	import { PrivateItem } from '$lib/Items';
	import { itemsState } from '$lib/items.svelte';

	function addItem() {
		const item = new PrivateItem();
		itemsState.addItem(item);
	}
</script>

<svelte:boundary>
	<button onclick={addItem}>Add</button>
	{#each itemsState.items as item (item.serialize())}
		<div>{item.prop}</div>
	{/each}
</svelte:boundary>
