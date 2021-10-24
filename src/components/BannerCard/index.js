import React, { useRef } from "react";
import "./style.less";
import { Carousel } from "antd";

export default function BannerCard(props) {
	const { data } = props;
	const BtnRef = useRef();
	const PAGE_SIZE = 16;
	const datalength = data.length || '';
	// 计算分类页面数量
	const page = Math.ceil(datalength / PAGE_SIZE) || 1;
	function getSize(index) {
		return index * PAGE_SIZE > data.length
			? index - 1 * PAGE_SIZE
			: data.length - 1;
	}
	return (
		<div className="bannercard">
			<div
				onClick={(e) => BtnRef.current.prev()}
				className="arrow arrowleft"
			></div>
			<div className="category_content">
				<Carousel ref={BtnRef} className="dots">
					{Array(page)
						.fill(0)
						.map((_, index) => {
							return (
								<div key={index} className="carousel_page">
									{data.slice(0, getSize(index + 1)).map((item, indexs) => {
										return (
											<div key={item.id} className="carousel_item">
												<div className="item_icon" style={{ background: `url(${item.picWebUrl})` }}></div>
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
		</div>
	)
}

