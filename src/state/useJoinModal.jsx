import create from "zustand";
import {addDoc} from "firebase/firestore";
import {getPartnersCollection} from "../firebase/firebase";
import {getExactTime} from "../utils/getExactTime";

const initialState = {
	isOpen: false,
	isFetching: false,
}

const useJoinModal = create((set) => ({
	...initialState,
	openModal: () => set({isOpen: true}),
	closeModal: () => set(initialState),
	toggleModal: () => set(prev => ({isOpen: !prev.isOpen})),
	sendPartnerInfo: async ({phone, name}) => {
		try {
			set({isFetching: true})
			await addDoc(getPartnersCollection(), {
				name, phone,
				createdTime: getExactTime(),
				createdAt: Date.now()
			})
			return true
		} catch (e) {
			return false
		} finally {
			set({isFetching: false})
		}
	}
}))

export default useJoinModal