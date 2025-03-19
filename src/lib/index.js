import { twMerge } from 'tailwind-merge'
import { animate, inView } from 'motion';

export const cn = (...inputs) => {
  return twMerge(inputs)
}

export function animateIn(element, args = {}) {
	const defaults = {
		duration: 0.5,
		delay: 0.5,
		scale: 1,
		x: 0,
		y: 0,
		blur: 0,
		rotate: 0,
		amount: 0.5,
		inView: true
	};

	const finalArgs = { ...defaults, ...args };

	if (finalArgs.inView) {
		inView(
			element,
			() => {
				const animation = animate(
					element,
					{
						opacity: 1,
						scale: [finalArgs.scale, 1],
						x: [finalArgs.x, 0],
						y: [finalArgs.y, 0],
						rotate: [finalArgs.rotate, 0],
						filter: [`blur(${finalArgs.blur}px)`, 'blur(0px)']
					},
					{
						duration: finalArgs.duration,
						delay: finalArgs.delay
					}
				);
			},
			{ amount: finalArgs.amount }
		);
	} else {
		animate(
			element,
			{
				opacity: 1,
				scale: [finalArgs.scale, 1],
				x: [finalArgs.x, 0],
				y: [finalArgs.y, 0],
				filter: [`blur(${finalArgs.blur}px)`, 'blur(0px)']
			},
			{
				duration: finalArgs.duration,
				delay: finalArgs.delay
			}
		);
	}
}