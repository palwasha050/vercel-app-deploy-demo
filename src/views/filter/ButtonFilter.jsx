import React, { useState } from 'react'
import { IconButton } from '@mui/material';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DropdownEXP from '../report/DropdownEXP';

const MyComponent = () => {
  const [displayed, setDisplayed] = useState()
  return (
    <div>
      { displayed && <DropdownEXP /> }
      <IconButton color="primary" title="Filter" type="button" outline onClick={() => setDisplayed(!displayed)}>
      <FilterAltIcon fontSize="large" />
      </IconButton>
    
    </div>
  )
}

export default MyComponent