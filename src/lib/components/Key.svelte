<script>
	import { cn } from '$lib';

	let {
		text,
		unit,
		action = () => {
			console.log(`${text} clicked!`);
		}
	} = $props();

	let className = cn(`relative inline-block cursor-pointer border-0 px-4 
	lg:px-6 py-2 lg:py-3 align-middle font-sans text-xs lg:text-sm font-semibold text-amber-950 
	outline-none w-${unit * 4}`);
</script>

<button
	class={className}
	onclick={action}
>
	<span class="flex items-center justify-center">
        {text}
	</span>
</button>

<style>

</style>
