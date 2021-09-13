import {useDisableBodyScroll} from "../utils/useDisabledBodyScroll";
import useOrderModal from "../state/useOrderModal";
import style from '../style/OrderModal.module.css'
import {ReactComponent as Close} from "../static/icons/close.svg";
import {useState} from "react";
import SelectTab from "./SelectTab";
import {ReactComponent as Info} from "../static/icons/info.svg";
import Button from "./Button";
import {toast} from "react-hot-toast";
import {Desktop, Mobile} from "./MediaContainer";
import useInput from "../utils/useInput";
import {emptyStrValidation, phoneValidation, validateAllInputs} from "../utils/validation";

const OrderModal = () => {

	const vehicleType = useOrderModal(state => state.vehicleType)
	const closeModal = useOrderModal(state => state.closeModal)
	const sendOrderInfo = useOrderModal(state => state.sendOrderInfo)
	const initialFrom = useOrderModal(state => state.from)
	const initialTo = useOrderModal(state => state.to)
	const initialCityCategory = useOrderModal(state => state.cityCategory)
	const isFetching = useOrderModal(state => state.isFetching)

	const [cityCategory, setCityCategory] = useState(initialCityCategory ?? 'Город')

	const from = useInput({
		label: 'Откуда?',
		placeholder: 'Введите город-отправитель',
		initialValue: initialFrom,
		validation: emptyStrValidation
	})

	const to = useInput({
		label: 'Куда?',
		placeholder: 'Введите город-получатель',
		initialValue: initialTo,
		validation: emptyStrValidation
	})

	const name = useInput({
		label: 'Ваше имя',
		placeholder: 'Введите Ваше имя',
		validation: emptyStrValidation
	})

	const phone = useInput({
		label: 'Телефон',
		placeholder: 'Ваш номер телефона',
		type: 'number',
		validation: phoneValidation
	})

	useDisableBodyScroll()

	const handleSendOrder = () => {
		if (!validateAllInputs(name, phone, to, from)) {
			sendOrderInfo({
				to: to.value,
				from: from.value,
				name: name.value,
				phone: phone.value,
				vehicleType, cityCategory
			})
				.then(success => {
					if (success) {
						toast.success('Ваша заявка успешно принята. Ждите звонка в течение дня', {
							duration: 7000,
							position: 'bottom-right'
						})
						closeModal()
					} else {
						toast.error('Не удалось отправить заявку! Попробуйте позже.', {position: 'bottom-right'})
					}
				})
		}
	}

	return (
		<div className={style.container}>
			<div className={style.modal}>
				<button onClick={closeModal} className={style.close}><Close/></button>
				<Mobile>
					<div className={style.header}>Рассчитать заказ</div>
				</Mobile>
				<Desktop>
					<div className={style.header}>Куда доставить?</div>
				</Desktop>
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
				{from.Input}
				{to.Input}
				{name.Input}
				{phone.Input}
				<div className={style.buttonWrapper}>
					<Button disabled={isFetching} className={style.button} type={'secondary'} onClick={handleSendOrder}>
						{isFetching ? 'Загрузка...' : 'Оформить заказ'}
					</Button>
				</div>
			</div>
			<div onClick={closeModal} className={'modalBackground'}/>
		</div>
	)
}

export default OrderModal