import ProtTypes from 'prop-types';
import css from "./FriendList.module.css";
import { FriendListItem } from "../FriendListItem/FriendListItem";

export const FriendList = friends => {
    return (
     <ul className={css.friendList}>
        {friends.friends.map((friend) => (
           <FriendListItem
           key={friend.id}
           avatar={friend.avatar}
           name={friend.name}
           isOnline={friend.isOnline}
         />
        ))}  
      </ul>
    )
}

FriendList.propTypes = {
  friends: ProtTypes.arrayOf(
    ProtTypes.exact({
      id: ProtTypes.number.isRequired,
      avatar: ProtTypes.string.isRequired,
      name: ProtTypes.string.isRequired,
      isOnline: ProtTypes.bool.isRequired,
    })
  )
};
