import "./index.css";
import { Composition } from "remotion";
import { FullScene } from "./full-scene";

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="actionkit-triggers"
				durationInFrames={150}
				fps={30}
				width={1920}
				height={1080}
				component={FullScene}
			/>
		</>
	);
}
