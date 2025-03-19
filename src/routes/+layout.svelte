<script>
	import '../app.css';
	let { children } = $props();
</script>

<svelte:head>
	<title>Keyboard</title>
	<meta name="description" content="A minimalistic visual keyboard, powered by Svelte 5." />
	<meta name="keywords" content="keyboard, typing, project" />
	<meta name="author" content="Jamal Haneef" />
</svelte:head>

<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
	<filter id="noise">
		<feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="9" stitchTiles="stitch" />
		<feColorMatrix type="saturate" values="0" />
		<feBlend in="SourceGraphic" mode="overlay" />
	</filter>
</svg>

<div class="h-full w-full bg-gray-950">
	<div class="content absolute inset-0 z-0 bg-gray-950 opacity-15"></div>

	<div class="relative z-10">
		{@render children()}
	</div>
</div>

<style>
	.content {
		filter: url(#noise);
	}
</style>
