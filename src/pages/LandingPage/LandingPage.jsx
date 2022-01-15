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
							Полный спектр Грузоперевозок<br/>
							2 года на рынке, 163 машин
						</h1>
						<span className={style.subHeader}>
							Доставим сейчас - Оплата после
							<ul>
								<li>Гарантия - Ценность вашего груза</li>
								<li>Доставим груз в срок</li>
								<li>Оставьте заявку и узнайте цену</li>
							</ul>
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