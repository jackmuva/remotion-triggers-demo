import { AbsoluteFill, interpolate } from "remotion";

export const ActionKitSplit = ({
	frame,
	startFrame,
	endFrame,
}: {
	frame: number,
	startFrame: number,
	endFrame: number,
}) => {
	const translateY = interpolate(
		frame,
		[startFrame, startFrame + 20],
		[0, 100],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	)

	const toolTranslateX = interpolate(
		frame,
		[startFrame, startFrame + 20],
		[0, -750],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	)

	const triggerTranslateX = interpolate(
		frame,
		[startFrame, startFrame + 20],
		[0, 240],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	)


	const opacity = interpolate(
		frame,
		[startFrame, startFrame + 20],
		[0, 1],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	)

	return (
		<AbsoluteFill className="relative">
			<div style={{
				opacity: opacity,
				transform: `translateY(${translateY}px)
				translateX(${toolTranslateX}px)`
			}} className="absolute top-[150px] left-[800px] text-[60px] font-semibold text-indigo-800">
				ActionKit Tools
			</div>
			<div style={{
				opacity: opacity,
				transform: `translateY(${translateY}px)
				translateX(${triggerTranslateX}px)`
			}} className="absolute top-[150px] left-[800px] text-[60px] font-semibold text-indigo-800">
				ActionKit Triggers
			</div>

		</AbsoluteFill>
	);
}
