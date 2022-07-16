
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AppNavBar from './components/Common/AppNavBar';
import CreatePage from './pages/CreatePage';
import ReadPage from './pages/ReadPage';
import UpdatePage from './pages/UpdatePage';

const App = () => {
  return (
    <div>
    <AppNavBar></AppNavBar>
      <Routes>
        <Route path="/" element={<ReadPage></ReadPage>}></Route>
        <Route path="/create" element={<CreatePage></CreatePage>}></Route>
        <Route path="/update" element={<UpdatePage></UpdatePage>}></Route>

      </Routes>
    </div>
  );
};

export default App;
