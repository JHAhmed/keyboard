<script>
	import { Key, Button } from '$components';
	import { browser } from '$app/environment';
	import { animateIn } from '$lib';

	if (browser) {
		document.addEventListener('keypress', function onEvent(event) {
			if (!inFocus) {
				textArea.focus();
				inFocus = true;
			}

			let sound = new Audio('/keypress.mp3');
			sound.preload = 'auto';
			sound.load();

			let click = sound.cloneNode();
			click.play();
		});

		document.addEventListener('keydown', function onEvent(event) {
			if (event.code === 'Backspace') {
				let sound = new Audio('/backspace.mp3');
				sound.preload = 'auto';
				sound.load();

				let click = sound.cloneNode();
				click.play();
			}
		});
	}

	let rows = [
		[
			{ unit: 1, key: '~', code: 'Backquote', color: '#091828' },
			{ unit: 1, key: '1', code: 'Digit1', color: '#091828' },
			{ unit: 1, key: '2', code: 'Digit2', color: '#091828' },
			{ unit: 1, key: '3', code: 'Digit3', color: '#091828' },
			{ unit: 1, key: '4', code: 'Digit4', color: '#091828' },
			{ unit: 1, key: '5', code: 'Digit5', color: '#091828' },
			{ unit: 1, key: '6', code: 'Digit6', color: '#091828' },
			{ unit: 1, key: '7', code: 'Digit7', color: '#091828' },
			{ unit: 1, key: '8', code: 'Digit8', color: '#091828' },
			{ unit: 1, key: '9', code: 'Digit9', color: '#091828' },
			{ unit: 1, key: '0', code: 'Digit0', color: '#091828' },
			{ unit: 1, key: '-', code: 'Minus', color: '#091828' },
			{ unit: 1, key: '+', code: 'Equal', color: '#091828' },
			{ unit: 2, key: 'Backspace', code: 'Backspace', color: '#091828' }
		],
		[
			{ unit: 1.5, key: 'Tab', code: 'Tab', color: '#091828' },
			{ unit: 1, key: 'Q', code: 'KeyQ', color: '#091828' },
			{ unit: 1, key: 'E', code: 'KeyW', color: '#091828' },
			{ unit: 1, key: 'E', code: 'KeyE', color: '#091828' },
			{ unit: 1, key: 'R', code: 'KeyR', color: '#091828' },
			{ unit: 1, key: 'T', code: 'KeyT', color: '#091828' },
			{ unit: 1, key: 'Y', code: 'KeyY', color: '#091828' },
			{ unit: 1, key: 'U', code: 'KeyU', color: '#091828' },
			{ unit: 1, key: 'I', code: 'KeyI', color: '#091828' },
			{ unit: 1, key: 'O', code: 'KeyO', color: '#091828' },
			{ unit: 1, key: 'P', code: 'KeyP', color: '#091828' },
			{ unit: 1, key: '[', code: 'BracketLeft', color: '#091828' },
			{ unit: 1, key: ']', code: 'BracketRight', color: '#091828' },
			{ unit: 1.5, key: '\\', code: 'Backslash', color: '#091828' }
		],
		[
			{ unit: 1.75, key: 'Caps Lock', code: 'CapsLock', color: '#091828' },
			{ unit: 1, key: 'A', code: 'KeyA', color: '#091828' },
			{ unit: 1, key: 'S', code: 'KeyS', color: '#091828' },
			{ unit: 1, key: 'D', code: 'KeyD', color: '#091828' },
			{ unit: 1, key: 'F', code: 'KeyF', color: '#091828' },
			{ unit: 1, key: 'G', code: 'KeyG', color: '#091828' },
			{ unit: 1, key: 'H', code: 'KeyH', color: '#091828' },
			{ unit: 1, key: 'J', code: 'KeyJ', color: '#091828' },
			{ unit: 1, key: 'K', code: 'KeyK', color: '#091828' },
			{ unit: 1, key: 'L', code: 'KeyL', color: '#091828' },
			{ unit: 1, key: ';', code: 'Semicolon', color: '#091828' },
			{ unit: 1, key: "'", code: 'Quote', color: '#091828' },
			{ unit: 2.25, key: 'Enter', code: 'Enter', color: '#091828' }
		],
		[
			{ unit: 2.25, key: 'Shift', code: 'ShiftLeft', color: '#091828' },
			{ unit: 1, key: 'Z', code: 'KeyZ', color: '#091828' },
			{ unit: 1, key: 'X', code: 'KeyX', color: '#091828' },
			{ unit: 1, key: 'C', code: 'KeyC', color: '#091828' },
			{ unit: 1, key: 'V', code: 'KeyV', color: '#091828' },
			{ unit: 1, key: 'B', code: 'KeyB', color: '#091828' },
			{ unit: 1, key: 'N', code: 'KeyN', color: '#091828' },
			{ unit: 1, key: 'M', code: 'KeyM', color: '#091828' },
			{ unit: 1, key: ',', code: 'Comma', color: '#091828' },
			{ unit: 1, key: '.', code: 'Period', color: '#091828' },
			{ unit: 1, key: '/', code: 'Slash', color: '#091828' },
			{ unit: 2.75, key: 'Shift', code: 'ShiftRight', color: '#091828' }
		],
		[
			{ unit: 1.75, key: 'Ctrl', code: 'ControlLeft', color: '#091828' },
			{ unit: 1.50, key: 'Win', code: 'MetaLeft', color: '#091828' },
			{ unit: 1.25, key: 'Alt', code: 'AltLeft', color: '#091828' },
			{ unit: 4.5, key: 'Space', code: 'Space', color: '#091828' },
			{ unit: 1.75, key: 'Alt', code: 'AltRight', color: '#091828' },
			{ unit: 1.50, key: 'Win', code: 'MetaRight', color: '#091828' },
			{ unit: 1.50, key: 'Menu', code: 'ContextMenu', color: '#091828' },
			{ unit: 1.25, key: 'Ctrl', code: 'ControlRight', color: '#091828' }
		]
	];

	let text = $state('');
	let inFocus = $state(false);
	let textArea;
