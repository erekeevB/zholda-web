const getTwoDigits = (num) => num < 10 ? `0${num}` : num

export const getExactTime = () => {
	const date = new Date()
	let day = getTwoDigits(date.getDate())
	let month = getTwoDigits(date.getMonth())
	let hours = getTwoDigits(date.getHours())
	let minutes = getTwoDigits(date.getMinutes())
	return `${day}.${month}.${date.getFullYear()} ${hours}:${minutes}`
}