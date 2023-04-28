import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Users from './components/Users';
import Daniel from './Daniel';
import NotFound from './components/NotFound';
import Display from './components/Display';
import ContentA from './components/Youtube/ContentA';
import ContentB from './components/Youtube/ContentB';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<ContentA />} />
        <Route path='/contentb' element={<ContentB />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
