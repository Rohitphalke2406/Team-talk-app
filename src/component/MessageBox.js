import React from 'react'

function MessageBox({message, timestamp, user, userImage}) {
  return (
    <div className='flex items-center p-5'>
      <img src={userImage} alt=""  className='w-12 h-12 rounded-2xl mr-2'/>
      <div>
        <h4>
            {user} <span style={{color:'gray', fontSize:10, marginRight:10 , fontWeight:300}}>{new Date(timestamp?.toDate()).toUTCString()}</span>
        </h4>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default MessageBox
