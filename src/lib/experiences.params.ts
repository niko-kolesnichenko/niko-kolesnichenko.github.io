import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	{
		slug: 'qa-engineer',
		company: 'Performance Lab',
		description: "Developed and maintained comprehensive test models for thick and thin banking client apps, control center's message adapter, custom Siebel CRM, increasing testing efficiency by 15%. Conducted in-depth analysis and testing of technical documentation and specifications for critical banking systems, reducing following test design efforts by 8%. Executed iterative testing, detailed bug reporting, and facilitating productive discussions for prompt issue resolution, which contributed to a 20% reduction in pre- and post-release defects",
		contract: ContractType.FullTime,
		type: 'Quality Assurance and Control',
		location: 'Office',
		period: { from: new Date(2013, 9, 1), to: new Date(2015, 9, 1) },
		skills: getSkills('css', 'html', 'js'),
		name: 'QA Engineer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	}
];

export default MY_EXPERIENCES;
