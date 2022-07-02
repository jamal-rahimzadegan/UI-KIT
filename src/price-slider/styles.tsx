import styled from "styled-components";

const RangeContainer = styled.div<any>`
	display: flex;
	position: relative;
	direction: ltr;
	width: 100%;
	height: 70px;
	text-align: center;

	input[type="range"] {
		position: absolute;
		width: 100%;
		left: 0;
		bottom: 0;
		appearance: none;

		::-webkit-slider-runnable-track {
			width: 100%;
			height: 8px;
			cursor: pointer;
			animate: 0.2s;
			background: ${({ barColor = "grey" }) => barColor};
			border-radius: 1px;
			box-shadow: none;
			border: 0;
			margin-bottom: 10px;
		}

		::-webkit-slider-thumb {
			z-index: 2;
			position: relative;
			box-shadow: 0px 0px 0px #000;
			height: 18px;
			width: 18px;
			border-radius: 25px;
			background: ${({ thumbColor = "black" }) => thumbColor};
			cursor: pointer;
			-webkit-appearance: none;
			bottom: 100%;
			top: -5px;
		}

		:focus {
			outline: none;
		}
	}
`;

export { RangeContainer };
