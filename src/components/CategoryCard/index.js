import React from "react";
import {
	changeSongsCategoryNameAction,
	getSongsCategoryListAction
} from "@/pages/Discover/pages/SongList/store/actionCreators";
import "./style.less";
import { useDispatch } from "react-redux";
export default function CategoryCard(props) {
	const { category } = props;
	const dispatch = useDispatch();
	const selectCategory = (name) => {
		dispatch(changeSongsCategoryNameAction(name));
		dispatch(getSongsCategoryListAction(0));
	}
	return (
		<div className="category_card">
			<div className="arrow sprite_icon"></div>
			<div className="all">
				<span className="link" onClick={e => selectCategory("全部")}>全部风格</span>
			</div>
			<div className="category">
				{
					category.map((item, index) => {
						return (
							<dl key={item.name} className={"item" + index}>
								<dt>
									<i className="icon sprite_icon2"></i>
									<span>{item.name}</span>
								</dt>
								<dd>
									{
										item.subs.map(sItem => {
											return (
												<div className="item" key={sItem.name}>
													<span className="link" onClick={e => selectCategory(sItem.name)}>{sItem.name}</span>
													<span className="divider">|</span>
												</div>
											)
										})
									}
								</dd>
							</dl>
						)
					})
				}
			</div>
		</div>
	)
}
