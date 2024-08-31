import { useState } from "react";
import { Button } from "./Button";

export function FormSplitBill({ 
  selectedFriend,
  onSplitBill
}) {
  const [bill, setBill] = useState(0);
  const [paidUser, setPaidUser] = useState(0);
  const [whoIsPaid, setWhoIsPaid] = useState('user');
  const paidFriend = bill - paidUser;

  function handleWhoIsPaying(e) {
    setWhoIsPaid(e.target.value)
  }

  function handleSplitBill(e) {
    e.preventDefault();
    if (!bill || !paidUser) return;

    onSplitBill(whoIsPaid === 'user' ? paidFriend : -paidUser);
  }
  
  return (
    <form
      className="form-split-bill"
      onSubmit={handleSplitBill}
    >
      <h2>Split a bill with {selectedFriend.name}</h2>
      <label>💵Bill value</label>
      <input
        type="text"
        placeholder="20zł"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      
      <label>👩‍🦱Your expense</label>
      <input
        type="text"
        placeholder="15zł"
        value={paidUser}
        onChange={(e) => setPaidUser(Number(e.target.value) > bill ? paidUser : Number(e.target.value))}
      />
      
      <label>👨‍🦱{selectedFriend.name}'s expense</label>
      <input 
        type="text" 
        placeholder="0zł"
        disabled
        value={paidFriend}
      />

      <label>🤑Who is paying the bill?</label>
      <select
        value={whoIsPaid}
        onChange={handleWhoIsPaying}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split bill</Button>
    </form>
  );
}
