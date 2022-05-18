import { useRef, useEffect } from 'react';
interface dataType {
	xValue: string;
	yValue: number;
}

const JobPage = () => {
	const lineChart = useRef(null);
	const tooltipRef = useRef(null);

	const data = [0, 6, 8, 7, 5, 6, 5];

	const contex = lineChart.current;
	const tipCanvas = lineChart.current;

	// const canVas = document.querySelector('canvas') as HTMLCanvasElement;

	const createGraph = () => {
		if (contex) {
			const context = contex.getContext('2d');
			if (context) {
				const xPadding = 30;
				const yPadding = 30;

				const graphTop = 25;
				const graphBottom = 375;
				const graphLeft = 25;
				const graphRight = 475;

				const graphHeight = 350;
				const graphWIdth = 450;

				const dataLength = data.length;

				const getMaxYValue = (): number => {
					return Math.max(...data.map((a) => a));
				};

				const HighValue: number = getMaxYValue();

				context.clearRect(0, 0, 500, 400);
				context.font = '16px';
				context.beginPath();
				context.moveTo(graphLeft, graphBottom);
				context.lineTo(graphRight, graphBottom);
				context.lineTo(graphRight, graphTop);
				context.stroke();

				context.beginPath();
				context.strokeStyle = '#BBB';
				context.moveTo(graphLeft, graphTop);
				context.lineTo(graphRight, graphTop);
				// draw reference value for hours
				context.fillText(HighValue, graphRight + 15, graphTop);
				context.stroke();

				context.beginPath();
				context.moveTo(graphLeft, (graphHeight / 4) * 3 + graphTop);
				context.lineTo(graphRight, (graphHeight / 4) * 3 + graphTop);
				// draw reference value for hours
				context.fillText(HighValue / 4, graphRight + 15, (graphHeight / 4) * 3 + graphTop);
				context.stroke();

				// draw reference line
				context.beginPath();
				context.moveTo(graphLeft, graphHeight / 2 + graphTop);
				context.lineTo(graphRight, graphHeight / 2 + graphTop);
				// draw reference value for hours
				context.fillText(HighValue / 2, graphRight + 15, graphHeight / 2 + graphTop);
				context.stroke();

				// draw reference line
				context.beginPath();
				context.moveTo(graphLeft, graphHeight / 4 + graphTop);
				context.lineTo(graphRight, graphHeight / 4 + graphTop);
				// draw reference value for hours
				context.fillText((HighValue / 4) * 3, graphRight + 15, graphHeight / 4 + graphTop);
				context.stroke();

				// draw titles
				context.fillText('Day of the week', graphRight / 3, graphBottom + 50);
				context.fillText('Hours', graphRight + 30, graphHeight / 2);

				context.beginPath();
				context.lineJoin = 'round';
				context.strokeStyle = 'black';

				context.moveTo(graphLeft, graphHeight - (data[0] / HighValue) * graphHeight + graphTop);
				// draw reference value for day of the week
				context.fillText('1', 15, graphBottom + 25);
				for (let i = 1; i < dataLength; i++) {
					context.lineTo(
						(graphRight / dataLength) * i + graphLeft,
						graphHeight - (data[i] / HighValue) * graphHeight + graphTop
					);
					// draw reference value for day of the week
					context.fillText(i + 1, (graphRight / dataLength) * i, graphBottom + 25);
				}
				context.stroke();
			}
		}
	};

	useEffect(() => {
		createGraph();
	}, []);

	return (
		<div>
			<canvas ref={lineChart} width={'350px'} height={'400px'}>
				i ma chart
			</canvas>
			<canvas ref={tooltipRef} width={'100px'} height={'25px'}></canvas>
		</div>
	);
};

export default JobPage;
