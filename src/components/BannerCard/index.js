import React, { useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import "./style.less";
import { Carousel } from "antd";

export default function BannerCard() {
	const PAGE_SIZE = 16;
	// 计算分类页面数量
	const page = Math.ceil(djList.length / PAGE_SIZE) || 1;
	function getSize(index) {
		return index * PAGE_SIZE > djList.length
			? index - 1 * PAGE_SIZE
			: djList.length - 1;
	}
	return (
		<div className="bannercard">
			<div
				onClick={(e) => BtnRef.current.prev()}
				className="arrow arrowleft"
			></div>
			<div className="">
				<Carousel dots={{ className: "dots" }} ref={BtnRef}>
					{Array(page)
						.fill(0)
						.map((_, index) => {
							return (
								<div key={index} className="categorypage">
									{djList.slice(0, getSize(index + 1)).map((item, indexs) => {
										return (
											<div key={item.id} className="category-item">
												<div imgUrl={item.picWebUrl} ></div>
												<span>{item.name}</span>
											</div>
										);
									})}
								</div>
							);
						})}
				</Carousel>
			</div>
			<div
				onClick={(e) => BtnRef.current.next()}
				className="arrow arrowright"
			></div>
		</div >
	)
}
