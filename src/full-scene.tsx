import { Sequence } from "remotion";
import { IntroScene } from "./scenes/intro-scene/intro-scene";
import { ActionKitScene } from "./scenes/actionkit-scene/actionkit-scene";
import { WrapScene } from "./scenes/wrap-scene/wrap-scene";


export const FullScene = () => {
	return (
		<div className="font-[Helvetica Neue]">
			<Sequence from={0} durationInFrames={180}>
				<IntroScene />
			</Sequence>
			<Sequence from={180} durationInFrames={380}>
				<ActionKitScene />
			</Sequence>
			<Sequence from={560} durationInFrames={280}>
				<WrapScene />
			</Sequence>
		</div>
	);
}
