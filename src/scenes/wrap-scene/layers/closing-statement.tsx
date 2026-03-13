import {
	AbsoluteFill, interpolate, Img, staticFile
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
		[startFrame, startFrame + 40],
		[0, 1],
	);
	const fadeOut = interpolate(
		frame,
		[startFrame + 60, startFrame + 80],
		[1, 0],
	);
	const fadeIn = interpolate(
		frame,
		[startFrame + 80, startFrame + 120],
		[0, 1],
	);

	return (
		<AbsoluteFill className="flex justify-center items-center">
			<div className="flex flex-col items-center gap-0" style={{
				opacity: opacity,
			}}>
				<div className="text-[60px] font-semibold text-center w-[1500px]" >
					Let Paragon take care of
				</div>
				{frame < startFrame + 80 ? (
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
				<div className="text-[60px] font-semibold text-center w-[1500px] font-bold text-indigo-700" >
					with ActionKit
				</div>
			</div>
		</AbsoluteFill>
	);
}
