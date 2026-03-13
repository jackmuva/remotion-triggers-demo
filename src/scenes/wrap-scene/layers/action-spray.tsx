import {
	AbsoluteFill, Img, interpolate,
	staticFile
} from "remotion";

export const ActionSpray = ({
	frame,
	startFrame,
	endFrame,
}: {
	frame: number,
	startFrame: number,
	endFrame: number,
}) => {
	return (
		<AbsoluteFill className="relative">
			<div className="bg-white rotate-12 absolute top-[100px] left-[100px] h-28 justify-center items-center border text-[30px] rounded-xl p-5 w-[520px] flex gap-4">
				<Img className=" w-24" src={staticFile('salesforce-logo.png')} />
				<span className=" ">Salesforce Update Record</span>
			</div>
			<div className="bg-white -rotate-12 absolute top-[300px] left-[300px] h-28  justify-center items-center border text-[30px] rounded-xl p-5 w-[520px] flex gap-4">
				<Img className=" w-12" src={staticFile('notion-logo.png')} />
				<span className=" ">Notion Create Page</span>
			</div>
			<div className="bg-white h-28  justify-center items-center border text-[30px] rounded-xl p-5 w-[520px] flex gap-4">
				<Img className=" w-12" src={staticFile('slack-logo.png')} />
				<span className=" ">Slack Send Message</span>
			</div>
			<div className="bg-white h-28  justify-center items-center border text-[30px] rounded-xl p-5 w-[520px] flex gap-4">
				<Img className=" w-24" src={staticFile('salesforce-logo.png')} />
				<span className=" ">Salesforce Update Record</span>
			</div>
			<div className="bg-white h-28  justify-center items-center border text-[30px] rounded-xl p-5 w-[520px] flex gap-4">
				<Img className=" w-12" src={staticFile('notion-logo.png')} />
				<span className=" ">Notion Create Page</span>
			</div>
			<div className="bg-white h-28  justify-center items-center border text-[30px] rounded-xl p-5 w-[520px] flex gap-4">
				<Img className=" w-12" src={staticFile('slack-logo.png')} />
				<span className=" ">Slack Send Message</span>
			</div>

		</AbsoluteFill>
	);
}
