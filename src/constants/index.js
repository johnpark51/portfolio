import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	html,
	css,
	reactjs,
	tailwind,
	nodejs,
	git,
	kotra,
	parliament,
	chrw,
	katsuya,
	location,
	kijiji,
	scss,
	sql,
	githublogo,
	express,
	flappyBird,
	pokemon,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
	{
		id: "projects",
		title: "Projects",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Full-Stack Software Engineer",
		icon: mobile,
	},
	{
		title: "Business Graduate",
		icon: backend,
	},
	{
		title: "Experience in Business Development and Marketing",
		icon: creator,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "Git",
		icon: git,
	},
	{
		name: "Sass",
		icon: scss,
	},
	{
		name: "Express",
		icon: express,
	},
	{
		name: "Sql",
		icon: sql,
	},
	{
		name: "Github",
		icon: githublogo,
	},
];

const experiences = [
	{
		title: "Marketing and Business Development Intern",
		company_name: "KOTRA",
		icon: kotra,
		iconBg: "#FFFFFF",
		date: "June 2022 - Sept 2022",
		points: [
			"Coordinated the inaugural 2022 Korea Canada EV Battery Partnership Forum, cold calling over 300 EV companies, successfully recruiting over 50 companies the likes of Tesla, KPMG, GM Motors,and Magna.",
			"Initialized and and scheduled over 70 B2B meetings between suppliers and manufacturers, engaging in sales for over 20 organizations.",
			"Conducted comprehensive market research in the EV industry to identify emerging trends and business opportunities.",
			"Assisted in generating and qualifying leads through various channels, including networking events, social media, and CRM tools.",
		],
	},
	{
		title: "Parliamentary Intern",
		company_name: "Office of The Honourable Yonah Martin",
		icon: parliament,
		iconBg: "#FFFFFF",
		date: "Sept 2021 - Jan 2022",
		points: [
			"Spearheaded a bill briefing package for Senator Yonah Martin to fully illustrate my gain of knowledge through the completion of weekly workshops with guest presenters from parliament brought by the Senator.",
			"Demonstrated strong soft and interpersonal skills to tackle specific parliamentary issues with the Senator.",
			"Conducted in-depth research on proposed bills, legislative frameworks, and policy issues to support Senator Martin’s legislative agenda.",
		],
	},
	{
		title: "Program Director",
		company_name: "Radio Western / 94.9 CHRW",
		icon: chrw,
		iconBg: "#FFFFFF",
		date: "Sept 2018 - Apr 2021",
		points: [
			"Coordinated weekly Korean-based shows on CHRW Western’s radio channel, facilitating weekly script meetings, recruiting guests, and managing the radio panel as the show was running.",
			"Directed weekly videos on WithUFM’s YouTube channel centred around Korean international students, taking initiative on cinematographic aspects of the videos, amassing over 130,000 views on the channel.",
		],
	},
	{
		title: "Server",
		company_name: "Katsuya",
		icon: katsuya,
		iconBg: "#FFFFFF",
		date: "Sept 2020 - Mar 2021",
		points: [
			"Arranged and prepared tables for customers to offer memorable experiences to guests and foster repeat business.",
			"Replenished food items, paper products and canned goods to keep pantry well-stocked during busy periods.",
		],
	},
];

const projects = [
	{
		name: "Rate My Washroom",
		description:
			"Built a full-stack application for a user base to access nearby washrooms and their reviews, utilizing the Google Maps JavaScript Web API as well as building my own database of washrooms for users to navigate and filter through. ",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "nodejs",
				color: "green-text-gradient",
			},
			{
				name: "sql",
				color: "pink-text-gradient",
			},
			{
				name: "scss",
				color: "red-text-gradient",
			},
		],
		image: location,
		source_code_link: "https://github.com/johnpark51/rate-my-washroom-frontend",
		deploy: "",
	},
	{
		name: "Kijiji Industry Project",
		description:
			"Implemented a feature to reduce scam rates across users on Kijiji through a chatting system with validation through the implementation of a random forest classifier model and various KPIs to detect suspicious behaviours amongst users.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "tailwind",
				color: "green-text-gradient",
			},
			{
				name: "nodejs",
				color: "pink-text-gradient",
			},
		],
		image: kijiji,
		source_code_link: "https://github.com/johnpark51/industry-project-kijiji",
		deploy: "",
	},
	{
		name: "Flappy Bird",
		description:
			"Recreated my favourite mobile game when I was a child, using simple HTML, CSS, and JavaScript (desktop only)",
		tags: [
			{
				name: "html",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "green-text-gradient",
			},
			{
				name: "javascript",
				color: "pink-text-gradient",
			},
		],
		image: flappyBird,
		source_code_link: "https://github.com/johnpark51/flappy-bird",
		deploy: "https://flappy-bird-six-blond.vercel.app/",
	},
	{
		name: "API Hackathon",
		description:
			"Project made for Hackathon at brainstation that required us to use a web API. Using the Pokemon API, me and a partner software engineer created a website for users to generate random pokemon teams and guess their names.",
		tags: [
			{
				name: "html",
				color: "blue-text-gradient",
			},
			{
				name: "css",
				color: "green-text-gradient",
			},
			{
				name: "javascript",
				color: "pink-text-gradient",
			},
			{
				name: "api",
				color: "red-text-gradient",
			},
		],
		image: pokemon,
		source_code_link: "https://github.com/johnpark51/pokemon-hackathon",
		deploy: "",
	},
];

export { services, technologies, experiences, projects };
