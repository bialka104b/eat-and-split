import { FriendItem } from "./FriendItem";

export function FriendsList({
  friendsList,
  onRemoveFriend,
  onSelectionFriend,
  selectedFriend
}) {
  return (
    <ul>
      {friendsList.map((friend) => {
        return <FriendItem
          friendObj={friend}
          key={friend.id}
          onRemoveFriend={onRemoveFriend}
          onSelectionFriend={onSelectionFriend}
          selectedFriend={selectedFriend}
        ></FriendItem>;
      })}
    </ul>
  );
}
