import React from 'react'; 
import "./styles.css"; 

function DailyPracticeSection() {
  return (
    <div className='daily-practice-wrapper'>
      <h3>Daily Practice</h3>
      <div className='daily-practice-section-div'>
        {/* Each Card Layout  */}
      <div className='daily-practice-card'> 
        <div className='daily-practice-card-img'>
          <img src='https://picsum.photos/id/350/1920/1080'/>
        </div>
        <div className='last-visited-info'>
          <p className='subject-name'>Quantative Mechanics</p>
          <p className='subject-last-visited'>today</p>
        </div>
      </div>

      <div className='daily-practice-card'> 
        <div className='daily-practice-card-img'>
          <img src='https://picsum.photos/id/351/1920/1080'/>
        </div>
        <div className='last-visited-info'>
          <p className='subject-name'>Quantative Mechanics</p>
          <p className='subject-last-visited'>3 days ago</p>
        </div>
      </div>


      <div className='daily-practice-card'> 
        <div className='daily-practice-card-img'>
          <img src='https://picsum.photos/id/352/1920/1080'/>
        </div>
        <div className='last-visited-info'>
          <p className='subject-name'>Quantative Mechanics</p>
          <p className='subject-last-visited'>today</p>
        </div>
      </div>


      <div className='daily-practice-card'> 
        <div className='daily-practice-card-img'>
          <img src='https://picsum.photos/id/353/1920/1080'/>
        </div>
        <div className='last-visited-info'>
          <p className='subject-name'>Quantative Mechanics</p>
          <p className='subject-last-visited'>5 days ago</p>
        </div>
      </div>



      <div className='daily-practice-card'> 
        <div className='daily-practice-card-img'>
          <img src='https://picsum.photos/id/354/1920/1080'/>
        </div>
        <div className='last-visited-info'>
          <p className='subject-name'>Quantative Mechanics</p>
          <p className='subject-last-visited'>1 year ago</p>
        </div>
      </div>



      <div className='daily-practice-card'> 
        <div className='daily-practice-card-img'>
          <img src='https://picsum.photos/id/355/1920/1080'/>
        </div>
        <div className='last-visited-info'>
          <p className='subject-name'>Quantum Physics</p>
          <p className='subject-last-visited'>2 days ago</p>
        </div>
      </div>
    </div>
    </div>
    
  )
}

export default DailyPracticeSection; 