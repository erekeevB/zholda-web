import style from '../style/SelecedTab.module.css'

const SelectTab = ({tabs, selectedTab, onSelect, className}) => {
	return (
		<div className={style.container + ' ' + className}>
			{tabs.map(el => (
				<div
					key={el}
					onClick={() => onSelect(el)}
					className={style.tab + ' ' + (el === selectedTab && style.selected)}
				>
					{el}
				</div>
			))}
		</div>
	)
}

export default SelectTab