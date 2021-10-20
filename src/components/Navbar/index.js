import React from "react";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { headerLinks } from "./links";
import "./style.less";

export default function NavBar() {
	const showSelectItem = (item, index) => {
		if (index < 3) {
			return (
				<NavLink to={item.link}>
					{item.title}
					<i className="sprite_01 icon"></i>
				</NavLink>
			);
		} else {
			return <a href={item.link}>{item.title}</a>;
		}
	};
	return (
		<div className="navbar">
			<div className="nav_left">
				<a href="#/" className="logo sprite_01"><span></span></a>
				<div className="item_list">
					{headerLinks.map((item, index) => {
						return (
							<div key={item.title} className="item">
								{showSelectItem(item, index)}
							</div>
						);
					})}
				</div>
			</div>
			<div className="nav_right">
				<Input
					className="search"
					placeholder="音乐/视频/电台/用户"
					prefix={<SearchOutlined />}
				/>
				<button className="center">创作者中心</button>
				<button className="sign">登录</button>
			</div>
			<div className="border"></div>
		</div>
	);
}
