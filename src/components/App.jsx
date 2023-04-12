import { Card } from "./ProfileCard/ProfileCard";
import {Statics} from "./Statics/Statics"
import user from "../user.json"
import data from "../data.json"


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
      <Statics 
      stats = {data}
      title = ''/>
    </>
  );
};
