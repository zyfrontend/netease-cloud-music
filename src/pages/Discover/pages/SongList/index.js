import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
	getSongsCategoryAction
} from "./store/actionCreators";

import "./style.less";

export default function SongsList() {
	const { songsCategory } = useSelector((state) => ({
		songsCategory: state.getIn(["songs", "songsCategory"])
	}), shallowEqual)
	const [showCategory, setShowCategory] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSongsCategoryAction())
	}, [dispatch])
	const allName = (songsCategory.all && songsCategory.all.name) || '';
	return (
		<div className="songslist">
			<div className="songslist_header">
				<div>
					<span>{allName}</span>
					<button className="" onClick={e => setShowCategory(!showCategory)}>
						<span>选择分类</span>
						<i className="sprite_icon2"></i>
					</button>
					{showCategory ? "123" : null}
				</div>
				<div></div>
			</div>
		</div>
	)
}
