import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './components/About-body';
import Forum from './Forum';
import MedQuiz from './components/Medquiz';
function App() {
  return (
    <div>
      <Routes>
      <Route>
        <Route path='/forum' element={<Forum/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/MedQuiz' element={<MedQuiz/>}/>
        <Route path='/' element={<Home/>}/>
      </Route>
      </Routes>
    </div>
  );
}

export default App;
