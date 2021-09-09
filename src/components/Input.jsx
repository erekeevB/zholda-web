import style from '../style/Input.module.css'

const Input = ({onChange, value, placeholder, label, className}) => {
	return (
		<div className={style.container + ' ' + className}>
			{label && <span className={style.label}>{label}</span>}
			<input value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}/>
		</div>
	)
}

export default Input