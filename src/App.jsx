import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { EmployeeProvider } from './context/EmployeeContext';
import CreateEmployee from './pages/CreateEmployee';
import './App.css';

function App() {
  return (
    <EmployeeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
        </Routes>
      </Router>
    </EmployeeProvider>
  );
}

export default App;
