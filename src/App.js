import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import ApptitudePage from './pages/ApptitudePage';
import ReasoningPage from './pages/ReasoningPage';
import GSPage from './pages/GSPage';
import ProgramingPage from './pages/ProgramingPage';
import EngineeringPage from './pages/EngineeringPage';
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
          <Route path='/reasoning' element={<ReasoningPage/> }/>
          <Route path='/gs' element={<GSPage /> }/>
          <Route path='/programing' element={<ProgramingPage /> }/>
          <Route path='/engineering' element={<EngineeringPage /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
