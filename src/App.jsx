import { Link, Route, Routes } from 'react-router-dom';
import MatriXpert from './components/MatriXpert';
import Help from './components/Help/Help';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MatriXpert />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </>
  )
}

export default App
