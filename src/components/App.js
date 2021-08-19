import Profile from "./profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from "../user.json";
import statisticalData from "../statistical-data.json";
import friends from "../friend-list.json";
import transactions from "../transactions.json";
import PropTypes from "prop-types";

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
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
