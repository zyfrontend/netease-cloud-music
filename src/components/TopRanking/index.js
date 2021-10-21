import React from "react";
import { getPlayerMusicDetailAction } from "../PlayerBar/store/actionCreators";
import { getSizeImage } from "@/utils/format";
import "./style.less";
import { useDispatch } from "react-redux";
export default function TopRanking(props) {
	const { data } = props;
	const { tracks = [] } = data;
	const dispatch = useDispatch();
	const addMusic = (id) => {
		dispatch(getPlayerMusicDetailAction(id));
	}
	return (
		<div className="topranking">
			<div className="header">
				<div className="image">
					<img src={getSizeImage(data.coverImgUrl)} alt="" />
					<a href="/todo" className="image_cover">
						ranking
					</a>
				</div>
				<div className="info">
					<a href="/todo">{data.name}</a>
					<div>
						<button className="btn play sprite_02"></button>
						<button className="btn favor sprite_02"></button>
					</div>
				</div>
			</div>
			<div className="list">
				{tracks.slice(0, 10).map((item, index) => {
					return (
						<div key={item.id} className="list-item">
							<div className="rank">{index + 1}</div>
							<div className="info">
								<span className="name">{item.name}</span>
								<div className="operate">
									<div style={{ display: "flex" }}>
										<button className="btn sprite_02 play" onClick={e => addMusic(item.id)}></button>
										<button className="btn sprite_icon2 addto"></button>
										<button className="btn sprite_02 favor"></button>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="footer">
				<a href="/todo">查看全部 &gt;</a>
			</div>
		</div>
	);
}
