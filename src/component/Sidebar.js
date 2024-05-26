import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import SidebarOption from './SidebarOption';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import { Add, Apps, BookmarkBorder, Drafts, ExpandLess, ExpandMore, FileCopy, Inbox, PeopleAlt } from '@mui/icons-material';
import {useCollection} from "react-firebase-hooks/firestore"
import { auth, db } from '../firebase';
import { collection,query } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

function Sidebar() {
  const channelRef = query(collection(db,"rooms"))
  const[channels] = useCollection(channelRef);
  const[user] = useAuthState(auth);
  return (
    <div className='w-1/5 bg-gradient-to-b from-fuchsia-950 from-50% via-fuchsia-800 to-fuchsia-700 h-max text-white px-1 py-3 '>
      <h1 className='text-lg'>{user?.displayName}</h1>
      <div className='flex justify-between items-center'>
        <h4 className='text-sm'>{user?.email}</h4>
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
