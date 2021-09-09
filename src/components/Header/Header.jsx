import {ReactComponent as Logo} from '../static/logoWithText.svg'
import {ReactComponent as ChevronDown} from '../static/icons/expand_more.svg'
import Button from "./Button";
import style from '../style/Header.module.css'
import {useState} from "react";
import PhoneContactsModal from "./PhoneContactsModal";

const Header = () => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false)
	const toggleDropdown = () => setIsDropdownOpen(prev => !prev)
	return (
		<div className={style.headerContainer}>
			<div className={style.leftContainer}>
				<Logo className={style.logo}/>
			</div>
			<div className={style.buttonContainer}>
				<div className={style.infoWrapper}>
					<div className={style.phone}>8 (707) 364 00 00</div>
					<div>Ответим на Ваши вопросы</div>
				</div>
				<button className={style.dropdownWrapper + (isDropdownOpen ? ' ' + style.open : '')} onClick={toggleDropdown}>
					<ChevronDown/>
				</button>
				<Button type={"primary"}>Стать партнером</Button>
			</div>
			{isDropdownOpen ? (
				<PhoneContactsModal closeModal={toggleDropdown}/>
			) : null}
		</div>
	)
}

export default Header