import React from 'react';
import { Row, Col, Card, CardHeader,CardBody } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import avatar1 from '../../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../../assets/images/user/avatar-3.jpg';
import { Donutchart } from '../../donutChart/Donutchart';
import MyComponent from '../../filter/ButtonFilter';
import Filterr from '../../filter/Filterr';
import { cardsData } from './Data';


const DashDefault = () => {

  return (
    <React.Fragment>
      <Filterr className='align-right'/>
      <Row>
      {cardsData.map((card, id) => { 
        return(
      <Col md={6} xl={4}>
          <Card>
            <Card.Header><h3 className='text-center font-mono font-extrabold'>{card.title}</h3></Card.Header>
            <Card.Body>
              <h4 className='text-left font-mono font-extrabold' >Total: 30</h4>
              <Donutchart/>
            </Card.Body>
          </Card>
      </Col>
      );
    })}  
      </Row>
      
    </React.Fragment>
  );
};

export default DashDefault;
