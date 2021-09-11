import {ReactComponent as Logo} from '../../static/logoWithText.svg'
import {ReactComponent as ChevronDown} from '../../static/icons/expand_more.svg'
import {ReactComponent as Phone} from '../../static/icons/phone.svg'
import Button from "../Button";
import style from '../../style/Header/Header.module.css'
import {useState} from "react";
import PhoneContactsModal from "./PhoneContactsModal";
import JoinPartnerModal from "./JoinPartnerModal"
import useJoinModal from "../../state/useJoinModal";


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
				<Phone/>
			</div>
			<div className={style.buttonContainerDesktop}>
				<div className={style.infoWrapper}>
					<div className={style.phone}>8 (707) 364 00 00</div>
					<div>Ответим на Ваши вопросы</div>
				</div>
				<button
					className={style.dropdownWrapper + (isContactModalOpen ? ' ' + style.open : '')}
					onClick={toggleDropdown}
				>
					<ChevronDown/>
				</button>
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