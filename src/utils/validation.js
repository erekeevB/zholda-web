export const validateAllInputs = (...inputsArr) => {
	let err
	inputsArr.forEach(el => err = (el.validate && el.validate()) || err)
	return err
}

export const emptyStrValidation = (str) => {
	if (!str?.length) return "Это поле не может быть пустым!"
}

export const phoneValidation = (str) => {
	if (!str?.length) return "Это поле не может быть пустым!"
	if (!/^8|\+7|7\d{10}/gs.test(str)) return "Неправильный формат номера!"
}

export const getNonFormattedPhone = phone => phone.replace(/\D/g, '');