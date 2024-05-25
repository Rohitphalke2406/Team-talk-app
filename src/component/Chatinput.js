import { Button } from '@mui/material';
import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

function Chatinput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  console.log(channelId);

  const sendMessage = async (e) => {
    e.preventDefault();

    if (!channelId) {
      return false;
    }

    try {
      await addDoc(collection(db, "rooms", channelId, "messages"), {
        message: input,
        timestamp: serverTimestamp(),
        user: 'Rohit Phalke',
        userImage: 'https://topofthelist.net/wp-content/uploads/2016/01/Hydrangeas.jpg',
      });
      console.log("Message sent successfully");
      setInput("");
    } catch (error) {
      console.error("Error sending message: ", error);
    }
  };

  return (
    <div>
      <form className='flex items-center justify-center relative' onSubmit={sendMessage}>
        <input 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          type="text" 
          placeholder={`Message #${channelName}`} 
          className='px-2 py-2 border-2 rounded-2xl w-3/5 fixed bottom-8' 
        />
        <Button type="submit" style={{ display: 'none' }}>
          SEND
        </Button>
      </form>
    </div>
  );
}

export default Chatinput;
