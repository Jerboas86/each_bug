<script lang="ts">
	import { context, Item } from '$lib/context.svelte';

	async function addItem() {
		const item = new Item();
		context.addItem(item);
	}
</script>

<svelte:boundary>
	<button onclick={addItem}>Add</button>
	{#each context.items as item (item.serialize())}
		<div>{item.prop}</div>
	{/each}
</svelte:boundary>
