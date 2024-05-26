import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Header from './component/Header';
import Sidebar from './component/Sidebar';
import Chatbox from './component/Chatbox';
import { auth } from './firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import Login from './component/Login';
import Spinner from 'react-spinkit';

function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return(
      <div className=''>
        <div className='  h-screen flex justify-center items-center flex-col text-center pb-24 '>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Slack_icon_2019.svg/2048px-Slack_icon_2019.svg.png" alt=""  className='h-24  m-14'/>
          <Spinner name="ball-spin-fade-loader" color="green" fadeIn = "none"/>
        </div>
      </div>
    )
  }

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
            <Header />
            <div className='flex h-screen'>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Chatbox />} />
              </Routes>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
