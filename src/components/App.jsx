import { Card } from "./ProfileCard/ProfileCard";
import user from "../user.json"


export const App = () => {
  return (
    <>
      <Card
      avatar={user.avatar} 
      username={user.username} 
      tag={user.tag} 
      location={user.location}
      stats={user.stats}
      />
    </>
  );
};
