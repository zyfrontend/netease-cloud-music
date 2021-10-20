import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getLeaderBoardTopListAction } from "./store/actionCreators";
import "./style.less";

export default function LeaderBoard() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getLeaderBoardTopListAction())
	}, [dispatch])
	return (
		<div className="leaderboard">
			<div className="leaderboard_left">
				123
			</div>
			<div className="leaderboard_right"></div>
		</div>
	)
}
