import style from '../../style/LandingPage/DownloadApp.module.css'
import GooglePlay from '../../static/google_play_badge.png'
import AppStore from '../../static/app_store_badge.png'
import PhoneFront from '../../static/LandingPage/downloadApp/phone_front.png'
import PhoneBack from '../../static/LandingPage/downloadApp/phone_back.png'
import {Desktop, Mobile} from "../MediaContainer";

const DownloadApp = () => {
	return (
		<div className={style.mainContainer}>
			<div className={style.container}>
				<Desktop>
					<h2 className={style.header}>
						Мы на стадии разработки <br/>
						мобильного приложения “ZHOLDA”
					</h2>
					<h3 className={style.subHeader}>
						Стать партнером ZHOLDA.KZ легко, достаточно только <br/>
						скачать наше приложение и пройти регистрацию.
					</h3>
				</Desktop>
				<Mobile>
					<h2 className={style.header}>
						Мы на стадии разработки <br/>
						мобильного приложения
					</h2>
					<h3 className={style.subHeader}>
						Стать партнером ZHOLDA.KZ <br/>
						легко, достаточно только <br/>
						скачать наше приложение <br/>
						и пройти регистрацию.
					</h3>
				</Mobile>
				<div className={style.badges}>
					<a href={'#'}>
						<img src={AppStore} alt={'app store badge'}/>
					</a>
					<a href={'#'}>
						<img src={GooglePlay} alt={'google play badge'}/>
					</a>
				</div>
				<img className={style.phoneFront} src={PhoneFront} alt={'phone front side'}/>
				<img className={style.phoneBack} src={PhoneBack} alt={'phone back side'}/>
			</div>
		</div>
	)
}

export default DownloadApp