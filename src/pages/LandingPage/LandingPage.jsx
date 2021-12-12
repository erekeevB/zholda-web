import headerPhoto1 from '../../static/LandingPage/headerPhoto.png'
import Calculator from "../../components/LandingPage/Calculator";
import style from '../../style/LandingPage/LandingPage.module.css'
import VehicleList from "../../components/LandingPage/VehicleList";
import AdvantagesList from "../../components/LandingPage/AdvantagesList";
import FAQ from "../../components/LandingPage/FAQ";
import DownloadApp from "../../components/LandingPage/DownloadApp";
import useOrderModal from "../../state/useOrderModal";
import OrderModal from "../../components/OrderModal";

const LandingPage = () => {

	const isOrderModalOpen = useOrderModal(state => state.isOpen)

	return (
		<div className={style.container}>
			<div className={style.headerSection}>
				<div className={style.headerSectionWrapper}>
					<div className={style.headerContainer}>
						<h1 className={style.mainHeader}>
							Грузоперевозка по всему <br/>Казахстану и по СНГ
						</h1>
						<span className={style.subHeader}>
							Арендовать грузовую машину теперь <br/>
							можно всего за пару кликов от <span className={style.yellow}>4000 тг</span>
						</span>
						<img className={style.backgroundImg} src={headerPhoto1} alt={'machine'}/>
					</div>
					<Calculator className={style.calculator}/>
				</div>
			</div>
			<VehicleList/>
			<AdvantagesList/>
			<FAQ/>
			<DownloadApp/>
			{isOrderModalOpen && <OrderModal/>}
		</div>
	)
}

export default LandingPage