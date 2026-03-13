import { MoveRight } from 'lucide-react';
import { AbsoluteFill, Img, interpolate, staticFile } from "remotion";

export const TriggersIntro = ({
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
		[startFrame + 40, startFrame + 70],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	const triggerOpacity = interpolate(
		frame,
		[startFrame, startFrame + 20],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);

	return (
		<AbsoluteFill className="relative">
			<div className="absolute top-[350px] right-[50px] flex flex-col gap-6">
				<div style={{
					opacity: triggerOpacity
				}} className='text-[40px]'>
					<span className='font-bold'>Trigger Subscriptions</span> Notify Your App
				</div>
				<div className="flex gap-4 h-[400px] items-center">
					<div style={{
						opacity: triggerOpacity
					}} className="flex flex-col gap-8 h-full justify-center">
						<div className="h-28 -skew-x-3 justify-center items-center border text-[30px] rounded-xl p-5 w-[520px] flex gap-4">
							<Img className="-skew-x-3 w-24" src={staticFile('salesforce-logo.png')} />
							<span className="-skew-x-3 ">New Salesforce Update</span>
						</div>
						<div className="h-28 -skew-x-3 justify-center items-center border text-[30px] rounded-xl p-5 w-[520px] flex gap-4">
							<Img className="-skew-x-3 w-12" src={staticFile('notion-logo.png')} />
							<span className="-skew-x-3 ">New Notion Page Created</span>
						</div>
						<div className="h-28 -skew-x-3 justify-center items-center border text-[30px] rounded-xl p-5 w-[520px] flex gap-4">
							<Img className="-skew-x-3 w-12" src={staticFile('slack-logo.png')} />
							<span className="-skew-x-3 ">New Slack Message</span>
						</div>
					</div>
					<div style={{
						opacity: appOpacity
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
						opacity: appOpacity
					}} className="-skew-x-3 h-full rounded-xl border-2 flex justify-center items-center">
						<div className="-skew-x-3 text-[50px] font-semibold p-4">
							Your App
						</div>
					</div>
				</div>
			</div>
		</AbsoluteFill>
	);
}
