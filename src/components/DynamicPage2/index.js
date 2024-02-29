import React, {useEffect, useState} from 'react';

function DynamicPage2({ data }) {
 

  console.log(data);
  return (
    <div>
      <h1 style={{textTransform: "capitalize"}}>
        {data.data}
      </h1>
      
    </div>
  )
}

export default DynamicPage2;