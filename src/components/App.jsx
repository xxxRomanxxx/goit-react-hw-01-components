import { Card } from "./ProfileCard/ProfileCard";
import {Statics} from "./Statics/Statics";
import {Friends} from "./FriendList/FriendList";
import {TransactionHistory} from "./TransactionHistory/TransactionHistory"
import user from "../user.json";
import data from "../data.json";
import friends from "../friends.json";
import transactions from "../transactions.json"


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
      <Friends
      friends = {friends}
      />
      <TransactionHistory
      items={transactions}/>
    </>
  );
};
