import user from "../../user.json"

export const Stats = () => {
    return (
        <div>
            <ul>
                <li>
                    <h3>followers</h3>
                    <p>{user.stats.followers}</p>
                </li>
                <li>
                    <h3>views</h3>
                    <p>{user.stats.views}</p>
                </li>
                <li>
                    <h3>likes</h3>
                    <p>{user.stats.likes}</p>
                </li>
            </ul>
        </div>
    )
}