import create from "zustand";
import {addDoc} from "firebase/firestore";
import {getPartnersCollection} from "../firebase/firebase";
import {getExactTime} from "../utils/getExactTime";

const useJoinModal = create((set) => ({
	isOpen: false,
	openModal: () => set({isOpen: true}),
	closeModal: () => set({isOpen: false}),
	toggleModal: () => set(prev => ({isOpen: !prev.isOpen})),
	sendPartnerInfo: async ({phone, name}) => {
		try {
			await addDoc(getPartnersCollection(), {
				name, phone,
				createdTime: getExactTime(),
				createdAt: Date.now()
			})
			return true
		} catch (e) {
			return false
		}
	}
}))

export default useJoinModal