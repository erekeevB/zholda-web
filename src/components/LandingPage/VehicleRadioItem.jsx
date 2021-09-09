import style from '../../style/LandingPage/VehicleRadioItem.module.css'
import React, {createElement} from "react";

const VehicleRadioItem = ({price, vehicleIndex, i, svg, name}) => {
	return (
		<div className={style.radioItem}>
			<div className={style.radioUpperContainer}>
				{createElement(svg, {className: i === vehicleIndex ? style.selectedVehicleIcon : ''})}
				<div className={style.radioName}>{name}</div>
			</div>
			<div className={style.radioPrice}>{price}</div>
		</div>
	)
}

export default VehicleRadioItem