import {
	AbsoluteFill, interpolate, Img, staticFile
} from "remotion";

export const ParagonLogo = ({
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

	const scale = interpolate(
		frame,
		[endFrame - 25, endFrame],
		[1, 0.5],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp"
		}
	);

	const translateY = interpolate(
		frame,
		[endFrame - 25, endFrame],
		[0, -220],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp"
		}
	);

	const translateX = interpolate(
		frame,
		[endFrame - 25, endFrame],
		[0, -620],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp"
		}
	);


	return (
		<AbsoluteFill className="flex justify-center items-center">
			<div className="flex items-center gap-4" style={{
				opacity: opacity,
				scale: scale,
				transform: `translateY(${translateY}px) 
					translateX(${translateX}px)`,
			}}>
				<Img className="w-[170px]" src={staticFile('paragon-logo.svg')} />;
				<div className="text-[170px] font-semibold" >
					Paragon
				</div>
			</div>
		</AbsoluteFill>
	);
}
