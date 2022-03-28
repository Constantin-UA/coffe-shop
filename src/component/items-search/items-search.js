import './items-search.scss';

const ItemsSearch = (props) => {
	return (
		<div className="search-wraper">
			<label htmlFor="search">Lookiing for</label>
			<input onChange={props.onSearch} type="text" id="search" placeholder="start typing here..." />
		</div>
	);
};

export default ItemsSearch;
