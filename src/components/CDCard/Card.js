import React from "react";
import { getSizeImage } from "@/utils/format"
import "./style.less";
export default function Card(props) {
	const { data } = props;
	return (
		<div className="card">
			<div className="cd_box">
				<img src={getSizeImage(data.picUrl, 100)} alt="" />
				<a href="/todo" className="cover image_cover"> </a>
			</div>
			<div className="card_name">{data.name}</div>
			<div className="card_name">{data.artist.name}</div>
		</div>
	);
}
