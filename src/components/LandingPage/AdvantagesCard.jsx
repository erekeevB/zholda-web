import {ReactComponent as Checked} from "../../static/icons/checked.svg";
import Button from "../Button";
import style from '../../style/LandingPage/AdvantagesList.module.css'

const AdvantagesCard = ({name, advantages, buttonText, color}) => (
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
		<Button className={style.button} type={'primary-outline'}>{buttonText}</Button>
	</div>
)

export default AdvantagesCard