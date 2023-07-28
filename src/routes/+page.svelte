<script lang="ts">
	import { Icon } from '$lib/index.js';
	import i from '$lib/icons/index.js';

	const icons = Object.keys(i);

	let value = 24;
</script>

<input type="range" min="12" bind:value />

<ul>
	{#each icons as icon}
		<li>
			<Icon width={value} name={icon} />
		</li>
	{/each}
</ul>

<style>
	ul {
		display: flex;
		align-items: center;
		flex-wrap: wrap;
		gap: 1rem;
	}

	li {
		display: flex;
		list-style-type: none;
		border-radius: .5rem;
		padding: 0.5rem;
		transition: all 200ms;
	}

	li:hover {
		background: #cecece;
	}
</style>
