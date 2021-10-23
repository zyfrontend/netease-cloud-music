import BannerCard from "@/components/BannerCard";
import React, { useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
	getAnchorStationCategoryListAction
} from "./store/actionCreators";
import BannerCards from "@/components/BannerCard"
import Menu from "@/components/Menu";
import "./style.less";
export default function AnchorStation() {
	const { anchorStationCategoryList } = useSelector((state) => ({
		anchorStationCategoryList: state.getIn(["djradio", "anchorStationCategoryList"])
	}), shallowEqual)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getAnchorStationCategoryListAction());
	}, [dispatch])
	return (
		<div className="anchorstation">
			<BannerCards data={anchorStationCategoryList} />
			<div className="programme">
				<div className="recommend_menu">
					<Menu title="推荐节目" more="更多" />
					<div className="menu_body"></div>
				</div>
				<div className="toplist_menu">
					<Menu title="节目排行榜" more="更多" />
					<div className="menu_body"></div>
				</div>
			</div>
		</div>
	)
}
