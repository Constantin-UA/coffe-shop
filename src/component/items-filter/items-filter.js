import './items-filter.scss';

const ItemsFilter = (props) => {
	const buttonsData = [
		{ name: 'brazil', label: 'Brazil' },
		{ name: 'kenya', label: 'Kenya' },
		{ name: 'columbia', label: 'Columbia' },
	];

	const buttons = buttonsData.map(({ name, label }) => {
		return (
			<button type="button" key={name} onClick={() => props.onFilterSearch(name)}>
				{label}
			</button>
		);
	});
	return (
		<div className="items-filter">
			<span>Or Filter</span>
			{buttons}
		</div>
	);
};

export default ItemsFilter;
