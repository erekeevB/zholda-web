import {ReactComponent as Logo} from "../static/logoWithText.svg";
import {ReactComponent as Mail} from "../static/icons/mail.svg";
import {ReactComponent as Phone} from "../static/icons/phone.svg";
import AppStore from '../static/app_store_badge.png'
import GooglePlay from '../static/google_play_badge.png'
import style from '../style/Footer.module.css'

const Footer = () => {
	return (
		<div className={style.container}>
			<div className={style.mainContainer}>
				<div className={style.logoContainer}>
					<Logo/>
					<div className={style.contactItem}>
						<Mail/>
						<div>Zholdats@gmail.com</div>
					</div>
					<div className={style.contactItem}>
						<Phone/>
						<div>8 (707) 364 00 00</div>
					</div>
					<div className={style.schedule}>Ежедневно с 09:00 до 22:00</div>
				</div>
				<div>
					<div className={style.groupHeader}>О сервисе</div>
					<div>
						<a>О компании</a>
						<a>Правила</a>
						<a>Контакты</a>
						<a>Реквизиты</a>
					</div>
				</div>
				<div>
					<div className={style.groupHeader}>Пользователям</div>
					<div>
						<a>Юр. лицам</a>
						<a>Курьерам</a>
						<a>Партнерам</a>
						<a>Магазинам</a>
					</div>
				</div>
				<div>
					<div className={style.groupHeader}>Помощь</div>
					<div>
						<a>Помощь</a>
						<a>Вопрос-Ответ</a>
						<a>Политика конфиденциальности</a>
					</div>
				</div>
				<div>
					<a><img src={AppStore} alt={'app store badge'}/></a>
					<a><img src={GooglePlay} alt={'google play badge'}/></a>
				</div>
			</div>
			<div className={style.copyright}>© 2021, Все права защищены</div>
		</div>
	)
}

export default Footer