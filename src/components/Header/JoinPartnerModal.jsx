import style from '../../style/Header/JoinPartnerModal.module.css'
import Input from "../Input";
import {ReactComponent as Close} from "../../static/icons/close.svg";
import Button from "../Button";
import {useEffect} from "react";
import {useDisableBodyScroll} from "../../utils/useDisabledBodyScroll";

const JoinPartnerModal = ({closeModal}) => {

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
				<div className={style.modalContainer}>
					<button onClick={closeModal} className={style.close}><Close/></button>
					<div className={style.header}>Оставьте заявку</div>
					<div className={style.description}>
						Оставьте нам заявку и наш менеджер<br/>
						свяжется с Вами в ближайшее время!
					</div>

					<Input placeholder={'Ваше имя'}/>
					<Input placeholder={'Номер телефона'}/>
					<Button className={style.button} type={'primary'}>Отправить</Button>
				</div>
			</div>
			<div onClick={closeModal} className={'modalBackground'}/>
		</>
	)
}

export default JoinPartnerModal