import ProtTypes from 'prop-types';
import css from "./FriendList.module.css"

export const Friends = friends => {
    return (
     <ul className={css.friendList}>
        {friends.friends.map(({id, isOnline, avatar, name}) => (
           <li className={css.item} key={id}>
            {isOnline ? <span className={`${css.status} ${css.online}`}></span> : <span className={`${css.status} ${css.offline}`}></span>}
           <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
           <p className={css.name}>{name}</p>
           </li>
        ))}  
      </ul>
    )
}

Friends.ProtTypes = {
    isOnline: ProtTypes.bool.isRequired,
    avatar: ProtTypes.string.isRequired,
    name: ProtTypes.number.isRequired,
  }