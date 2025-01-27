import s from './Input.module.scss'
export const Input = () => {
  return (
    <div className={s.wrapper}>
        <input type="text" placeholder="Search..." className={s.input}/>
    </div>
  )
}
