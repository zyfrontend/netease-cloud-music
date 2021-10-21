import React from "react";
import { getSizeImage, getCount } from "@/utils/format";
import "./style.less";
export default function SongList(props) {
	const { data } = props;
	return (
		<div className="songlist">
			<div className="songlist_cover">
				<img src={getSizeImage(data.picUrl || data.coverImgUrl, 140)} alt="" />
				<div className="songlist_cover_info">
					<div className="songlist_cover_info_left">
						<span className="sprite_icon"></span>
						{getCount(data.playCount)}
					</div>
					<span className="sprite_icon songlist_cover_info_right"></span>
				</div>
			</div>
			<span className="songlist_title">{data.name}</span>
		</div>
	);
}
