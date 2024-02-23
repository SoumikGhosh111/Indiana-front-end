import React from 'react'; 
import HeroSection from '../components/DashboardComps/HeroSection';
import SubjectSection from '../components/DashboardComps/SubjectSection';
import DailyPracticeSection from '../components/DashboardComps/DailyPracticeSection';
import "../index.css"; 

function DashboardPage() {
  return (
    <div className='dashboard-wrapper'>
      <div className='dashboard-div'>
          <HeroSection /> 
          <SubjectSection lastVisited={false} /> 
          <DailyPracticeSection />
      </div>
    </div>
  )
}

export default DashboardPage; 