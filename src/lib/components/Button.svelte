<script>
	import { cn } from '$lib';
	import { browser } from '$app/environment';

	import { animate, press, stagger } from 'motion';

	let {
		text,
		unit,
		code,
		// color = 'hsl(211, 63%, 10%)',
        sound,
		action = () => {
			console.log(`${text} clicked!`);
		}
	} = $props();

    let hsl = [211, 63, 10];
    let baseColor = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2]}%)`;
    let pressColor = `hsl(${hsl[0]}, ${hsl[1]}%, ${hsl[2] + 15}%)`;


    // let keypress;

	let button;
	let className = cn(
		`inline-block cursor-pointer px-4 py-2 align-middle font-extralight font-sans text-xs m-0.5 rounded-lg font-semibold text-gray-600 outline-none h-12`
	);
	// let className = cn(`inline-block cursor-pointer px-4 py-2 align-middle font-extralight font-sans text-xs bg-[#091828] m-0.5 rounded-lg font-semibold text-gray-600 outline-none h-12`);

	if (browser) {
		document.addEventListener('keydown', function onEvent(event) {
			if (event.code === code) {
				console.log(event);

                // keypress.play();

				animate(
					button,
					{
						backgroundColor: [baseColor, pressColor, baseColor]
					},
					{
						duration: 0.3,
						ease: 'easeInOut'
					}
				);
			}
		});
	}
</script>


<!-- style="width: {unit * 3}rem; background-color: #091828;" -->
<!-- style="width: {unit * 3}rem;" -->
<div style="width: {unit * 3}rem; background-color: {baseColor}" class={className} bind:this={button}>
	<span class="flex items-center justify-center font-light text-gray-500">
		{text}
	</span>
</div>

<style>
</style>
