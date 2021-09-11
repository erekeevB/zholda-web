import {ReactComponent as Checked} from "../../static/icons/checked.svg";
import Button from "../Button";
import style from '../../style/LandingPage/AdvantagesList.module.css'
import useJoinModal from "../../state/useJoinModal";

const AdvantagesCard = ({name, advantages, buttonText, color}) => {

	const openJoinModal = useJoinModal(state => state.openModal)

	return (
		<div className={style.item}>
			<div className={style.name + ' ' + color}>{name}</div>
			<div>
				{advantages.map(advantage => (
					<div key={advantage} className={style.advantage}>
						<Checked/>
						<div>{advantage}</div>
					</div>
				))}
			</div>
			<Button className={style.button} type={'primary-outline'} onClick={openJoinModal}>
				{buttonText}
			</Button>
		</div>
	)
}

export default AdvantagesCard