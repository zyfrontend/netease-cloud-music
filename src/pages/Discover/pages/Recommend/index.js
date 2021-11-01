import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// redux
import {
	getDiscoverRecommendBannersAction,
	getDiscoverRecommendHotAction,
	getDiscoverRecommendNewDvdAction,
	getDiscoverRecommendTopListAction,
	getDiscoverRecommendHotSingerAction,
	getDiscoverRecommendHotDJAction
} from "./store/actionCreators";
// components
import Banner from "@/components/Banner";
import Menu from "@/components/Menu";
import SongList from "@/components/SongList";
import CDCard from "@/components/CDCard";
import TopRanking from "@/components/TopRanking";
// style
import "./style.less";
import { getSizeImage } from "@/utils/format";

export default function Recommend() {
	const { banners, hot, newDvd, soaring, newSong, original, hotSinger, radioStation } = useSelector(
		(state) => ({
			banners: state.getIn(["recommend", "banners"]),
			hot: state.getIn(["recommend", "hot"]),
			newDvd: state.getIn(["recommend", "newDvd"]),
			soaring: state.getIn(["recommend", "soaring"]),
			newSong: state.getIn(["recommend", "newSong"]),
			original: state.getIn(["recommend", "original"]),
			hotSinger: state.getIn(["recommend", "hotSinger"]),
			radioStation: state.getIn(["recommend", "radioStation"])
		}),
		shallowEqual
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getDiscoverRecommendBannersAction());
		dispatch(getDiscoverRecommendHotAction(8));
		dispatch(getDiscoverRecommendNewDvdAction(10));
		dispatch(getDiscoverRecommendTopListAction(0));
		dispatch(getDiscoverRecommendTopListAction(2));
		dispatch(getDiscoverRecommendTopListAction(3));
		dispatch(getDiscoverRecommendHotSingerAction(5));
		dispatch(getDiscoverRecommendHotDJAction(5));
	}, [dispatch]);

	return (
		<div className="recommend">
			<Banner banners={banners} />
			<div className="content">
				<div className="recommend_left">
					<div className="hot_recommend">
						<Menu
							title="热门推荐"
							item={["华语", "流行", "摇滚", "民遥", "电子"]}
							more="更多"
						/>
						<div className="recommend_song_list">
							{hot.map((item) => {
								return (
									<SongList data={item} key={item.id} />
								)

							})}
						</div>
					</div>

					<div>
						<Menu title="新碟上架" more="更多" />
						<CDCard data={newDvd} />
					</div>
					<div>
						<Menu title="榜单" more="更多" />
						<div className="recommend_toplist">
							<TopRanking data={soaring} />
							<TopRanking data={newSong} />
							<TopRanking data={original} />
						</div>
					</div>
				</div>
				<div className="recommend_right">
					<div className="sprite_02 login_div">
						<span>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</span>
						<div className="sprite_02 login_btn">用户登录</div>
					</div>
					<div className="hot_singer">
						<div className="hot_singer_title">
							<span>热门歌手</span>
							<span>查看全部</span>
						</div>
						{
							hotSinger.map((item) => {
								return (
									<div className="hot_singer_item" key={item.name}>
										<img src={getSizeImage(item.picUrl, 70)} alt="" />
										<div>
											{item.name}
										</div>
									</div>
								)
							})
						}
						<div className="apply_musician">
							申请成为音乐人
						</div>
					</div>
					<div className="radio_station">
						<div className="radion_station_title">
							<span>热门主播</span>
						</div>
						{
							radioStation.map((item) => {
								return (
									<div className="radio_station_item" key={item.nickName}>
										<img src={getSizeImage(item.avatarUrl, 70)} alt="" />
										<div>
											{item.nickName}
										</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</div>
	);
}
