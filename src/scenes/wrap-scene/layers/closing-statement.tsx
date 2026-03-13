import {
	AbsoluteFill, interpolate
} from "remotion";

export const ClosingStatement = ({
	frame,
	startFrame,
	endFrame,
}: {
	frame: number,
	startFrame: number,
	endFrame: number,
}) => {
	const opacity = interpolate(
		frame,
		[startFrame, startFrame + 40, endFrame - 20, endFrame],
		[0, 1, 1, 0],
	);
	const fadeOut = interpolate(
		frame,
		[startFrame + 80, startFrame + 100],
		[1, 0],
	);
	const fadeIn = interpolate(
		frame,
		[startFrame + 100, startFrame + 130],
		[0, 1],
	);

	return (
		<AbsoluteFill className="flex justify-center items-center">
			<div className="flex flex-col items-center gap-0" style={{
				opacity: opacity,
			}}>
				<div className="text-[60px] font-semibold text-center w-[1500px]" >
					<span className="font-bold text-indigo-700" >
						With ActionKit
					</span>
					, let Paragon take care of
				</div>
				{frame < startFrame + 100 ? (
					<div style={{
						opacity: frame < (startFrame - 60) ? opacity : fadeOut,
					}} className="text-[60px] font-semibold text-center w-[1500px]" >
						all your tool calls and webhook subscriptions
					</div>) : (
					<div style={{
						opacity: fadeIn,
					}} className="text-[60px] font-semibold text-center w-[1500px]" >
						all the integration actions you need
					</div>
				)}
			</div>
		</AbsoluteFill>
	);
}
