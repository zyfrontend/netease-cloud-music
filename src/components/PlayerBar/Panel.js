import React, { useRef, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";
import { formatDate, scrollTo } from "@/utils/format"
import "./style.less";
export default function Panel() {
	const { musicList, musicDetail, musicIndex, musicLyricList, musicLyricIndex } = useSelector((state) => ({
		musicList: state.getIn(["player", "musicList"]),
		musicDetail: state.getIn(["player", "musicDetail"]),
		musicIndex: state.getIn(["player", "musicIndex"]),
		musicLyricList: state.getIn(["player", "musicLyricList"]),
		musicLyricIndex: state.getIn(["player", "musicLyricIndex"])
	}), shallowEqual);
	const lyricRef = useRef();
	useEffect(() => {
		if (musicLyricIndex > 0 && musicLyricIndex < 3) return;
		scrollTo(lyricRef.current, (musicLyricIndex - 3) * 32, 300);
	}, [musicLyricIndex]);
	return (
		<div className="panel">
			<div className="player_panel panel_header">
				<div className="panel_header_left">
					<span>播放列表({musicList.length})</span>
					<div>
						<span>收藏全部</span>
						<span>清除</span>
					</div>
				</div>
				<div className="panel_header_right">
					{musicDetail.name}
				</div>
			</div>
			<div className="player_panel panel_body">
				<div className="panel_body_left">
					{
						musicList.map((item, index) => {
							return (
								<div className="panel_body_left_card" key={item.id}>
									<div>
										{(musicIndex === index) ? <span className="pannel_triangle station triangle"></span> : <span className="station"></span>}
										<span className="item_test_name">{item.name}</span>
									</div>
									<div className="panel_body_left_card_info">
										<span>{item.ar[0].name}</span>
										<div>
											<span>{formatDate(item.dt, "mm:ss")}</span>
											<span></span>
										</div>
									</div>
								</div>
							)
						})
					}
				</div>
				<div className="panel_body_right" ref={lyricRef} >
					<div className="lrc-content">
						{
							musicLyricList.map((item, index) => {
								return (
									<div
										key={index}
										className={classNames("lrc-item", { "active": index === musicLyricIndex })}
									> {item.content}</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</div >
	)
}
