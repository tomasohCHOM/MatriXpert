import { Link, Route, Routes } from 'react-router-dom';
import MatriXpert from './components/MatriXpert';
import Help from './components/Help/Help';
import { useState } from 'react';
import Header from './components/Header/Header';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    isOpen === true ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <>
      <Header toggleSidebar={toggleSidebar}></Header>
      <Routes>
        <Route path="/" element={<MatriXpert isOpen={isOpen} toggleSidebar={toggleSidebar} />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  )
}

export default App
