import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import ApptitudePage from './pages/ApptitudePage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import './App.css';

function App() {
  return (
    <div >
      <Router>
      <Navbar />
        <Routes>
          <Route path='/' element={<DashboardPage />}/>
          <Route path='/aptitude' element={<ApptitudePage /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;