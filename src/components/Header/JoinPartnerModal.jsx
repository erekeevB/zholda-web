import style from '../../style/Header/JoinPartnerModal.module.css'
import {ReactComponent as Close} from "../../static/icons/close.svg";
import Button from "../Button";
import {useDisableBodyScroll} from "../../utils/useDisabledBodyScroll";
import useInput from "../../utils/useInput";
import {emptyStrValidation, phoneValidation, validateAllInputs} from "../../utils/validation";
import useJoinModal from "../../state/useJoinModal";
import {toast} from "react-hot-toast";
import {event} from "react-ga";

const JoinPartnerModal = ({closeModal: closeHeaderModal}) => {

	const closeModal = useJoinModal(state => state.closeModal)
	const sendPartnerInfo = useJoinModal(state => state.sendPartnerInfo)
	const isFetching = useJoinModal(state => state.isFetching)

	const name = useInput({
		placeholder: "Ваше имя",
		validation: emptyStrValidation
	})

	const phone = useInput({
		placeholder: "Номер телефона",
		validation: phoneValidation,
		type: 'number'
	})

	const handleCloseModal = () => closeHeaderModal ? closeHeaderModal() : closeModal()

	useDisableBodyScroll()

	const handleSendPartnerInfo = () => {
		if (!validateAllInputs(name, phone)) {
			sendPartnerInfo({name: name.value, phone: phone.value}).then(success => {
				if (success) {
					event({
						category: "Стать Партнером",
						action: "User requested a partnership",
					})
					toast.success(
						'Ваша заявка успешно принята. Ждите звонка в течение дня', {
							duration: 7000,
							position: 'bottom-right'
						})
					closeModal()
				} else {
					toast.error(
						'Не удалось отправить заявку! Попробуйте позже.', {
							position: 'bottom-right'
						})
				}
			})
		}
	}

	return (
		<>
			<div className={style.modal}>
				<div className={style.modalContainer}>
					<button onClick={handleCloseModal} className={style.close}><Close/></button>
					<div className={style.header}>Оставьте заявку</div>
					<div className={style.description}>
						Оставьте нам заявку и наш менеджер<br/>
						свяжется с Вами в ближайшее время!
					</div>

					{name.Input}
					{phone.Input}
					<Button disabled={isFetching} className={style.button} type={'primary'} onClick={handleSendPartnerInfo}>
						{isFetching ? 'Загрузка...' : 'Отправить'}
					</Button>
				</div>
			</div>
			<div onClick={closeModal} className={'modalBackground'}/>
		</>
	)
}

export default JoinPartnerModal