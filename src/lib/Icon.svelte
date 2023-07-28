<script lang="ts">
	import { onMount } from 'svelte';
	import type iconImported from './icons/index.js';
	import type { TIcon } from './types.js';
	import icons from './icons/index.js';

	let icon: TIcon = '';
	export let width = 24;
	$: height = width;

	export let name: keyof typeof iconImported;
	onMount(async () => {
		const awaitIcon = await import('./icons/index.js');
		icon = awaitIcon.default[name];
	});
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	height={height + 'px'}
	width={width + 'px'}
	viewBox="0 0 24 24"
>
	{#if typeof icon === 'string'}
		<path d={icon} />
	{:else}
		{#if typeof icon.d === 'string'}
			<path d={icon.d} />
		{:else}
			{#each icon.d as d}
				<path {d} />
			{/each}
		{/if}

		{#if icon.circle}
			{#if Array.isArray(icon.circle)}
				{#each icon.circle as c}
					<circle cy={c?.cy} cx={c?.cx} r={c?.r} />
				{/each}
			{:else}
				<circle cy={icon.circle?.cy} cx={icon.circle?.cx} r={icon.circle?.r} />
			{/if}
		{/if}
	{/if}
</svg>
