<script lang="ts">
	import { onMount } from "svelte";
	import type icon from './icons/index.js';

	let d: string | any = '';
	export let width = 24;
	export let height = width;

	export let name: keyof typeof icon;

	onMount(async () => {
		const icon = await import('./icons/index.js')
		d = icon.default[name]
	})
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	height={height + 'px'}
	width={width + 'px'}
	viewBox="0 0 24 24"
>
	<path {d} />
</svg>