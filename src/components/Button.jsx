/**
 * @param children
 * @param {'primary' | 'primary-outline' | 'secondary' | 'secondary-outline'} type
 * @param className
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Button = ({children, type, className, ...props}) => {
	return (
		<button className={`${className} ${type}`} {...props}>
			{children}
		</button>
	)
}

export default Button