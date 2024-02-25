import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import FormatListNumberedRoundedIcon from '@mui/icons-material/FormatListNumberedRounded';
import DynamicPage1MainBodyContent from './DynamicPage1MainBodyContent';
import { exampleLists } from '../../demodata/dynamicPage1DemoData';
import "./styles.css";





export default function DynamicPage1() {
//   const [demoData, setDemoData] = useState(null); 
  const demoData = exampleLists; 
    const [openState, setOpenState ] =useState(exampleLists.map(()=> false)); 
    const [isLoaded, setIsLoaded] = useState(false); 

    // for the dynamicPage1MainBody
    const [heading, setHeading] = useState(""); 
    const [subHeading, setSubHeading] = useState(""); 
    const [desc, setDesc] = useState(""); 
    const [subTopicDesc, setSubTopicDesc] = useState(""); 

    useEffect(()=> { 
        // setDemoData(exampleLists); 
        if(demoData !== null){ 
            setIsLoaded(true); 
        } 
    }, []); 

    console.log(exampleLists); 

    const handleClick = (indx) => {
        const newState = openState.map((open, i) =>(i === indx ? !open : open)); 
        setOpenState(newState);
        setHeading(demoData[indx].data);
        setDesc(demoData[indx].desc); 
        console.log(demoData[indx].desc);   
    };
    const handleSubDivClick = (indx, subIndx) => { 
        setSubHeading(demoData[indx].subTopics[subIndx].data); 
        setSubTopicDesc(demoData[indx].subTopics[subIndx].desc); 
    }

    return (
        <div className='dynamic-page-1-wrapper'>
            <div className='dynamic-page-1-side-bar'>
                {isLoaded ? (
                    <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    {demoData.map((item, indx) => (
                        <>
                            <ListItemButton onClick={()=>handleClick(indx)} sx={{ background: "var(--lightgrey)", borderRadius: "10px", ml: 2, mt: 2 }} >
                                <ListItemText primary={item.data} sx={{textTransform: "capitalize"}}  />
                            </ListItemButton>

                            <Collapse in={openState[indx]} timeout="auto" unmountOnExit key={indx}>
                                <List component="div" disablePadding>
                                    {item.subTopics.map((item, subIndx) => (
                                        <>
                                            <ListItemButton sx={{ ml: 6, mt: 1, borderRadius: "10px" }} onClick={()=>handleSubDivClick(indx, subIndx)}>
                                                <ListItemIcon >
                                                    <FormatListNumberedRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary={item.data} secondary={`${item.QS} Questions`} id={subIndx} />
                                            </ListItemButton>
                                        </>
                                    ))}

                                </List>
                            </Collapse>
                        </>
                    ))}

                </List>
                ):(<>Loading ....</> )}
                
            </div>
            <div className='dynamic-page-1-main-body'>
                <DynamicPage1MainBodyContent heading={heading} desc={desc} subHeading={subHeading} subDesc={subTopicDesc}  />
            </div>
        </div>

    );
}





{/* <ListItemButton onClick={handleClick} sx={{ background: "var(--lightgrey)", borderRadius: "10px", ml: 2 }}>
                         <ListItemIcon>

                        </ListItemIcon> 
                        <ListItemText primary="Apptitude"  />
                    </ListItemButton>


                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding>
                            <ListItemButton sx={{ ml: 6, mt: 1, borderRadius: "10px" }}>
                                <ListItemIcon >
                                    <FormatListNumberedRoundedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Resoning" />
                            </ListItemButton>
                        </List>
                    </Collapse> */}
