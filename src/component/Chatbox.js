import React from 'react'
import StarBorderIcon from '@mui/icons-material/StarBorder';
import InfoIcon from '@mui/icons-material/Info';
import Chatinput from './Chatinput';
import { grey } from '@mui/material/colors';

function Chatbox() {
  return (
    <div className=' w-4/5 bg-gray-200 h-screen  '>
      <div className=' w-full flex justify-between items-center px-2 border-b-2 border-gray-400 py-2'>
        <div className='flex items-center'>
          <h4 className='font-bold mr-2'>#room-name</h4>
          <StarBorderIcon className='cursor-pointer' sx={{fontSize:20}}/>
        </div>
        <div className='flex items-center '>
          <InfoIcon sx={{color:grey[600] , fontSize:20}}/>
          <h4 className='ml-1 text-sm'>Details</h4>
        </div>
      </div>
      <div>
          {/* chat messages */}
        </div>
        <Chatinput/>
    </div>
  )
}

export default Chatbox
