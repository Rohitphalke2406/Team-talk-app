import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import Chatinput from './Chatinput';

function Chatbox() {
  return (
    <div className=' w-full bg-red-400 h-screen  '>
      <div className='flex justify-between items-center px-2 py-2'>
        <header className='flex items-center'>
          <h4 className='font-bold mr-2'>#room-name</h4>
          <StarBorderIcon className='cursor-pointer' sx={{fontSize:20}}/>
        </header>
        <header className='flex items-center'>
          <InfoIcon/>
          <h4 className='ml-1'>Details</h4>
        </header>
        <div>
          {/* chat messages */}
        </div>
        <Chatinput/>
      </div>
    </div>
  )
}

export default Chatbox
