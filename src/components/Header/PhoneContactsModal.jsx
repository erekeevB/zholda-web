import {ReactComponent as WhatsApp} from '../../static/icons/whatsapp.svg'
import {ReactComponent as Instagram} from '../../static/icons/instagram.svg'
import {ReactComponent as Phone} from '../../static/icons/phone.svg'
import {ReactComponent as Close} from '../../static/icons/close.svg'
import style from '../../style/Header/PhoneContactModal.module.css'
import Button from "../Button";
import {useEffect} from "react";
import {useDisableBodyScroll} from "../../utils/useDisabledBodyScroll";
import {Desktop, Mobile} from "../MediaContainer";
import {ReactComponent as Logo} from "../../static/logoWithText.svg";

const ContactItem = ({svg, link, phone, text, style: colorStyle}) => {

	const child = <>
		<div className={style.icon} style={colorStyle}>
			{svg}
		</div>
		<div>
			<div className={style.phone}>{phone}</div>
			<div className={style.contactText} dangerouslySetInnerHTML={{__html: text}}/>
		</div>
	</>

	return link ?
		<a href={link} target={'_blank'} rel={'noreferrer'} className={style.contactItem}>{child}</a> :
		<div className={style.contactItem}>{child}</div>
}


const PhoneContactsModal = ({closeModal, openModal}) => {

	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
		})
	}, []);

	useDisableBodyScroll()

	return (
		<>
			<div className={style.modal}>
				<Mobile>
					<div className={style.headerContainer}>
						<Logo className={style.logo}/>
						<div onClick={closeModal} className={style.buttonMobile + ' ' + style.dropdownWrapper}>
							<Close/>
						</div>
					</div>
					<div className={style.mobileTitle}>Для связи с нами</div>
				</Mobile>
				<ContactItem
					svg={<WhatsApp/>}
					link={'https://wa.me/77073640000'}
					phone={'+7 (707) 364-00-00'}
					text={'WhatsApp'}
					style={{background: '#5FA854'}}
				/>
				<ContactItem
					svg={<Instagram/>}
					link={'https://www.instagram.com/zholda.kz/'}
					phone={'Мы в Instagram!'}
					text={'Подписывайся на <strong>@zholda.kz</strong>'}
					style={{
						background:
							'radial-gradient(120.68% 120.68% at 16.13% 98.66%, #FEC053 0%, #F2203E 32.73%, #B729A8 64.85%, #5342D6 100%)'
					}}
				/>
				<ContactItem
					svg={<Phone/>}
					phone={'+7 (707) 364-00-00'}
					text={'Менеджер (Аружан)'}
					style={{background: '#FDBF3D'}}
				/>
				<Mobile>
					<Button className={`${style.button} ${style.mobile}`} onClick={openModal} type={'primary'}>Заказать
						звонок</Button>
				</Mobile>
				<Desktop>
					<Button className={`${style.button} ${style.desktop}`} onClick={openModal} type={'primary'}>Заказать
						звонок</Button>
				</Desktop>
			</div>
			<div onClick={closeModal} className={'modalBackground'}/>
		</>
	)
}

export default PhoneContactsModal