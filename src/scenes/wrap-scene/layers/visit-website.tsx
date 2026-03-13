import {
	AbsoluteFill, interpolate
} from "remotion";

export const VisitWebsite = ({
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
		[startFrame, startFrame + 20],
		[0, 1],
	);
	return (
		<AbsoluteFill className="flex justify-center items-center">
			<div className="flex flex-col items-center gap-0" style={{
				opacity: opacity,
			}}>
				<div className="text-[60px] font-semibold text-center w-[1500px]" >
					Visit&nbsp;
					<span className="font-bold text-indigo-700" >
						useparagon.com/actionkit
					</span>
				</div>
			</div>
		</AbsoluteFill>
	);
}
