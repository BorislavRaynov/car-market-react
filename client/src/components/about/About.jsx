import { ArrowPathIcon, HandThumbUpIcon, StarIcon } from '@heroicons/react/24/outline';

const features = [
	{
		name: 'Trusted Partners',
		description:
			'All the sellers at Car Market have been checked.',
		icon: HandThumbUpIcon,
	},
	{
		name: 'High availabilty',
		description:
			'The vehicle marketplace with the most car ads.',
		icon: StarIcon,
	},
	{
		name: 'Easy to use',
		description:
			'Our platform is extreamly easy to navigate.',
		icon: ArrowPathIcon,
	},
	{
		name: 'Feedback',
		description:
			'Our platform is top rated in its category.',
		icon: StarIcon,
	},
]

export default function Example() {
	return (
			<div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-12 lg:max-w-6xl lg:px-8">
				<div className="mx-auto max-w-2xl lg:text-center">
					<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Top cars. One marketplace.
					</p>
					<h2 className="mt-2 text-base font-semibold leading-7 text-indigo-600">High availability</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Here at Car Market you can browse cars from trusted partners, 
						so you can focus on choosing your next vehicle and not worry been mislead.
					</p>
				</div>
				<div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
					<dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
						{features.map((feature) => (
							<div key={feature.name} className="relative pl-16">
								<dt className="text-base font-semibold leading-7 text-gray-900">
									<div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
										<feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
									</div>
									{feature.name}
								</dt>
								<dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
	);
};
