import {useDisableBodyScroll} from "../utils/useDisabledBodyScroll";
import useOrderModal from "../state/useOrderModal";
import style from '../style/OrderModal.module.css'
import {ReactComponent as Close} from "../static/icons/close.svg";
import {useState} from "react";
import SelectTab from "./SelectTab";
import {ReactComponent as Info} from "../static/icons/info.svg";
import Input from "./Input";
import Button from "./Button";

const OrderModal = () => {

	const vehicleType = useOrderModal(state => state.vehicleType)
	const closeModal = useOrderModal(state => state.closeModal)
	const initialFrom = useOrderModal(state => state.from)
	const initialTo = useOrderModal(state => state.to)
	const initialCityCategory = useOrderModal(state => state.cityCategory)

	const [cityCategory, setCityCategory] = useState(initialCityCategory ?? 'Город')
	const [from, setFrom] = useState(initialFrom)
	const [to, setTo] = useState(initialTo)
	const [name, setName] = useState('')
	const [phone, setPhone] = useState('')

	useDisableBodyScroll()

	return (
		<div className={style.container}>
			<div className={style.modal}>
				<div className={style.modalContainer}>
					<button onClick={closeModal} className={style.close}><Close/></button>
					<div className={style.header}>Куда доставить?</div>
					<SelectTab
						tabs={[
							'Город',
							'Межгород',
							'Международные'
						]}
						selectedTab={cityCategory}
						onSelect={setCityCategory}
						className={style.selectTab}
					/>
					{vehicleType && (
						<div className={style.badge}>
							<Info/>
							<div>{vehicleType}</div>
						</div>
					)}
					<Input
						label={'Откуда?'}
						placeholder={'Введите город-отправитель'}
						value={from}
						onChange={setFrom}
					/>
					<Input
						label={'Куда?'}
						placeholder={'Введите город-получатель'}
						value={to}
						onChange={setTo}
					/>
					<Input
						label={'Ваше имя'}
						placeholder={'Введите Ваше имя'}
						value={name}
						onChange={setName}
					/>
					<Input
						label={'Телефон'}
						placeholder={'Ваш номер телефона'}
						value={phone}
						onChange={setPhone}
					/>
					<Button className={style.button} type={'secondary'}>Оформить заказ</Button>
				</div>
			</div>
			<div onClick={closeModal} className={'modalBackground'}/>
		</div>
	)
}

export default OrderModal