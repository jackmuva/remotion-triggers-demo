import { AbsoluteFill, Img, interpolate, staticFile } from "remotion";

export const PrevContent = ({
	frame,
	startFrame,
	endFrame,
}: {
	frame: number,
	startFrame: number,
	endFrame: number,
}) => {
	const logoStartY = -220
	const logoStartX = -620

	const logoTranslateY = interpolate(
		frame,
		[startFrame, startFrame + 20],
		[0, 1300],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp"
		}
	);

	const logoTranslateX = interpolate(
		frame,
		[startFrame, startFrame + 20],
		[0, 1850],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp"
		}
	)

	const logoScale = interpolate(
		frame,
		[startFrame, startFrame + 20],
		[0, 0.2],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp"
		}
	);

	const introOpacity = interpolate(
		frame,
		[startFrame, startFrame + 20],
		[1, 0],
	);


	const akTranslateY = interpolate(
		frame,
		[startFrame, startFrame + 20],
		[0, 350],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp"
		}
	);


	const akTranslateX = interpolate(
		frame,
		[startFrame, startFrame + 20],
		[0, 100],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp"
		}
	)

	return (
		<AbsoluteFill>
			<AbsoluteFill className="flex justify-center items-center">
				<div className="flex items-center gap-4" style={{
					opacity: 1,
					scale: 0.5 - logoScale,
					transform: `translateY(${logoStartY - logoTranslateY}px) 
					translateX(${logoStartX - logoTranslateX}px)`,
				}}>
					<Img className="w-[170px]" src={staticFile('paragon-logo.svg')} />;
					<div className="text-[170px] font-semibold" >
						Paragon
					</div>
				</div>
			</AbsoluteFill>
			<AbsoluteFill className="flex justify-center items-center">
				<div className="text-[80px]"
					style={{
						opacity: 1,
					}}>
					<span style={{ opacity: introOpacity }}	>introducing </span>
					<span style={{
						display: 'inline-block',
						transform: `translateY(${-1 * akTranslateY}px)
							translateX(${-1 * akTranslateX}px)`
					}} className="font-semibold text-indigo-700">ActionKit </span>
					<span style={{ opacity: introOpacity }} className="font-semibold text-indigo-700">Triggers</span>
				</div>
			</AbsoluteFill>
		</AbsoluteFill>
	);
}
