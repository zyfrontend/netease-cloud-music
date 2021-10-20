import React, { useCallback, useRef, useState } from "react";
import "./style.less";
import { Carousel } from "antd";
export default function Banner(props) {
	const { banners } = props;
	// hooks
	const bannerRef = useRef();
	// state
	const [currentIndex, setCurrentindex] = useState(0);
	// 轮播图回调
	// 返回 当前显示图片的 index
	const bannerChange = useCallback((from, to) => {
		setTimeout(() => {
			setCurrentindex(to);
		}, 0);
	}, []);
	// 其他业务逻辑
	// 背景高斯模糊
	const backgroundImage =
		banners[currentIndex] &&
		banners[currentIndex].imageUrl + "?imageView&blur=40x20";
	return (
		<div className="banner" style={{ background: `url(${backgroundImage})  center center / 6000px` }} >

			<div className="banner_left">
				<Carousel autoplay ref={bannerRef} beforeChange={bannerChange}>
					{banners.map((item, index) => {
						return (
							<div className="banner-item" key={item.imageUrl}>
								<img className="image" src={item.imageUrl} alt="" />
							</div>
						);
					})}
				</Carousel>
			</div>
			<div className="banner_right"></div>
			<div className="banner_btn">
				<button
					className="btn left"
					onClick={(e) => bannerRef.current.prev()}
				></button>
				<button
					className="btn right"
					onClick={(e) => bannerRef.current.next()}
				></button>
			</div>
		</div>
	);
}
