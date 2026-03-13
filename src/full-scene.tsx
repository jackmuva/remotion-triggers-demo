import { Sequence } from "remotion";
import { IntroScene } from "./scenes/intro-scene/intro-scene";
import { ActionKitScene } from "./scenes/actionkit-scene/actionkit-scene";


export const FullScene = () => {
	return (
		<div className="font-[Helvetica Neue]">
			<Sequence from={0} durationInFrames={180}>
				<IntroScene />
			</Sequence>
			<Sequence from={180} durationInFrames={300}>
				<ActionKitScene />
			</Sequence>
		</div>
	);
}
