import { Route, Routes } from 'react-router-dom';
import MatriXpert from './components/MatriXpert';
import Help from './components/Help/Help';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<MatriXpert />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  )
}

export default App
