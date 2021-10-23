import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
	getAnchorStationCategoryListAction,
	getAnchorStationRecommendProgramAction,
	getAnchorStationTopListAction
} from "./store/actionCreators";
import BannerCards from "@/components/BannerCard"
import Menu from "@/components/Menu";
import "./style.less";
import { getSizeImage } from "@/utils/format";
export default function AnchorStation() {
	const { anchorStationCategoryList, recommendProgram, programTopList } = useSelector((state) => ({
		anchorStationCategoryList: state.getIn(["djradio", "anchorStationCategoryList"]),
		recommendProgram: state.getIn(["djradio", "recommendProgram"]),
		programTopList: state.getIn(["djradio", "programTopList"])
	}), shallowEqual)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAnchorStationCategoryListAction());
		dispatch(getAnchorStationRecommendProgramAction());
		dispatch(getAnchorStationTopListAction(10));
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
											<div>
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
											{item.rank}
										</div>
										<div><img src={getSizeImage(item.program.coverUrl, 50)} alt="" /></div>
										<div className="top_list_info">
											<div>{item.program.mainSong.name || ''}</div>
											<div>{item.program.radio.name || ''}</div>
										</div>
										<div>{item.program.listenerCount}</div>
									</div>
								)
							})
						}
					</div>
				</div>
			</div>
		</div>
	)
}
