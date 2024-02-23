import React from 'react'; 
import "./styles.css"; 

function SubjectSection({lastVisited}) {
  return (
    <div className='subject-section-wrapper'>
        <h3>Subjects</h3>
        <div className='subject-section-subjects-cards'>
            {/* ...Cards... */}
            <div className='subject-card'>
                <div className='sub-img'>
                    <img src='https://picsum.photos/id/301/1920/1080'/>
                </div>
                <div className='sub-name'>
                    <p>Quantative Aptitude</p>
                </div>
                {lastVisited && (
                    <>
                        <span className='last-visited'>{}2 Days ago</span>
                    </>
                )}
            </div>


            <div className='subject-card'>
                <div className='sub-img'>
                    <img src='https://picsum.photos/id/302/1920/1080'/>
                </div>
                <div className='sub-name'>
                    <p>Verbal Reasoning</p>
                </div>
                {lastVisited && (
                    <>
                        <span className='last-visited'>{}2 Days ago</span>
                    </>
                )}
            </div>


            <div className='subject-card'>
                <div className='sub-img'>
                    <img src='https://picsum.photos/id/340/1920/1080'/>
                </div>
                <div className='sub-name'>
                    <p>Non-verbal Reasoning</p>
                </div>
                {lastVisited && (
                    <>
                        <span className='last-visited'>{}2 Days ago</span>
                    </>
                )}
            </div>



            <div className='subject-card'>
                <div className='sub-img'>
                    <img src='https://picsum.photos/id/304/1920/1080'/>
                </div>
                <div className='sub-name'>
                    <p>General Science</p>
                </div>
                {lastVisited && (
                    <>
                        <span className='last-visited'>{}2 Days ago</span>
                    </>
                )}
            </div>



            <div className='subject-card'>
                <div className='sub-img'>
                    <img src='https://picsum.photos/id/305/1920/1080'/>
                </div>
                <div className='sub-name'>
                    <p>Indian History</p>
                </div>
                {lastVisited && (
                    <>
                        <span className='last-visited'>{}2 Days ago</span>
                    </>
                )}
            </div>



            <div className='subject-card'>
                <div className='sub-img'>
                    <img src='https://picsum.photos/id/306/1920/1080'/>
                </div>
                <div className='sub-name'>
                    <p>World Geofraphy </p>
                </div>
                {lastVisited && (
                    <>
                        <span className='last-visited'>{}2 Days ago</span>
                    </>
                )}
            </div>



            <div className='subject-card'>
                <div className='sub-img'>
                    <img src='https://picsum.photos/id/307/1920/1080'/>
                </div>
                <div className='sub-name'>
                    <p>Computer Fundamentals</p>
                </div>
                {lastVisited && (
                    <>
                        <span className='last-visited'>{}2 Days ago</span>
                    </>
                )}
            </div>



            <div className='subject-card'>
                <div className='sub-img'>
                    <img src='https://picsum.photos/id/308/1920/1080'/>
                </div>
                <div className='sub-name'>
                    <p>Python Programming</p>
                </div>
                {lastVisited && (
                    <>
                        <span className='last-visited'>{}2 Days ago</span>
                    </>
                )}
            </div>


            
            <div className='subject-card'>
                <div className='sub-img'>
                    <img src='https://picsum.photos/id/309/1920/1080'/>
                </div>
                <div className='sub-name'>
                    <p>Subject Name</p>
                </div>
                {lastVisited && (
                    <>
                        <span className='last-visited'>{}2 Days ago</span>
                    </>
                )}
            </div>



            <div className='subject-card'>
                <div className='sub-img'>
                    <img src='https://picsum.photos/id/310/1920/1080'/>
                </div>
                <div className='sub-name'>
                    <p>Subject Name</p>
                </div>
                {lastVisited && (
                    <>
                        <span className='last-visited'>{}2 Days ago</span>
                    </>
                )}
            </div>
        </div>
    </div>
  )
}

export default SubjectSection; 