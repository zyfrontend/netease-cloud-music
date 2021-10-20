import React, { useRef } from "react";
import { Carousel } from "antd";
import Card from "./Card";
export default function CDCard(props) {
	const { data } = props;
	const pageRef = useRef();
	return (
		<div className="cdcard">
			<button
				className="arrow arrow-left sprite_02"
				onClick={(e) => pageRef.current.prev()}
			></button>
			<div className="album">
				<Carousel dots={false} ref={pageRef}>
					{[0, 1].map((item) => {
						return (
							<div key={item} className="page">
								{data.slice(item * 5, (item + 1) * 5).map((iten) => {
									return <Card key={iten.id} data={iten} />;
								})}
							</div>
						);
					})}

				</Carousel>
			</div>
			<button
				className="arrow arrow-right sprite_02"
				onClick={(e) => pageRef.current.next()}
			></button>
		</div>
	);
}
