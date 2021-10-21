import React, { useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import {
	getSongsCategoryAction,
	getSongsCategoryListAction,
	changeSongsCategoryNameAction
} from "./store/actionCreators";
import CategoryCard from "@/components/CategoryCard"
import SongCard from "@/components/SongList"
import Pagination from "@/components/Pagination"
import "./style.less";
import { useLocation } from "react-router-dom";

export default function SongsList() {
	const { songsCategory, songsCategoryName, songsCategoryList } = useSelector((state) => ({
		songsCategory: state.getIn(["songs", "songsCategory"]),
		songsCategoryName: state.getIn(["songs", "songsCategoryName"]),
		songsCategoryList: state.getIn(["songs", "songsCategoryList"]),
	}), shallowEqual)
	const [showCategory, setShowCategory] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const songslistmap = songsCategoryList.playlists || [];
	const dispatch = useDispatch();
	// const songList = songsCategoryList.playlists || [];
	const total = songsCategoryList.total || 0;
	const cat = useLocation().cat;
	useEffect(() => {
		dispatch(changeSongsCategoryNameAction(cat))
	}, [dispatch, cat])
	useEffect(() => {
		dispatch(getSongsCategoryAction())
		dispatch(getSongsCategoryListAction(0))
	}, [dispatch])
	function onPageChange(page, pageSize) {
		setCurrentPage(page);
		dispatch(getSongsCategoryListAction(page));
	}
	return (
		<div className="songslist">
			<div className="songslist_header">
				<div>
					<span className="category_title">{songsCategoryName ? songsCategoryName : "全部"}</span>
					<button className="category_btn" onClick={e => setShowCategory(!showCategory)}>
						<span>选择分类</span>
						<i className="sprite_icon2"></i>
					</button>
					{showCategory ? <CategoryCard category={songsCategory} /> : null}
				</div>
				<div className="songslist_hot">热门</div>
			</div>
			<div className="songslist_list">
				{
					songslistmap.map((item) => {
						return (
							<SongCard key={item.id} data={item} />
						)
					})
				}
				<Pagination
					currentPage={currentPage}
					total={total}
					pageSize="35"
					onPageChange={onPageChange}
				/>
			</div>
		</div>
	)
}
