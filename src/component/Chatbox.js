import React, { useEffect, useRef } from 'react';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import Chatinput from './Chatinput';
import { grey } from '@mui/material/colors';
import { useSelector } from 'react-redux';
import { selectRoomId } from '../features/counter/appSlice';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import { collection, doc, orderBy, query } from 'firebase/firestore';
import MessageBox from './MessageBox';

function Chatbox() {
  const chatref = useRef(null);
  const roomId = useSelector(selectRoomId);
  const roomDocRef = roomId && doc(db, 'rooms', roomId);
  const roomMessagesQuery = roomId && query(collection(db, 'rooms', roomId, 'messages'), orderBy('timestamp', 'asc'));

  const [roomDetails] = useDocument(roomDocRef);
  const [roomMessages, loading] = useCollection(roomMessagesQuery);

  useEffect(() =>{
    chatref?.current?.scrollIntoView({
      behavior: 'smooth',

    });
  }, [roomId, loading])

  return (
    <div className='w-4/5  h-screen'>
      {roomDetails && roomMessages && (
          <><div className='w-full flex justify-between items-center px-2 border-b-2 border-gray-400 py-2'>
          <div className='flex items-center'>
            <h4 className='font-bold mr-2'>#{roomDetails?.data()?.name}</h4>
            <StarBorderIcon className='cursor-pointer' sx={{ fontSize: 20 }} />
          </div>
          <div className='flex items-center'>
            <InfoIcon sx={{ color: grey[600], fontSize: 20 }} />
            <h4 className='ml-1 text-sm'>Details</h4>
          </div>
        </div><div>
            {roomMessages?.docs.map((doc) => {
              const { message, timestamp, user, userImage } = doc.data();

              return (
                <MessageBox
                  key={doc.id}
                  message={message}
                  timestamp={timestamp}
                  user={user}
                  userImage={userImage} />
              );
            })}
          </div><div className='pb-52' ref={chatref}>

          </div><Chatinput chatref={chatref} channelName={roomDetails?.data()?.name} channelId={roomId} /></>
      )}
      
    </div>
  );
}

export default Chatbox;
