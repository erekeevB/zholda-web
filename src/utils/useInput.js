import React, {useState} from 'react'
import Input from "../components/Input";

const useInput = (
	{
		label,
		placeholder,
		validation,
		errorMsg: errorText,
		disableOnErr,
		initialValue = '',
		...props
	}
) => {
	const [value, setValue] = useState(initialValue ? initialValue.toString() : '')
	const [errorMsg, setErrorMsg] = useState('')

	const onChange = text => setValue(text)

	const validate = () => {
		if (validation) {
			const err = validation(value)
			err ? setErrorMsg(err) : setErrorMsg(null)
			if (err) return err
		}
	}

	return (
		{
			Input: (
				<Input
					placeholder={placeholder}
					onChange={onChange}
					value={value}
					label={label}
					errorMsg={disableOnErr ? null : errorText ?? errorMsg}
					{...props}
				/>
			),
			value,
			setValue,
			isError: errorMsg || errorText,
			setError: setErrorMsg,
			validate
		}
	)
}

export default useInput