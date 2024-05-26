import { Button } from '@mui/material';
import React, { useState } from 'react';
import { auth, db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

function Chatinput({ channelName, channelId, chatref }) {
  const [input, setInput] = useState("");
  const[user] = useAuthState(auth)
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
        user: user.displayName,
        userImage: user.photoURL,
      });
      console.log("Message sent successfully");

      // chatref.current.scrollIntoView({
      //   behavior: 'smooth',
      // })
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
