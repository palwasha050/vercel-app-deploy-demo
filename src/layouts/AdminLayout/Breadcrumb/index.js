import React, { useState, useEffect } from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import navigation from '../../../menu-items';
import { BASE_TITLE, BASENAME } from '../../../config/constant';

const Breadcrumb = () => {
  const [main, setMain] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {
    navigation.items.map((item, index) => {
      if (item.type && item.type === 'group') {
        getCollapse(item, index);
      }
      return false;
    });
  });

  const getCollapse = (item, index) => {
    if (item.children) {
      item.children.filter((collapse) => {
        if (collapse.type && collapse.type === 'collapse') {
          getCollapse(collapse, index);
        } else if (collapse.type && collapse.type === 'item') {
          if (document.location.pathname === BASENAME + collapse.url) {
            setMain(item);
            setItem(collapse);
          }
        }
        return false;
      });
    }
  };

  let mainContent, itemContent;
  let breadcrumbContent = '';
  let title = '';

  if (main && main.type === 'collapse') {
    mainContent = (
      <ListGroup.Item as="li" bsPrefix=" " className="breadcrumb-item">
        <Link to="#">{main.title}</Link>
      </ListGroup.Item>
    );
  }



  return <React.Fragment>{breadcrumbContent}</React.Fragment>;
};

export default Breadcrumb;
