import { useState } from "react";
import { FormSplitBill } from "./components/FormSplitBill";
import { FormAddFriend } from "./components/FormAddFriend";
import { Button } from "./components/Button";
import { FriendsList } from "./components/FriendsList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friendsList, setFriendsList] = useState([...initialFriends]);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowFriend() {
    setShowAddFriend(() => !showAddFriend);
  }

  function handleAddFriend(friendObj) {
    setFriendsList((friends) => [...friends, friendObj]);
  }

  function handleRemoveFriend(id) {
    setFriendsList((friends) => friends.filter((friend) => friend.id !== id));
  }

  function handleSelectionFriend(friendObj) {
    setSelectedFriend((currentObj) =>
      currentObj?.id === friendObj.id ? null : friendObj
    );
  }

  function handleSplitBill(valueBill) {
    setFriendsList((friends) =>
      friends.map((friend) => {
        const newFriend = { ...friend, balance: friend.balance + valueBill };
        if (selectedFriend.id === friend.id) return newFriend;
        return friend;
      })
    );
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friendsList={friendsList}
          onRemoveFriend={handleRemoveFriend}
          onSelectionFriend={handleSelectionFriend}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend onAddFriend={handleAddFriend} />}
        <Button onClick={() => handleShowFriend()}>
          {showAddFriend ? "Close" : "Add friend"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
          key={selectedFriend.id}
        />
      )}
    </div>
  );
}
