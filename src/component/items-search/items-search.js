import './items-search.scss';

const ItemsSearch = () => {
	return (
		<div className="search-wraper">
			<label htmlFor="search">Lookiing for</label>
			<input type="text" id="search" placeholder="start typing here..." />
		</div>
	);
};

export default ItemsSearch;
