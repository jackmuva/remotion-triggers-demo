import { AbsoluteFill, Img, interpolate, staticFile } from "remotion";

const cards = [
	{
		logo: "salesforce-logo.png",
		text: "Salesforce Update Record",
		logoWidth: "w-24",
		rotation: 3,
	},
	{
		logo: "notion-logo.png",
		text: "Notion Create Page",
		logoWidth: "w-12",
		rotation: 18,
	},
	{
		logo: "slack-logo.png",
		text: "Slack Send Message",
		logoWidth: "w-12",
		rotation: -35,
	},
	{
		logo: "salesforce-logo.png",
		text: "Salesforce Contact Created",
		logoWidth: "w-24",
		rotation: -4,
	},
	{
		logo: "jira-logo.png",
		text: "Jira Ticket Created",
		logoWidth: "w-12",
		rotation: 7,
	},
	{
		logo: "slack-logo.png",
		text: "Slack Message Received",
		logoWidth: "w-12",
		rotation: 30,
	},
	{
		logo: "github-logo.svg",
		text: "GitHub Issue Created",
		logoWidth: "w-24",
		rotation: -14,
	},
];

export const ActionSpray = ({
	frame,
	startFrame,
	endFrame,
}: {
	frame: number;
	startFrame: number;
	endFrame: number;
}) => {

	const centerX = 960;
	const centerY = 540;
	const radiusX = 750;
	const radiusY = 450;
	const cardWidth = 520;
	const cardHeight = 112;

	return (
		<AbsoluteFill className="relative">
			{cards.map((card, i) => {
				const angle = ((2 * Math.PI) / cards.length) * i - Math.PI / 2;
				const x = centerX + radiusX * Math.cos(angle) - cardWidth / 2;
				const y = centerY + radiusY * Math.sin(angle) - cardHeight / 2;

				return (
					<div
						key={i}
						className="bg-white absolute h-28 justify-center items-center border text-[30px] rounded-xl p-5 w-[520px] flex gap-4"
						style={{
							left: x,
							top: y,
							transform: `rotate(${card.rotation}deg)`,
							opacity: interpolate(
								frame,
								[startFrame + (i * 4), (startFrame + (i * 4)) + 20],
								[0, 1],
							)
						}}
					>
						<Img className={card.logoWidth} src={staticFile(card.logo)} />
						<span>{card.text}</span>
					</div>
				);
			})}
		</AbsoluteFill>
	);
};
