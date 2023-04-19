import ProtTypes from 'prop-types';
import css from "./Profile.module.css"


export const Card = ({avatar, username, tag, location, stats}) => {
    return (
        <div className={css.profile}>
        <div className={css.description}>
            <img className={css.avatar} src={avatar} alt={username}></img>
            <p className={css.name}>{username}</p>
            <p className={css.tag}>@{tag}</p>
            <p className={css.location}>{location}</p>
        </div>
        <ul className={css.stats}>
            <li>
                <span className={css.label}>followers</span>
                <span className={css.quantity}>{stats.followers}</span>
            </li>
            <li>
                <span className={css.label}>views</span>
                <span className={css.quantity}>{stats.views}</span>
            </li>
            <li>
                <span className={css.label}>likes</span>
                <span className={css.quantity}>{stats.likes}</span>
            </li>
        </ul>
    </div>
    )
}

Card.ProtTypes = {
    avatar: ProtTypes.string.isRequired,
    username: ProtTypes.string.isRequired,
    tag: ProtTypes.string.isRequired,
    location: ProtTypes.string.isRequired,
    stats: ProtTypes.array,
}