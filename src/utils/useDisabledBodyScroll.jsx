import {useEffect} from "react";

export const useDisableBodyScroll = () => {
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => void (document.body.style.overflow = 'unset')
	}, []);
};