import s from './style.module.css'
import comp from '../../assets/bg1.jpg'

const Layout = ({title ,descr, urlBg,colorBg}) => {
const image = urlBg?{backgroundImage:`url(${urlBg})`}:{backgroundColor:`${colorBg}`}
  return(   
    <section style={image}className={s.root}>
    <div className={s.wrapper}>
        <article>
            <div className={s.title}>
                <h3>{title}</h3>
                <span className={s.separatclassor}></span>
            </div>
            <div className={`${s.desc} ${s.full}`}>
                <p>{descr}</p>
            </div>
        </article>
    </div>
    </section>
  )
}


export default Layout