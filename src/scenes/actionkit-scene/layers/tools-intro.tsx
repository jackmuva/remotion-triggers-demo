import { MoveRight } from 'lucide-react';
import { AbsoluteFill, Img, interpolate, staticFile } from "remotion";

export const ToolsIntro = ({
	frame,
	startFrame,
	endFrame,
}: {
	frame: number,
	startFrame: number,
	endFrame: number,
}) => {
	const appOpacity = interpolate(
		frame,
		[startFrame, startFrame + 20],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	)

	const toolOpacity = interpolate(
		frame,
		[startFrame + 40, startFrame + 70],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	)
	return (
		<AbsoluteFill className="relative">
			<div className="absolute top-[350px] left-[50px] flex flex-col gap-6">
				<div style={{
					opacity: appOpacity
				}} className='text-[40px]'>
					Your App <span className='font-bold'>Calls Tools</span>
				</div>
				<div className="flex gap-4 h-[400px] items-center">
					<div style={{
						opacity: appOpacity
					}} className="-skew-x-3 h-full rounded-xl border-2 flex justify-center items-center">
						<div className="-skew-x-3 text-[50px] font-semibold p-4">
							Your App
						</div>
					</div>
					<div style={{
						opacity: toolOpacity
					}} className="flex flex-col gap-8 h-full justify-center">
						<div className="h-28 flex items-center justify-center">
							<MoveRight size={36} />
						</div>
						<div className="h-28 flex items-center justify-center">
							<MoveRight size={36} />
						</div>
						<div className="h-28 flex items-center justify-center">
							<MoveRight size={36} />
						</div>
					</div>
					<div style={{
						opacity: toolOpacity
					}} className="flex flex-col gap-8 h-full justify-center">
						<div className="h-28 -skew-x-3 justify-center items-center border text-[30px] rounded-xl p-5 w-[520px] flex gap-4">
							<Img className="-skew-x-3 w-24" src={staticFile('salesforce-logo.png')} />
							<span className="-skew-x-3 ">Salesforce Update Record</span>
						</div>
						<div className="h-28 -skew-x-3 justify-center items-center border text-[30px] rounded-xl p-5 w-[520px] flex gap-4">
							<Img className="-skew-x-3 w-12" src={staticFile('notion-logo.png')} />
							<span className="-skew-x-3 ">Notion Create Page</span>
						</div>
						<div className="h-28 -skew-x-3 justify-center items-center border text-[30px] rounded-xl p-5 w-[520px] flex gap-4">
							<Img className="-skew-x-3 w-12" src={staticFile('slack-logo.png')} />
							<span className="-skew-x-3 ">Slack Send Message</span>
						</div>
					</div>
				</div>
			</div>
		</AbsoluteFill>
	);
}
