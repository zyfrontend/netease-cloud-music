import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
// redux
import {
	getDiscoverRecommendBannersAction,
	getDiscoverRecommendHotAction,
	getDiscoverRecommendNewDvdAction,
	getDiscoverRecommendTopListAction
} from "./store/actionCreators";
// components
import Banner from "@/components/Banner";
import Menu from "@/components/Menu";
import SongList from "@/components/SongList";
import CDCard from "@/components/CDCard";
import TopRanking from "@/components/TopRanking";
// style
import "./style.less";

export default function Recommend() {
	const { banners, hot, newDvd, soaring, newSong, original } = useSelector(
		(state) => ({
			banners: state.getIn(["recommend", "banners"]),
			hot: state.getIn(["recommend", "hot"]),
			newDvd: state.getIn(["recommend", "newDvd"]),
			soaring: state.getIn(["recommend", "soaring"]),
			newSong: state.getIn(["recommend", "newSong"]),
			original: state.getIn(["recommend", "original"]),
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
								return <SongList data={item} key={item.id} />;
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
				<div className="recommend_right">123</div>
			</div>
		</div>
	);
}
