import { Sequence } from "remotion";
import { IntroScene } from "./scenes/1-intro-scene/intro-scene";


export const FullScene = () => {
	return (
		<div className="font-[Helvetica Neue]">
			<Sequence from={0} durationInFrames={100}>
				<IntroScene />
			</Sequence>
		</div>
	);
}
