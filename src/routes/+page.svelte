<script lang="ts">
	import { items, Item } from '$lib/context.svelte';

	function addItem() {
		const item = new Item();
		items.addItem(item);
	}
</script>

<svelte:boundary>
	<button onclick={addItem}>Add</button>
	{#each items.items as item (item.serialize())}
		<div>{item.prop}</div>
	{/each}
</svelte:boundary>
