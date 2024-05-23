import React from 'react'
import { db } from '../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { enterRoom } from '../features/counter/appSlice';

function SidebarOption({Icon, title, addChannelOption,id}) {
  const dispatch = useDispatch();
  
  const addChannel = async () => {
    const channelName = prompt('Please enter your channel name');
    if (channelName) {
      try {
       const docRef = await addDoc(collection(db, 'rooms'), {
          name: channelName,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    }
  };

  const selectChannel = ()=> {
    if(id){
      dispatch(enterRoom({
        roomId :id
      }))
    }
  }
  return (
    <div className='flex items-center mt-2 p-2 cursor-pointer hover:bg-gray-800 hover: rounded-full ' onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon fontSize="small" className='mr-3' />}
      {Icon ? (
        <h3 className='text-sm'>{title}</h3>
      ) : (
        <div className='flex items-center'>
          <span className='ml-2 mr-1'>#</span> 
          <h3 className='text-lg pl-3'>{title}</h3>
        </div> 
      )}
    </div>
  )
}

export default SidebarOption
