import style from '../style/MediaContainer.module.css'

export const Mobile = ({children}) => <div className={style.mobile}>{children ?? null}</div>
export const Desktop = ({children}) => <div className={style.desktop}>{children ?? null}</div>