<script>
	import '../app.css';
	let { children } = $props(); // Assuming Svelte 5+
  </script>
  
  <svelte:head>
	<title>QCLKP | Keyboard</title>
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
  
  <div class="bg-gray-950 min-h-screen relative">
  
	<div
	  class="absolute inset-0 z-0"
	  style="filter: url(#noise); opacity: 0.1;" ></div>
  
	<div class="relative z-10 p-12"> {@render children()}
	</div>
  
  </div>
  
  <style>
	/* You no longer need the .content filter here */
	/* .content {
	  filter: url(#noise);
	} */
  </style>