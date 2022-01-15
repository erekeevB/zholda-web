// import {ReactComponent as Info} from "../../static/icons/info.svg";
import Button from "../Button";
import style from '../../style/LandingPage/VehicleList.module.css'
import useOrderModal from "../../state/useOrderModal";

const VehicleListItem = ({vehicle}) => {
	const {
		name,
		img,
		// description,
		// price
	} = vehicle ?? {}

	const openModal = useOrderModal(state => state.openModal)
	const handleOpenModal = () => openModal({vehicleType: name})

	return (
		<div key={name} className={style.itemContainer}>
			<img className={style.img} src={img} alt={'vehicle'}/>
			<div className={style.nameWrapper}>
				<div className={style.name}>
					<span dangerouslySetInnerHTML={{__html: name}}/>
					{/*<Info/>*/}
					{/*<div className={style.description}>{description}</div>*/}
				</div>
			</div>
			{/*<div className={style.price}>{price}</div>*/}
			<Button onClick={handleOpenModal} className={style.button} type={'secondary'}>Оставить заявку</Button>
		</div>
	)
}

export default VehicleListItem