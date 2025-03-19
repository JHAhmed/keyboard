<script>
	import { cn } from '$lib';

	let {
		text,
		unit,
		action = () => {
			console.log(`${text} clicked!`);
		}
	} = $props();

	let className = cn(`learn-more relative inline-block cursor-pointer border-0 px-6 py-3 align-middle font-sans text-sm font-semibold text-amber-950 outline-none w-${unit * 4}`);
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
	* {
		box-sizing: border-box;
	}

	*::before,
	*::after {
		box-sizing: border-box;
	}

	.learn-more {
		text-decoration: none;
		background: #f4f0ff;
		border: 2px solid #b18597;
		border-radius: 0.75em;
		transform-style: preserve-3d;
		transition:
			transform 150ms cubic-bezier(0, 0, 0.58, 1),
			background 150ms cubic-bezier(0, 0, 0.58, 1);
	}

	.learn-more::before {
		position: absolute;
		content: '';

		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;

		background: #f9c4d2;
		border-radius: inherit;

		transform: translate3d(0, 0.75em, -1em);
		transition:
			transform 150ms cubic-bezier(0, 0, 0.58, 1),
			box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
	}

	.learn-more:hover {
		background: #ffe9e9;
		transform: translate(0, 0.25em);
	}

	.learn-more:hover::before {
		transform: translate3d(0, 0.5em, -1em);
	}

	.learn-more:active {
		background: #ffe9e9;
		transform: translate(0em, 0.75em);
	}

	.learn-more:active::before {
		transform: translate3d(0, 0, -1em);
	}
</style>
