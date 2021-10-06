import create from "zustand";
import {getOrdersCollection} from "../firebase/firebase";
import {getNonFormattedPhone} from "../utils/validation";
import {addDoc} from "firebase/firestore";
import {getExactTime} from "../utils/getExactTime";
import emailjs from "emailjs-com";

const initialState = {
	isOpen: false,
	vehicleType: null,
	from: null,
	to: null,
	cityCategory: null,
	isFetching: false
}

const useOrderModal = create((set) => ({
	...initialState,
	openModal: ({vehicleType, from, to, cityCategory}) =>
		set(prev => ({
			...prev,
			isOpen: true,
			vehicleType, from, to, cityCategory
		})),
	closeModal: () => set(initialState),
	sendOrderInfo: async ({from, to, phone: formattedPhone, name, vehicleType, cityCategory}) => {
		try {
			set({isFetching: true})
			const phone = getNonFormattedPhone(formattedPhone)
			await addDoc(getOrdersCollection(), {
				from, to, name, phone,
				orderType: cityCategory,
				vehicleType: vehicleType ?? 'Не указано',
				createdAt: Date.now(),
				createdTime: getExactTime()
			})
			await emailjs.send(
				'gmail',
				process.env.REACT_APP_EMAILJS_PARTNER_ORDER_ID,
				{name, phone, from, to},
				process.env.REACT_APP_EMAILJS_USER_ID
			)
			return true
		} catch (e) {
			set({isFetching: false})
			console.error(e)
			return false
		}
	}
}))

export default useOrderModal