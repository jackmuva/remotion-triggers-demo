import { AbsoluteFill, useCurrentFrame } from "remotion";
import { RadialBackground } from "./layers/radial-background";
import { ParagonLogo } from "./layers/paragon-logo";
import { TriggerIntro } from "./layers/trigger-intro";

export const IntroScene = () => {
	const frame = useCurrentFrame();

	return (
		<AbsoluteFill className="bg-white">
			<RadialBackground />
			<ParagonLogo frame={frame} startFrame={0} endFrame={110} />
			<TriggerIntro frame={frame} startFrame={110} endFrame={180} />
		</AbsoluteFill >
	);
};



