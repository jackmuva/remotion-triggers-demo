import { AbsoluteFill, interpolate, useCurrentFrame, useVideoConfig } from "remotion";
import { RadialBackground } from "../intro-scene/layers/radial-background";
import { ClosingStatement } from "./layers/closing-statement";
import { ActionSpray } from "./layers/action-spray";
import { VisitWebsite } from "./layers/visit-website";

export const WrapScene = () => {
	const frame = useCurrentFrame();
	const { durationInFrames } = useVideoConfig();

	const fadeOpacity = interpolate(
		frame,
		[durationInFrames - 30, durationInFrames],
		[1, 0],
		{
			extrapolateLeft: "clamp",
			extrapolateRight: "clamp",
		}
	);
	return (
		<AbsoluteFill className="bg-white">
			<RadialBackground />
			<div style={{
				opacity: fadeOpacity,
			}}>
				<ClosingStatement frame={frame} startFrame={0} endFrame={262} />
				<ActionSpray frame={frame} startFrame={120} endFrame={325} />
				<VisitWebsite frame={frame} startFrame={262} endFrame={420} />
			</div>
		</AbsoluteFill>
	);

}
