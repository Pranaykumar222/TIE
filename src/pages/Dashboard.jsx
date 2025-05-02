import React from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import Main from '../components/Main';



const Dashboard = () => {
  return (
   <>
   <div sx={{ position: 'relative', height: '87px' }}>
    <Sidebar/>
    <Navbar/>
    <Main />
   </div>
   </>
  );
};

export default Dashboard;