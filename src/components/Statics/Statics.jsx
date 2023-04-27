import ProtTypes from 'prop-types';
import css from "./Statics.module.css"

export const Statics = ({stats, title}) => {
    return (
        <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.statList}>
            {stats.map(({id, label, percentage}) => (
            <li key={id} className={css.item}>
            <span className={css.label}>{label}</span>
            <span className={css.percentage}>{percentage}%</span>
          </li>))}
        </ul>
      </section>
    )
}


Statics.propTypes = {
  title: ProtTypes.string,
  stats: ProtTypes.arrayOf(
    ProtTypes.shape({
      id: ProtTypes.string.isRequired,
      label: ProtTypes.string.isRequired,
      percentage: ProtTypes.number.isRequired,
    })
  ),
};