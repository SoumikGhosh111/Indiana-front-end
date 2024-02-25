import React, { useEffect, useState } from 'react';
import "./styles.css";
import { capitalize } from '@mui/material';

function DynamicPage1MainBodyContent({ heading, desc, subHeading, subDesc }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [subTopicLoading, setSubTopicLoading] = useState(true);

  useEffect(() => {
    if (heading.length > 0) {
      setIsLoaded(true);
      setSubTopicLoading(true); 
    }
  }, [heading, subHeading, desc, subDesc]);


  useEffect(() => {
    setSubTopicLoading(false);
  }, [desc]);


  console.log(desc, "this is desc");
  return (
    <>
      {isLoaded ? (
        <div>
          <h1 style={{ textTransform: "capitalize" }}>{heading}</h1>
          <p>{desc}</p>
          {subTopicLoading && (
            <>
              <h3>{subHeading}</h3>
              <p>{subDesc}</p>
            </>
          )}
        </div>
      ) : (
        <>Loading ...</>
      )}
    </>
  )
}

export default DynamicPage1MainBodyContent