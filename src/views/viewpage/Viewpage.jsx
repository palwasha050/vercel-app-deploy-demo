import React,{useState} from 'react';
import ViewpageSidebar from './ViewpageSidebar';
import ViewpageLeftSide from './ViewpageLeftSide';

const ViewPage = () => {
  const [displayedSidebar, setDisplayedSidebar] = useState(true)

  return (
    <>
      <ViewpageLeftSide/>
      <ViewpageSidebar/>

      
    </>
  )
}

export default ViewPage;