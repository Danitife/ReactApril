import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home/Home';
import Users from './components/Users';
import Daniel from './Daniel';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/home' element={<Navigate to="/" />} />
        <Route path='/users' element={<Users />} />
        <Route path='/daniel' element={<Daniel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
