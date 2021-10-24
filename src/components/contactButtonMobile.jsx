import {Mobile} from "./MediaContainer";
import style from '../style/contactButtonMobile.module.css'
import {ReactComponent as WhatsApp} from "../static/icons/whatsapp.svg";
import {ReactComponent as Phone} from "../static/icons/phone.svg";
import {phoneLink, whatsAppLink} from "../utils/constants";
import classNames from "classnames";
// import {useRef, useState} from "react";
// import useOutsideAlert from "../utils/useOutsideAlert";
// import {ReactComponent as ChevronDown} from "../static/icons/expand_more.svg";

const ContactButtonMobile = () => {
	// const [isOpen, setIsOpen] = useState(false)
	// const ref = useRef()
	// const unFocus = () => setIsOpen(false)
	// const toggleFocus = () => setIsOpen(prev => !prev)
	// useOutsideAlert(ref, unFocus)
	return (
		<Mobile>
			<div
				// ref={ref}
				className={style.container}
			>
				{/*<button onClick={toggleFocus} className={classNames(style.circle, style.filler, {[style.open]: isOpen})}>*/}
				{/*	{isOpen && (*/}
				{/*		<ChevronDown/>*/}
				{/*	)}*/}
				{/*</button>*/}
				<a
					href={phoneLink}
					rel={'noreferrer'}
					className={classNames(style.circle, style.phone,
						// {[style.open]: isOpen}
					)}
				>
					<Phone/>
				</a>
				<a
					href={whatsAppLink}
					target={'_blank'}
					rel={'noreferrer'}
					className={classNames(style.circle, style.whatsApp,
						// {[style.open]: isOpen}
					)}
				>
					<WhatsApp/>
				</a>
			</div>
		</Mobile>
	)
}

export default ContactButtonMobile