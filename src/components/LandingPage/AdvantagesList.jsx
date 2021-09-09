import AdvantagesCard from "./AdvantagesCard";
import style from '../../style/LandingPage/AdvantagesList.module.css'
import {Desktop} from "../MediaContainer";

const advantages = [
	{
		name: 'Физическим лицам',
		color: 'yellow',
		advantages: [
			'Заберём любой груз',
			'Быстрая подача машины',
			'Оплата по факту доставки'
		],
		buttonText: 'Оформить заказ'
	},
	{
		name: 'Юридическим лицам',
		color: 'blue',
		advantages: [
			'Строительные магазины',
			'Мебельные магазины',
			'Долгосрочное сотрудничество'
		],
		buttonText: 'Выгодное сотрудничество'
	},
	{
		name: 'Водителям',
		color: 'green',
		advantages: [
			'Постоянные заказы',
			'Выгодные комиссии',
			'Своевременная оплата'
		],
		buttonText: 'Стать водителем'
	},
]

const AdvantagesList = () => {
	return (
		<div>
			<h2>Выгодные условия для сотрудничества!</h2>
			<Desktop>
				<h3>
					ZHOLDA.KZ предназначен для того, чтобы упростить процесс перевозки. Хотите отправить один груз? <br/>
					Мебель? Переезжаете? Овищи? Без проблем! У Вас постоянный поток заказов, и нужен надежный <br/>
					перевозчик? Доверьтесь нам!
				</h3>
			</Desktop>
			<div className={style.list}>
				{advantages.map(el => <AdvantagesCard key={el.name} {...el} />)}
			</div>
		</div>
	)
}

export default AdvantagesList