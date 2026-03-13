import { AbsoluteFill, Html5Audio, Sequence, staticFile } from "remotion";
import { IntroScene } from "./scenes/intro-scene/intro-scene";
import { ActionKitScene } from "./scenes/actionkit-scene/actionkit-scene";
import { WrapScene } from "./scenes/wrap-scene/wrap-scene";


export const FullScene = () => {
	return (
		<div className="font-[Helvetica Neue]">
			<AbsoluteFill>
				<Html5Audio volume={0.07} src={staticFile('the-mountain.mp3')} />
			</AbsoluteFill>
			<Sequence from={0} durationInFrames={180}>
				<IntroScene />
			</Sequence>
			<Sequence from={180} durationInFrames={380}>
				<ActionKitScene />
			</Sequence>
			<Sequence from={560} durationInFrames={420}>
				<WrapScene />
			</Sequence>
		</div>
	);
}
