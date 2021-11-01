import { getSizeImage, formatYearMonthDay } from "@/utils/format";
import React from "react";
import { addMusicListToPlayerList } from "@/components/PlayerBar/store/actionCreators";
import "./style.less";
import { useDispatch } from "react-redux";
export default function DetailHeader(props) {

	const dispatch = useDispatch();
	const { headerData, listId } = props;
	const creator = (headerData.creator && headerData.creator) || '';
	const tags = (headerData.tags && headerData.tags) || [];
	return (
		<div className="detail_header">
			<div className="header_img">
				<img src={getSizeImage(headerData.coverImgUrl, 200)} alt="" />
			</div>

			<div className="header_info">
				<div className="header_info_title">
					<span className="sprite_icon2 title_icon"></span>
					<h2>{headerData.name}</h2>
				</div>
				<div className="header_info_author">
					<img src={getSizeImage(creator.avatarUrl, 30)} alt="" />
					<a href="#/">{creator.nickname}</a>
					<span>{formatYearMonthDay(headerData.createTime)}</span>
				</div>
				<div className="header_info_btn">
					<div className="sprite_button info_btn btn_player" onClick={() => { dispatch(addMusicListToPlayerList(listId)) }}>
						<span className="sprite_button btn_player_icon"></span>
						播放
						<span className="sprite_button btn_add"></span>
					</div>
					<div className="info_btn sprite_button btn_collect">
						({headerData.subscribedCount})
						<span className="sprite_button"></span>
					</div>
					<div className="sprite_button info_btn btn_share">
						({headerData.shareCount})
						<span className="sprite_button"></span>
					</div>
					<div className="sprite_button info_btn btn_download">
						下载
						<span className="sprite_button"></span>
					</div>
					<div className="sprite_button info_btn btn_comment">
						({headerData.commentCount})
						<span className="sprite_button"></span>
					</div>
				</div>
				<div className="header_info_tag">
					<span>标签:</span>
					{
						tags.map((item) => {
							return (
								<span className="header_tag" key={item}>{item}</span>
							)
						})
					}
				</div>
				<div>介绍: {headerData.description}</div>
			</div>
		</div>
	)
}
