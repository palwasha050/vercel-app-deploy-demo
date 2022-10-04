import React, { useContext, useState } from 'react';
import { ListGroup, Dropdown, Media } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ChatList from '../../layouts/AdminLayout/NavBar/NavRight/ChatList';
import { ConfigContext } from '../../contexts/ConfigContext';
import useAuth from '../../hooks/useAuth';
import {FaUserCheck} from 'react-icons/fa'

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
      <ListGroup as="ul" bsPrefix=" " className="navbar-nav ml-auto" id="navbar-right">
        <ListGroup.Item as="li" bsPrefix=" ">
          <Dropdown>
            <Dropdown.Toggle as={Link} variant="link" to="#" className="displayChatbox" onClick={() => setListOpen(true)}>
              <FaUserCheck size={30} />
            </Dropdown.Toggle>
          </Dropdown>
        </ListGroup.Item>

      </ListGroup>
      <ChatList listOpen={listOpen} closed={() => setListOpen(false)} />
    </React.Fragment>
  );
};

export default NavRight;
