import {ReactComponent as Logo} from "../static/logoWithText.svg";
import {ReactComponent as Mail} from "../static/icons/mail.svg";
import {ReactComponent as Phone} from "../static/icons/phone.svg";
import AppStore from '../static/app_store_badge.png'
import GooglePlay from '../static/google_play_badge.png'
import style from '../style/Footer.module.css'
import {Desktop, Mobile} from "./MediaContainer";

const Footer = () => {
	return (
		<div className={style.container}>
			<div className={style.mainContainer}>
				<div className={style.logoContainer}>
					<Logo/>
					<Desktop>
						<div className={style.contactItem}>
							<Mail/>
							<div>Zholdats@gmail.com</div>
						</div>
						<div className={style.contactItem}>
							<Phone/>
							<div>8 (707) 364 00 00</div>
						</div>
						<div className={style.schedule}>Ежедневно с 09:00 до 22:00</div>
					</Desktop>
					<Mobile>
						<div className={style.contactText}>zholdats@gmail.com</div>
						<div className={style.contactText}>8 (707) 364 00 00</div>
					</Mobile>
				</div>
				<div className={style.groupContainer}>
					<div className={style.groupHeader}>О сервисе</div>
					<div>
						<a href='/'>О компании</a>
						<a href='/'>Правила</a>
						<a href='/'>Контакты</a>
						<a href='/'>Реквизиты</a>
					</div>
				</div>
				<div className={style.groupContainer}>
					<div className={style.groupHeader}>Пользователям</div>
					<div>
						<a href='/'>Юр. лицам</a>
						<a href='/'>Курьерам</a>
						<a href='/'>Партнерам</a>
						<a href='/'>Магазинам</a>
					</div>
				</div>
				<div className={style.groupContainer}>
					<div className={style.groupHeader}>Помощь</div>
					<div>
						<a href='/'>Помощь</a>
						<a href='/'>Вопрос-Ответ</a>
						<a href='/'>Политика конфиденциальности</a>
					</div>
				</div>
				<Desktop>
					<div>
						<a href='/'><img src={AppStore} alt={'app store badge'}/></a>
						<a href='/'><img src={GooglePlay} alt={'google play badge'}/></a>
					</div>
				</Desktop>
			</div>
			<div className={style.copyright}>© 2021, Все права защищены</div>
		</div>
	)
}

export default Footer