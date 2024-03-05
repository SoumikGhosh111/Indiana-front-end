import Navbar from './components/Navbar';
import DashboardPage from './pages/DashboardPage';
import ApptitudePage from './pages/ApptitudePage';
import ReasoningPage from './pages/ReasoningPage';
import GSPage from './pages/GSPage';
import ProgramingPage from './pages/ProgramingPage';
import EngineeringPage from './pages/EngineeringPage';
import DynamicPge1 from './components/DynamicPage1';
import DynamicPAge2 from './components/DynamicPage2';
import Drawer from './components/NavbarDrawer/Drawer';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"; 
import './App.css';

function App() {
  return (
    <div >
      <Router>
      <Navbar />
      <Drawer />
        <Routes>
          <Route path='/' element={<DashboardPage />}/>
          <Route path='/aptitude' element={<ApptitudePage /> }/>
          <Route path='/reasoning' element={<ReasoningPage/> }/>
          <Route path='/gs' element={<GSPage /> }/>
          <Route path='/programing' element={<ProgramingPage /> }/>
          <Route path='/engineering' element={<EngineeringPage /> }/>
          <Route path='/dynamic_page_1' element={<DynamicPge1 /> }/>
          <Route path='/dynamic_page_2' element={<DynamicPAge2 /> }/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
