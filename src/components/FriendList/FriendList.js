import PropTypes from "prop-types";
import FriendItem from "../FriendItem/FriendItem";
import stl from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={stl.friendList}>
      <FriendItem friends={friends} />
    </ul>
  );
};

export default FriendList;

FriendList.propTypes = {
  friends: PropTypes.array,
};
