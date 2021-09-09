import vehicle1 from '../../static/LandingPage/vehicles/vehicle1.png'
import vehicle2 from '../../static/LandingPage/vehicles/vehicle2.png'
import vehicle3 from '../../static/LandingPage/vehicles/vehicle3.png'
import vehicle4 from '../../static/LandingPage/vehicles/vehicle4.png'
import vehicle5 from '../../static/LandingPage/vehicles/vehicle5.png'
import vehicle6 from '../../static/LandingPage/vehicles/vehicle6.png'
import vehicle7 from '../../static/LandingPage/vehicles/vehicle7.png'
import vehicle8 from '../../static/LandingPage/vehicles/vehicle8.png'
import VehicleListItem from "./VehicleListItem";
import style from '../../style/LandingPage/VehicleList.module.css'
import {Desktop, Mobile} from "../MediaContainer";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {ReactComponent as Chevron} from "../../static/icons/chevron.svg";

const vehicles = [
	{
		name: 'Тентованный грузовик',
		description: 'Крупная машина, подходящая для большинства видов городских грузовых перевозок. В данном автомобиле можно перевезти как личные вещи и мебель, так и банкомат, пианино, сейф или ванну и строительные материалы.',
		price: 'от 4000 тг /час',
		img: vehicle1
	},
	{
		name: 'Фермер',
		description: 'Данный автомобиль сочетает в себе возможность, как перевозки объемных грузов, так и перевозку до 5 пассажиров сопровождающих груз.',
		price: 'от 4000 тг /час',
		img: vehicle2
	},
	{
		name: 'Термобудка',
		description: 'Грузовой автомобиль, который предназначается для перевозки продовольственных и непродовольственных грузов, отличающихся повышенными требованиями к температурному режиму',
		price: 'от 4000 тг /час',
		img: vehicle3
	},
	{
		name: 'Эвакуатор',
		description: 'Специальное транспортное средство, предназначенное для погрузки, разгрузки и перевозки автомобилей в случае их поломки, аварии, нарушения водителем ряда правил дорожного движения. Перевозка осуществляется посредством полной или частичной погрузки либо буксировки транспортного средства.',
		price: 'от 4000 тг /час',
		img: vehicle4
	},
	{
		name: 'Бортовой газель',
		description: 'Данный автомобиль может использоваться для транспортировки длинномерных грузов, а также для доставки в те места, где существуют ограничения по высоте машин.',
		price: 'от 4000 тг /час',
		img: vehicle5
	},
	{
		name: 'Рефрижерактор <br/>(Холодильник)',
		description: 'Данный автомобиль предназначен для перевозки скоропортящихся продуктов, и других грузов, при перевозке которых нужно соблюдать специальный температурный режим. Наши рефрижераторы поддерживают температурный режим от -20 °C до +20 °C',
		price: 'от 4000 тг /час',
		img: vehicle6
	},
	{
		name: 'Пассажирская газель',
		description: 'Идеальный автомобиль для осуществления пассажирских перевозок.',
		price: 'от 4000 тг /час',
		img: vehicle7
	},
	{
		name: 'Газель закрытый',
		description: 'Способны перевозить более тонны самых разнообразных грузов, максимально обеспечивая при этом их сохранность и комфорт для водителя.',
		price: 'от 4000 тг /час',
		img: vehicle8
	},
]

const VehicleList = () => {
	return (
		<div className={style.container}>
			<h2>Каталог автомобилей</h2>
			<Mobile>
				<h3>
					Выберите необходимую автомобиль <br/>
					и заполните заявку. Тысячи водителей уже <br/>
					ждут Вашего заказа!
				</h3>
				<Carousel
					infiniteLoop
					autoPlay={0}
					interval={1000000}
					renderArrowNext={(clickHandler) => (
						<button onClick={clickHandler} className={`${style.chevron} ${style.right}`}><Chevron/></button>
					)}
					renderArrowPrev={(clickHandler) => (
						<button onClick={clickHandler} className={`${style.chevron} ${style.left}`}><Chevron/></button>
					)}
					renderIndicator={(clickHandler, isSelected) => (
						<div className={style.dot + (isSelected ? ' ' + style.selected : '')} onClick={clickHandler}/>)
					}
				>
					{vehicles.map(vehicle => <VehicleListItem key={vehicle.name} vehicle={vehicle}/>)}
				</Carousel>
			</Mobile>
			<Desktop>
				<h3>
					Выберите необходимую автомобиль и заполните заявку. <br/>
					Тысячи водителей уже ждут Вашего заказа!
				</h3>
				<div className={style.listContainer}>
					{vehicles.map(vehicle => <VehicleListItem key={vehicle.name} vehicle={vehicle}/>)}
				</div>
			</Desktop>
		</div>
	)
}

export default VehicleList