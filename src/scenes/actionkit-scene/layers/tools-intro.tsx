import { AbsoluteFill } from "remotion";

export const ToolsIntro = ({
	frame,
	startFrame,
	endFrame,
}: {
	frame: number,
	startFrame: number,
	endFrame: number,
}) => {
	return (
		<AbsoluteFill className="relative">
			<div className="absolute top-[200px] left-[100px]">

			</div>
		</AbsoluteFill>
	);
}
