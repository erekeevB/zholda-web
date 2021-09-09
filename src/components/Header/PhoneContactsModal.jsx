import {ReactComponent as WhatsApp} from '../static/icons/whatsapp.svg'
import {ReactComponent as Instagram} from '../static/icons/instagram.svg'
import {ReactComponent as Phone} from '../static/icons/phone.svg'
import style from '../style/PhoneContactModal.module.css'
import Button from "./Button";

const ContactItem = ({svg, phone, text, style: colorStyle}) => (
	<div className={style.contactItem}>
		<div className={style.icon} style={colorStyle}>
			{svg}
		</div>
		<div>
			<div className={style.phone}>{phone}</div>
			<div className={style.contactText}>{text}</div>
		</div>
	</div>
)


const PhoneContactsModal = ({closeModal}) => {
	return (
		<>

			<div className={style.modal}>
				<ContactItem
					svg={<WhatsApp/>}
					phone={'+7 (707) 364-00-00'}
					text={'WhatsApp'}
					style={{background: '#5FA854'}}
				/>
				<ContactItem
					svg={<Instagram/>}
					phone={'Мы в Instagram!'}
					text={'Подписывайся на @zholda.kz'}
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
				<Button className={style.button} type={'primary'}>Заказать звонок</Button>
			</div>
			<div onClick={closeModal} className={style.wrapper}/>
		</>
	)
}

export default PhoneContactsModal