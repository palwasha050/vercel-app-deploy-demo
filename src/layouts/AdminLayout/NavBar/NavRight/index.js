import React, { useContext, useState } from 'react';
import { ListGroup, Dropdown, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';

import ChatList from './ChatList';
import { ConfigContext } from '../../../../contexts/ConfigContext';
import useAuth from '../../../../hooks/useAuth';

import avatar1 from '../../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../../assets/images/user/avatar-3.jpg';
import avatar4 from '../../../../assets/images/user/avatar-4.jpg';

const NavRight = () => {
  const configContext = useContext(ConfigContext);
  const { logout } = useAuth();
  const { rtlLayout } = configContext.state;

  const [listOpen, setListOpen] = useState(false);

  const handleLogout = async () => {
    try {
      //handleClose();
      await logout();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <React.Fragment>
      
    </React.Fragment>
  );
};

export default NavRight;
