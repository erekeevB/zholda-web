import React, {useState} from "react";
import SelectTab from "../../components/SelectTab";
import Input from "../../components/Input";
import style from '../../style/LandingPage/Calculator.module.css'
import Button from "../Button";
import useOrderModal from "../../state/useOrderModal";
import {Desktop, Mobile} from "../MediaContainer";

const Calculator = ({className}) => {

	const openOrderModal = useOrderModal(state => state.openModal)

	const [cityCategory, setCityCategory] = useState('Межгород')
	const [from, setFrom] = useState('')
	const [to, setTo] = useState('')

	const handleSubmit = () => {
		console.log('AAA')
		openOrderModal({from, to, cityCategory})
	}

	return (
		<div className={style.calculatorContainer + ' ' + className}>
			<Mobile>
				<h4>Рассчитать заказ</h4>
			</Mobile>
			<Desktop>
				<h4>Куда доставить?</h4>
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
			<Input
				label={'Откуда?'}
				value={from}
				onChange={setFrom}
				placeholder={'Введите адрес'}
			/>
			<Input
				label={'Куда?'}
				value={to}
				onChange={setTo}
				placeholder={'Введите адрес'}
			/>
			<Button onClick={handleSubmit} className={style.button} type={'secondary'}>Оформить заказ</Button>
		</div>
	)
}

export default Calculator