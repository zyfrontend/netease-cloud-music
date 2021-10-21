import React from "react";
import { Pagination } from "antd";
import "./style.less";

export default function Paginations(props) {
	const { currentPage, total, onPageChange } = props;

	function itemRender(current, type, originalElement) {
		if (type === 'prev') {
			return <button className="control prev"> &lt; </button>;
		}
		if (type === 'next') {
			return <button className="control next"> &gt;</button>;
		}
		return originalElement;
	}
	return (
		<div className="pagination">
			<Pagination className="pagination"
				size="small"
				current={currentPage}
				defaultCurrent={1}
				total={total}
				pageSize={35}
				showSizeChanger={false}
				itemRender={itemRender}
				onChange={onPageChange} />
		</div>
	)
}
