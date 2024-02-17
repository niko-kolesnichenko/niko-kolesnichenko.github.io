import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [
	{
		degree: "Master's degree in \"Computers, complexes, systems and networks\" ",
		description: '',
		location: '',
		logo: Assets.Vshe,
		name: '',
		organization: 'Higher School of Economics',
		period: { from: new Date(2008, 1, 1), to: new Date(2013, 7, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: []
	}
];
