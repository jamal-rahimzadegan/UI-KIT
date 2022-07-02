import { useState } from "react";
import { RangeContainer } from "./PriceSliderStyle";

interface Props {
	min?: number;
	max?: number;
	step?: number;
	onChange: ({ min, max }) => any;
}

type RangeAction = "increase" | "decrease";

export default function PriceSlider(props: Props): JSX.Element {
	const { onChange, min = 475, max = 909.09, step = 1 } = props;
	const [currentMin, setMin] = useState(min);
	const [currentMax, setMax] = useState(max);
	const updatedMax = isNaN(currentMax) ? max : currentMax;
	const updatedMin = isNaN(currentMin) ? min : currentMin;

	const updateRange = (e, action: RangeAction) => {
		let value = e.target.value;
		value = parseFloat(value);

		if (action === "increase") {
			if (value < currentMin) return;
			onChange({ max: value, min: currentMin });
			setMax(value);
		}

		if (action === "decrease") {
			if (value > currentMax) return;
			onChange({ max: currentMax, min: value });
			setMin(value);
		}
	};

	return (
		<RangeContainer>
			<p>
				{updatedMin} - {updatedMax}
			</p>
			<input
				value={updatedMin}
				min={min}
				max={max}
				type="range"
				step={step}
				onChange={(e) => updateRange(e, "decrease")}
			/>
			<input
				value={updatedMax}
				min={min}
				max={max}
				type="range"
				step={step}
				onChange={(e) => updateRange(e, "increase")}
			/>
		</RangeContainer>
	);
}
