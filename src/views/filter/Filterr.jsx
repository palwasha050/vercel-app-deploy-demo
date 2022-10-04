import React, { useContext, useState } from 'react';
import { ListGroup, Dropdown, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ConfigContext } from '../../contexts/ConfigContext' 
import DropdownEXP from '../report/DropdownEXP';
import {BiFilterAlt} from 'react-icons/bi'

const Filterr = () => {
    const configContext = useContext(ConfigContext);
    const { rtlLayout } = configContext.state;
    
  return (
    <div className='m-20 ml-96 align-right bg-black '>
      <ListGroup.Item as="li" bsPrefix=" ">
<Dropdown alignRight={rtlLayout} className="drp-user">
  <Dropdown.Toggle as={Link} variant="link" to="#" id="dropdown-basic">
    <BiFilterAlt size={30} />
  </Dropdown.Toggle>
  <Dropdown.Menu alignRight>
           <DropdownEXP/>
  </Dropdown.Menu>
</Dropdown>
</ListGroup.Item>
</div>
  )
}

export default Filterr
