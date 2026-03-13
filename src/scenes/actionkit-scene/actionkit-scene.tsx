import { AbsoluteFill, useCurrentFrame } from "remotion";
import { RadialBackground } from "../intro-scene/layers/radial-background";
import { PrevContent } from "./layers/prev-content";
import { ActionKitSplit } from "./layers/actionkit-split";
import { ToolsIntro } from "./layers/tools-intro";

export const ActionKitScene = () => {
	const frame = useCurrentFrame();

	return (
		<AbsoluteFill className="bg-white">
			<RadialBackground />
			<PrevContent frame={frame} startFrame={0} endFrame={500} />
			<ActionKitSplit frame={frame} startFrame={50} endFrame={500} />
			<ToolsIntro frame={frame} startFrame={100} endFrame={500} />
			{/* <TriggersIntro frame={frame} startFrame={20} endFrame={500} /> */}
		</AbsoluteFill>
	);
}
