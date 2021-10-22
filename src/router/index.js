import React from "react";
import { Redirect } from "react-router-dom";

// 组件
import Discover from "@/pages/Discover";
// 子页面
import Recommend from "@/pages/Discover/pages/Recommend";
import LeaderBoard from "@/pages/Discover/pages/LeaderBoard";
import SongList from "@/pages/Discover/pages/SongList";
import AnchorStation from "@/pages/Discover/pages/AnchorStation";
const routes = [
	{
		path: "/",
		exact: true,
		render: () => <Redirect to="/discover" />,
	},
	{
		path: "/discover",
		component: Discover,
		routes: [
			{
				path: "/discover",
				exact: true,
				render: () => <Redirect to="/discover/recommend" />,
			},
			{
				path: "/discover/recommend",
				component: Recommend,
			},
			{
				path: "/discover/ranking",
				component: LeaderBoard,
			},
			{
				path: "/discover/songs",
				component: SongList,
			},
			{
				path: "/discover/djradio",
				component: AnchorStation
			}
		],
	},
];

export default routes;
