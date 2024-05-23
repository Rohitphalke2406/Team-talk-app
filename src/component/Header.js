import { Avatar } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpIcon from '@mui/icons-material/Help';
import React from 'react'

function Header() {
  return (
    <header className='flex justify-between items-center bg-gradient-to-r from-fuchsia-950 from-50% via-fuchsia-800 to-fuchsia-700  h-14 sticky top-0'>
      <div className='px-3 w-1/3 flex justify-between items-center'>
      <Avatar sx={{width:30, height:30 }} className='cursor-pointer hover:opacity-70'/>
      <AccessTimeIcon sx={{color:'lightgrey'}} className='cursor-pointer hover:opacity-75'/>
      </div>
      <div className='w-1/3 flex justify-between items-center'> 
        <input type="search" name="" id="" placeholder='Search...' className='w-full px-2 py-1 mr-2 rounded-xl'/>
        <SearchIcon sx={{ position: 'absolute', left: '64%',}} className='text-zinc-800 cursor-pointer hover:opacity-30 '/>
      </div>
      <div className='w-1/3 flex  items-center'>
        <HelpIcon sx={{color: 'lightgrey', display:'flex', alignItems:'center',right:'10px', position:'absolute' }} className='cursor-pointer hover:opacity-80'/>
      </div>
    </header>
  )
}

export default Header
