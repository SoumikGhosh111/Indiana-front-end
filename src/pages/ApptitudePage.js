import React from 'react'; 
import DynamicPage2 from '../components/DynamicPage2';
import { aptitudeDemoData } from '../demodata/aptitudeDemoData';

function ApptitudePage() {
  //after api call this data will be passed to the dynamic pages

  
  return (
    <div>
      <DynamicPage2 data = {aptitudeDemoData} />

    </div>
  )
}

export default ApptitudePage