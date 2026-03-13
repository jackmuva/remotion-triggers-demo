import { AbsoluteFill, interpolate } from "remotion"

export const TriggerIntro = ({
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

	return (
		<AbsoluteFill className="flex justify-center items-center">
			<div className="text-[80px]"
				style={{
					opacity: opacity,
				}}>
				introducing <span className="font-semibold text-indigo-700">ActionKit Triggers</span>
			</div>
		</AbsoluteFill>
	);
}
