import create from "zustand";

const initialState = {
	isOpen: false,
	vehicleType: null,
	from: null,
	to: null,
	cityCategory: null
}

const useOrderModal = create((set, get) => ({
	...initialState,
	openModal: ({vehicleType, from, to, cityCategory}) =>
		set(prev => ({
			...prev,
			isOpen: true,
			vehicleType, from, to, cityCategory
		})),
	closeModal: () => set(initialState)
}))

export default useOrderModal