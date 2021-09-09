import style from '../../style/LandingPage/FAQ.module.css'
import {useState} from "react";
import {ReactComponent as Expand} from "../../static/icons/expand_more_thin.svg";

const faqData = [
	{
		question: 'У вас есть собственный транспорт?',
		answer: 'Сервис Zholda владеет парком из нескольких десятков транспортных средств – от малотоннажных автомобилей до фур. Все транспортные средства оборудованы системами контроля температуры и спутниковой геолокации, тахографами и рефрижераторными установками.'
	},
	{
		question: 'Кто перевозчики в сервисе?',
		answer: 'В сервисе зарегистрировано более 100 перевозчиков  – индивидуальные предприниматели и транспортные компании с собственным транспортом. Перевозчики получают доступ к сервису только после онлайн-скорринга и проверки СБ компании'
	},
	{
		question: 'Как работает сервис?',
		answer: 'Оставьте онлайн-заказ. В течении 10 мин  Вам на позвонять наш менеджер и оформит ваш заказ после отправит ваш перевозчика. После перевозки вы оплачиваете и оцениваете резултаты сервиса и водителя'
	},
	{
		question: 'У меня регулярные перевозки. Я могу работать в сервисе?',
		answer: 'Да. В сервисе разработаны все условия для юр лиц для заключения договора для размещения регулярных заказов:\n' +
			' • Быстрая онлайн-заявка с возможностью копировать заказ и закреплять ставки'
	},
	{
		question: 'Какие грузоперевозки я могу заказать?',
		answer: 'Вы можете заказать междугороднюю перевозку груза полными машинами от 1,5 до 20 тонн. Мы предоставляем все типы машин – рефрижераторы, изотермы, тента и борта. Также в сервисе можно заказать городскую доставку. Например Нур-Султан - Алматы.  Но пока что не занимается международными доставками'
	}
]

const FaqItem = ({question, answer, isOdd}) => {
	const [isOpen, setIsOpen] = useState(false)
	const toggleIsOpen = () => setIsOpen(prev => !prev)
	return (
		<div
			className={style.item + (!isOdd ? ' ' + style.odd : '') + (isOpen ? ' ' + style.open : '')}
			onClick={toggleIsOpen}
		>
			<div className={style.question}>
				<div>{question}</div>
				<Expand/>
			</div>
			{isOpen ? (
				<div className={style.answerContainer}>
					<div className={style.line}/>
					<div className={style.answer}>{answer}</div>
				</div>
			) : (
				<div/>
			)}
		</div>
	)
}

const FAQ = () => {
	return (
		<div className={style.container}>
			<h2 className={style.header}>Часто задаваемые вопросы</h2>
			<div>
				{faqData.map((el, i) => <FaqItem key={i} {...el} isOdd={i % 2}/>)}
			</div>
		</div>
	)
}

export default FAQ