import { AbsoluteFill } from "remotion";

export const RadialBackground = () => {
	return (
		<AbsoluteFill className="flex relative items-center">
			<div className="w-[2700px] h-[1500px] absolute -bottom-[800px] rounded-full  
					bg-radial from-blue-200 from-15% via-indigo-200 via-25% to-white to-50%" />
		</AbsoluteFill>
	);
}

