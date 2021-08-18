import stl from "./FriendList.module.css";

const FriendList = ({ friends }) => {
  return (
    <ul className={stl.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <li className={stl.item} key={id}>
          <span className={isOnline ? stl.status : stl.online}></span>
          <img className={stl.avatar} src={avatar} alt={name} width="48" />
          <p className={stl.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
