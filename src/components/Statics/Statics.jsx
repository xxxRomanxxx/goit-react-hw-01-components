import css from "./Statics.module.css"

export const Statics = ({stats, title}) => {
    return (
        <section className={css.statistics}>
        {title.length > 0 && <h2 className={css.title}>{title }</h2>}
        <ul className={css.statList}>
            {stats.map(stat => (
            <li key={stat.id} className={css.item}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
          </li>))}
        </ul>
      </section>
    )
}
