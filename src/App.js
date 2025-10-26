import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro';
import Password from './pages/Password';
import Main from './pages/Main';
import Intro2 from './pages/Intro2';
import Password2 from './pages/Password2';
import Main2 from './pages/Main2';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/password" element={<Password />} />
      <Route path="/main" element={<Main />} />
      <Route path="/2" element={<Intro2 />} />
      <Route path="/password2" element={<Password2 />} />
      <Route path="/main2" element={<Main2 />} />
    </Routes>
  );
};

export default App;
