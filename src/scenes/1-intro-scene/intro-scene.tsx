import {
	AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig,
	Img, staticFile
} from "remotion";

export const IntroScene = () => {
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();

	const opacity = interpolate(
		frame,
		[0, 20, durationInFrames - 20, durationInFrames],
		[0, 1, 1, 0],
	);

	return (
		<AbsoluteFill className="bg-white">
			<AbsoluteFill className="flex relative items-center">
				<div className="border size-[2000px] absolute -bottom-[1000px] rounded-full  
					bg-radial from-blue-200 from-15% via-indigo-200 via-25% to-white to-50%" />
			</AbsoluteFill>
			<AbsoluteFill className="flex justify-center items-center">
				<div className="flex items-center gap-4" style={{ opacity: opacity }}>
					<Img className="w-[200px]" src={staticFile('paragon-logo.svg')} />;
					<div className="text-[200px] font-semibold" >
						Paragon
					</div>
				</div>
			</AbsoluteFill>
		</AbsoluteFill >
	);
};
