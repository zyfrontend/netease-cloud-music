import React from "react"
import { Redirect } from "react-router-dom"

// // 组件
// import Discover from "@/pages/Discover"
// // 子页面
// import Recommend from "@/pages/Discover/pages/Recommend"
// import LeaderBoard from "@/pages/Discover/pages/LeaderBoard"
// import SongList from "@/pages/Discover/pages/SongList"
// import AnchorStation from "@/pages/Discover/pages/AnchorStation"
// import MusicList from "@/pages/Discover/pages/MusicList"

const Discover = React.lazy(() => import("@/pages/Discover"))
const Recommend = React.lazy(() => import("@/pages/Discover/pages/Recommend"))
const LeaderBoard = React.lazy(() =>
  import("@/pages/Discover/pages/LeaderBoard")
)
const SongList = React.lazy(() => import("@/pages/Discover/pages/SongList"))
const AnchorStation = React.lazy(() =>
  import("@/pages/Discover/pages/AnchorStation")
)
const MusicList = React.lazy(() => import("@/pages/Discover/pages/MusicList"))

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
        component: AnchorStation,
      },
      {
        path: "/discover/musiclist/:id",
        component: MusicList,
      },
    ],
  },
]

export default routes
