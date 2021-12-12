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
							Лидер рынка по грузоперевозкам  более 100 машины<br/>
							1) Камазы<br/>
							2) Газели<br/>
							Оставьте заявку
						</h1>
						<span className={style.subHeader}>
							Перевозка грузов всего по <span className={style.yellow}>190 тг</span> за км
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