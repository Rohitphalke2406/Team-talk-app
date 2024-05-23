import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Chatbox from './component/Chatbox';


function App() {
  return (
    <div className="App">
       <Router>
      <>
      <Header />
      <div className='flex '>
          <Sidebar />
        
      
        <Routes>
        <Route path="/" element={<Chatbox/>}/>
        
        </Routes>
        </div>
      </>
    </Router>
    </div>
  );
}

export default App;
