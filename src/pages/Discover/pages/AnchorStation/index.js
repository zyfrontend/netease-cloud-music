import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
	getAnchorStationCategoryListAction,
	getAnchorStationRecommendProgramAction,
	getAnchorStationTopListAction,
	getAnchorStationRecommendMusicAction
} from "./store/actionCreators";
import BannerCards from "@/components/BannerCard"
import Menu from "@/components/Menu";
import "./style.less";
import { getSizeImage } from "@/utils/format";
export default function AnchorStation() {
	const { anchorStationCategoryList, recommendProgram, programTopList, recommendMusics } = useSelector((state) => ({
		anchorStationCategoryList: state.getIn(["djradio", "anchorStationCategoryList"]),
		recommendProgram: state.getIn(["djradio", "recommendProgram"]),
		programTopList: state.getIn(["djradio", "programTopList"]),
		recommendMusics: state.getIn(["djradio", "recommendMusics"]),

	}), shallowEqual)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAnchorStationCategoryListAction());
		dispatch(getAnchorStationRecommendProgramAction());
		dispatch(getAnchorStationTopListAction(10));
		dispatch(getAnchorStationRecommendMusicAction(2));
	}, [dispatch])
	return (
		<div className="anchorstation">
			<BannerCards data={anchorStationCategoryList} />
			<div className="programme">
				<div className="recommend_menu">
					<Menu title="推荐节目" more="更多" />
					<div className="menu_body">
						{
							recommendProgram.map((item) => {
								return (
									<div key={item.id} className="program_item">
										<div>
											<img src={getSizeImage(item.blurCoverUrl || '', 40)} alt="" />
										</div>
										<div className="program_info">
											<div className="program_name">{item.name}</div>
											<div className="radio_name">
												{item.radio.name || ''}
											</div>
										</div>
										<div className="item_channels">{item.channels || ''}</div>
									</div>
								)
							})
						}
					</div>
				</div>
				<div className="toplist_menu">
					<Menu title="节目排行榜" more="更多" />
					<div className="menu_body">
						{
							programTopList.map((item) => {
								return (
									<div key={item.id} className="top_list_item">
										<div className="item_rank">
											<span>
												{item.rank}
											</span>
											<img src={getSizeImage(item.program.coverUrl, 40)} alt="" />
										</div>
										<div className="top_list_info">
											<div className="info_name">{item.program.mainSong.name || ''}</div>
											<div className="radio_name">{item.program.radio.name || ''}</div>
										</div>
										<div>{item.program.listenerCount}</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
			<div>
				<Menu title="音乐电台-推荐" more="更多" />
				<div className="recommend_music">
					{recommendMusics.map((item) => {
						return (
							<div key={item.id} className="recommend_music_item">
								<img src={getSizeImage(item.intervenePicUrl, 90)} alt="" />
								<div>
									<h1>{item.name}</h1>
									{item.rcmdtext}
								</div>
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}
