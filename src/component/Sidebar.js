import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, PeopleAlt } from '@mui/icons-material';
import {useCollection} from "react-firebase-hooks/firestore"
import { db } from '../firebase';
import { collection,query } from 'firebase/firestore';

function Sidebar() {
  const channelRef = query(collection(db,"rooms"))
  const[channels, loading,error] = useCollection(channelRef);
  return (
    <div className='w-1/5 bg-gradient-to-b from-fuchsia-950 from-50% via-fuchsia-800 to-fuchsia-700 h-auto text-white px-1 py-3 '>
      <h1 className='text-lg'>Rohit Phalke</h1>
      <div className='flex justify-between items-center'>
        <h4 className='text-sm'>Rohit45</h4>
        <CreateIcon/>
      </div><hr className='w-full mt-2 '/> 
      
      <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
      <SidebarOption Icon={Inbox} title="Mention & Reaction"/>
      <SidebarOption Icon={Drafts} title="Saved Items"/>
      <SidebarOption Icon={BookmarkBorder} title="Channel Browser"/>
      <SidebarOption Icon={PeopleAlt} title="Peope & User Groups"/>
      <SidebarOption Icon={Apps} title="Apps"/>
      <SidebarOption Icon={FileCopy} title="File Browser"/>
      <SidebarOption Icon={ExpandLess} title="Show Less"/>
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channel"/>
      <hr className='mt-2 '/>
      <SidebarOption Icon={Add}  addChannelOption title="Add Channel"/>
      {channels?.docs.map(doc =>(
        <SidebarOption key={doc.id} id={doc.id}  title={doc.data().name}/>
      ))}
    </div>
  )
}

export default Sidebar
