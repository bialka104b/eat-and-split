import { Button } from "./Button";

export function FriendItem({
  friendObj,
  onRemoveFriend,
  onSelectionFriend,
  selectedFriend
}) {
  const isSelected = selectedFriend?.id === friendObj.id;

  return (
    <li className={isSelected? 'selected': ''}>
      <img
        src={friendObj.image}
        alt={friendObj.name}
      />
      <h3>{friendObj.name}</h3>
      {friendObj.balance < 0 && (
        <p className="red">
          You owe {friendObj.name} {Math.abs(friendObj.balance)}zł
        </p>
      )}
      {friendObj.balance > 0 && (
        <p className="green">
          {friendObj.name} owes you {friendObj.balance}zł
        </p>
      )}
      {friendObj.balance === 0 && <p>You and {friendObj.name} are even.</p>}
      <Button
        onClick={() => onSelectionFriend(friendObj)}
      >
        {isSelected ? 'Close' : 'Select'}
      </Button>
      <Button
        onClick={() => onRemoveFriend(friendObj.id)}
      >
        ❌
      </Button>
    </li>
  );
}
