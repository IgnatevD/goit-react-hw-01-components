import Profile from "./profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from "../data-json/user.json";
import statisticalData from "../data-json/statistical-data.json";
import friends from "../data-json/friend-list.json";
import transactions from "../data-json/transactions.json";
import PropTypes from "prop-types";

const App = () => {
  const { name, tag, location, avatar, stats } = user;
  return (
    <>
      <Profile
        name={name}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;

App.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
  friends: PropTypes.array,
  items: PropTypes.array,
};
