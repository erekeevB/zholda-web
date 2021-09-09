import style from '../style/LandingPage/Radio.module.css'

const Radio = ({selectedIndex, data, onSelect, renderItem, selectedItemColor, className, radioClassName}) => {
	return (
		<div className={style.container + ' ' + className}>
			{data.map((el, i) => (
				<div
					style={selectedItemColor && {
						borderColor: selectedItemColor
					}}
					className={`${style.item} ${selectedIndex === i ? style.selected : ''} ${radioClassName}`}
					onClick={() => onSelect(el, i)}
				>
					{renderItem(el, i)}
				</div>
			))}
		</div>
	)
}

export default Radio