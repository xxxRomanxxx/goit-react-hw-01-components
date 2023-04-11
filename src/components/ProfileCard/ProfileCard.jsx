// import ProtTypes from 'prop-types';
import user from "../../user.json"

export const Card = () => {
    return (
        <div>
            <img src={user.avatar} alt={user.username}></img>
            <h2>{user.username}</h2>
            <p>{user.tag}</p>
            <p>{user.location}</p>
        </div>
    )
}