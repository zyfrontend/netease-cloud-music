import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { getLeaderBoardTopListAction, changeLeaderBoardTopListIndexAction, getLeaderBoardTopListDetailAction } from "./store/actionCreators";
import { getPlayerMusicDetailAction } from "@/components/PlayerBar/store/actionCreators";
import { getSizeImage, formatMonthDay, formatMinuteSecond } from "@/utils/format";
import Operate from "@/components/Operate";
import "./style.less";

export default function LeaderBoard() {
	const { topList, topListIndex, topListDetail } = useSelector((state) => ({
		topList: state.getIn(["ranking", "topList"]),
		topListIndex: state.getIn(["ranking", "topListIndex"]),
		topListDetail: state.getIn(["ranking", "topListDetail"]),
	}), shallowEqual)
	const dispatch = useDispatch();
	const id = (topList[topListIndex] && topList[topListIndex].id);
	useEffect(() => {
		dispatch(getLeaderBoardTopListAction())
		if (!id) return;
		dispatch(getLeaderBoardTopListDetailAction(id));
	}, [dispatch, id])
	const handleItemClick = (index) => {
		dispatch(changeLeaderBoardTopListIndexAction(index));
	}
	const playerMusic = (id) => {
		dispatch(getPlayerMusicDetailAction(id))
	}
	const listName = (topListDetail.playlist && topListDetail.playlist.name) || '';
	const coverImgUrl = (topListDetail.playlist && topListDetail.playlist.coverImgUrl) || '';
	const updateTime = (topListDetail.playlist && topListDetail.playlist.updateTime) || '';
	const subscribedCount = (topListDetail.playlist && topListDetail.playlist.subscribedCount) || '';
	const shareCount = (topListDetail.playlist && topListDetail.playlist.shareCount) || '';
	const commentCount = (topListDetail.playlist && topListDetail.playlist.commentCount) || '';
	const playCount = (topListDetail.playlist && topListDetail.playlist.playCount) || '';
	const tracks = (topListDetail.playlist && topListDetail.playlist.tracks) || [];
	// const privileges = (topListDetail && topListDetail.privileges) || '';
	return (
		<div className="leaderboard">
			<div className="leaderboard_left">
				{
					topList.map((item, index) => {
						let header;
						if (index === 0 || index === 4) {
							header = <div>{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
						}
						return (
							<div key={item.id}>
								<div className="item_header">{header}</div>
								<div className={classNames("item_list")} onClick={e => handleItemClick(index)}>
									<img src={getSizeImage(item.coverImgUrl, 40)} alt="" />
									<div>
										<div>{item.name}</div>
										<div className="update_time">{item.updateFrequency}</div>
									</div>
								</div>
							</div>
						)
					})
				}
			</div>
			<div className="leaderboard_right">
				<div className="leaderboard_right_header">
					<div className="header_coverImg">
						<img src={getSizeImage(coverImgUrl, 120)} alt="" />
					</div>
					<div className="header_info">
						<h2>{listName}</h2>
						<div className="header_update_time">
							更新时间:{formatMonthDay(updateTime)}
						</div>
						<div className="header_btn">
							<Operate favorTitle={`(${subscribedCount})`}
								shareTitle={`(${shareCount})`}
								downloadTitle="下载"
								commentTitle={`(${commentCount})`} />
						</div>
					</div>
				</div>
				<div className="leaderboard_right_list">
					<div className="leaderboard_right_list_header">
						<div className="list_length">
							<h3>歌曲列表</h3>
							<span>{(tracks.length) || ''}首歌</span>
						</div>
						<span>播放:{playCount}次</span>
					</div>
					<div className="play_list_table">
						<div className="play-list">
							<table>
								<thead>
									<tr className="header">
										<th className="ranking"></th>
										<th className="title">标题</th>
										<th className="duration">时长</th>
										<th className="singer">歌手</th>
									</tr>
								</thead>
								<tbody>
									{
										tracks.map((item, index) => {
											return (
												<tr className="" key={item.id}>
													<td>
														<div className="rank-num">
															<span className="num">{index + 1}</span>
															<span className="new sprite_icon2"></span>
														</div>
													</td>
													<td>
														<div className="song-name">
															{
																index < 3 ?
																	(<img src={getSizeImage(item.al.picUrl, 50)} alt="" />) : null
															}
															<span className="play sprite_table" onClick={() => { playerMusic(item.id) }}></span>
															<span className="name">{item.name}</span>
														</div>
													</td>

													<td>{formatMinuteSecond(item.dt)}</td>
													<td>{item.ar[0].name}</td>
												</tr>
											)
										})
									}
								</tbody>
							</table>
						</div>
					</div>
				</div>
				<div></div>
			</div>
		</div>
	)
}