</script>

{#if !inFocus}
	<div class="absolute bottom-16 mx-auto flex w-full items-center justify-center">
		<div class="rounded-lg border-2 border-blue-950 bg-blue-900/20 p-2 text-white">
			<p class="text-xs lg:text-sm">Press any button to start typing!</p>
		</div>
	</div>
{/if}

<div class="absolute top-8 mx-auto flex w-full flex-col items-center justify-center p-2 text-white">
	<p class="text-lg">QCLKP</p>
	<p class="text-xs text-gray-500">Quick Cool Little Keyboard Project</p>
</div>

<section>
	<div class="flex h-screen flex-col items-center justify-center">
		<div class="my-8 flex items-center justify-center">
			<textarea
				onfocusout={(inFocus = false)}
				bind:this={textArea}
				bind:value={text}
				class="w-60 resize-none overflow-hidden text-lg font-light text-white focus:outline-none lg:w-3xl lg:text-2xl"
				cols="30"
				rows="4"
				type="text"
			></textarea>
		</div>

		<div class="hidden lg:block">
			{#each rows as row}
				<div class="flex items-center justify-center">
					{#each row as key, i}
						<div
							use:animateIn={{ delay: i * 0.2, duration: 0.4, blur: 4, scale: 0.9 }}
							class="opacity-0"
						>
							<Button text={key.key} unit={key.unit} code={key.code} />
						</div>
					{/each}
				</div>
			{/each}
		</div>
	</div>
</section>

<footer class="absolute bottom-4 mx-auto flex w-full items-center justify-center">
	<div
		class="flex flex-col items-center justify-center space-x-8 text-center text-xs font-medium text-gray-900 lg:flex-row lg:text-sm"
	>
		<p class="font-normal text-gray-600">
			Made with ♥️ by
			<a href="https://jamal-haneef.vercel.app/" class=""
				><span
					class="mx-0.5 font-medium text-gray-300 decoration-gray-300 decoration-1 underline-offset-2 hover:underline"
					>Jamal Haneef</span
				></a
			>
			<a href="https://wurks.studio/" class=""
				>& <span
					class="ml-0.5 font-medium text-purple-600 decoration-purple-600 decoration-1 underline-offset-2 hover:underline"
					>Wurks</span
				>.</a
			>
		</p>
	</div>
</footer>
