import stl from "./FriendItem.module.css";

const FriendItem = ({ friends }) => {
  const online = stl.online;
  const offline = stl.status;
  return friends.map(({ id, isOnline, name, avatar }) => (
    <li className={stl.item} key={id}>
      <span className={isOnline ? offline : online}></span>
      <img className={stl.avatar} src={avatar} alt={name} width="48" />
      <p className={stl.name}>{name}</p>
    </li>
  ));
};

export default FriendItem;

// FriendItem.propTypes = {
//   id: PropTypes.string,
//   avatar: PropTypes.string,
//   name: PropTypes.string,
//   isOnline: PropTypes.bool,
// };
