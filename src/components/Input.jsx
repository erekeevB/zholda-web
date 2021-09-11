import style from '../style/Input.module.css'

const Input = ({onChange, value, placeholder, label, className, errorMsg, ...props}) => {
	return (
		<div className={style.container + ' ' + className}>
			{label && <span className={style.label}>{label}</span>}
			<input
				className={style.input + (errorMsg ? ` ${style.error}` : '')}
				value={value}
				onChange={e => onChange(e.target.value)}
				placeholder={placeholder}
				{...props}
			/>
			{errorMsg && <span className={style.errorMsg}>{errorMsg}</span>}
		</div>
	)
}

export default Input