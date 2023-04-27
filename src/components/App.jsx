import { Card } from "./Profile/Profile";
import {Statics} from "./Statics/Statics";
import {FriendList} from "./FriendList/FriendList";
import {TransactionHistory} from "./TransactionHistory/TransactionHistory"
import user from "../data/user.json";
import data from "../data/data.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json"


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
      title = 'Upload stats'/>
      <FriendList
      friends = {friends}
      />
      <TransactionHistory
      items={transactions}/>
    </>
  );
};
