import create from "zustand";
import {getOrdersCollection} from "../firebase/firebase";
import {getNonFormattedPhone} from "../utils/validation";
import {addDoc} from "firebase/firestore";
import {getExactTime} from "../utils/getExactTime";

const initialState = {
	isOpen: false,
	vehicleType: null,
	from: null,
	to: null,
	cityCategory: null
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
			const phone = getNonFormattedPhone(formattedPhone)
			await addDoc(getOrdersCollection(), {
				from, to, name, phone,
				orderType: cityCategory,
				vehicleType: vehicleType ?? 'Не указано',
				createdAt: Date.now(),
				createdTime: getExactTime()
			})
			return true
		} catch (e) {
			console.error(e)
			return false
		}
	}
}))

export default useOrderModal