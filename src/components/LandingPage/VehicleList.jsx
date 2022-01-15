import vehicle1 from '../../static/LandingPage/vehicles/vehicle1.png'
import vehicle2 from '../../static/LandingPage/vehicles/vehicle2.png'
import vehicle3 from '../../static/LandingPage/vehicles/vehicle3.png'
import vehicle4 from '../../static/LandingPage/vehicles/vehicle4.jpeg'
import vehicle5 from '../../static/LandingPage/vehicles/vehicle5.jpeg'
import vehicle6 from '../../static/LandingPage/vehicles/vehicle6.jpeg'
import VehicleListItem from "./VehicleListItem";
import style from '../../style/LandingPage/VehicleList.module.css'
import {Desktop, Mobile} from "../MediaContainer";
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {ReactComponent as Chevron} from "../../static/icons/chevron.svg";

const vehicles = [
	{
		name: 'Тентованный газель',
		img: vehicle1
	},
	{
		name: 'Фермер',
		img: vehicle2
	},
	{
		name: 'Термобудка',
		img: vehicle3
	},
	{
		name: 'Рефрижатор',
		img: vehicle4
	},
	{
		name: 'Тентованная фура',
		img: vehicle5
	},
	{
		name: 'Трал = Негабаритный груз',
		img: vehicle6
	}
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