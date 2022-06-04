import {ReactComponent as Logo} from '../../static/logoWithText.svg'
import {ReactComponent as ChevronDown} from '../../static/icons/expand_more.svg'
import {ReactComponent as WhatsApp} from "../../static/icons/whatsapp.svg";
import Button from "../Button";
import style from '../../style/Header/Header.module.css'
import {useState} from "react";
import PhoneContactsModal from "./PhoneContactsModal";
import JoinPartnerModal from "./JoinPartnerModal"
import useJoinModal from "../../state/useJoinModal";
import {instaLink, phoneLink, whatsAppLink} from "../../utils/constants";
import {ReactComponent as Instagram} from "../../static/icons/instagram.svg";
import {ReactComponent as Phone} from "../../static/icons/phone.svg";
import style2 from '../../style/Header/PhoneContactModal.module.css'


const Header = () => {

	const [isContactModalOpen, setIsContactModalOpen] = useState(false)
	const closeJoinModal = useJoinModal(state => state.closeModal)
	const toggleJoinModal = useJoinModal(state => state.toggleModal)
	const isJoinModalOpen = useJoinModal(state => state.isOpen)

	const toggleDropdown = () => {
		!isContactModalOpen && closeJoinModal()
		setIsContactModalOpen(prev => !prev)
	}
	const handleToggleJoinModal = () => {
		!isJoinModalOpen && setIsContactModalOpen(false)
		toggleJoinModal()
	}

	return (
		<div className={style.headerContainer}>
			<div className={style.leftContainer}>
				<Logo className={style.logo}/>
			</div>
			<div onClick={toggleDropdown} className={style.buttonMobile + ' ' + style.dropdownWrapper}>
				<WhatsApp/>
			</div>
			<div className={style.buttonContainerDesktop}>
				<div className={style.infoWrapper}>
					<div className={style.phone}>8 (707) 364 00 00</div>
					<div>Ответим на Ваши вопросы</div>
				</div>
				<a href={whatsAppLink} target={'_blank'} rel={'noreferrer'} className={style2.contactItem}>
					<div className={style2.icon} style={{background: '#5FA854'}}>
						<WhatsApp/>
					</div>
				</a>
				<a href={instaLink} target={'_blank'} rel={'noreferrer'} className={style2.contactItem}>
					<div className={style2.icon} style={{
						background:
							'radial-gradient(120.68% 120.68% at 16.13% 98.66%, #FEC053 0%, #F2203E 32.73%, #B729A8 64.85%, #5342D6 100%)'
					}}>
						<Instagram/>
					</div>
				</a>
				<a href={phoneLink} target={'_blank'} rel={'noreferrer'} className={style2.contactItem}>
					<div className={style2.icon} style={{background: '#FDBF3D'}}>
						<Phone/>
					</div>
				</a>
				{/*<button*/}
				{/*	className={style.dropdownWrapper + (isContactModalOpen ? ' ' + style.open : '')}*/}
				{/*	onClick={toggleDropdown}*/}
				{/*>*/}
				{/*	<ChevronDown/>*/}
				{/*</button>*/}
				<Button onClick={handleToggleJoinModal} type={"primary"}>Стать партнером</Button>
			</div>
			{isContactModalOpen ? (
				<PhoneContactsModal closeModal={toggleDropdown} openModal={handleToggleJoinModal}/>
			) : null}
			{isJoinModalOpen ? (
				<JoinPartnerModal closeModal={handleToggleJoinModal}/>
			) : null}
		</div>
	)
}

export default Header