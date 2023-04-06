import React from 'react';
import { Row, Col, Card, CardHeader,CardBody } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Donutchart } from '../../donutChart/Donutchart';
import MyComponent from '../../filter/ButtonFilter';
import Filterr from '../../filter/Filterr';
import { cardsData } from './Data';
import DTable from '../Table';
import MyCard from '../Card1';
import MyCard2 from '../Card2';


const DashDefault = () => {
  const currentDate = new Date();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const previousMonth = new Intl.DateTimeFormat('en-US', { month: 'long' }).format(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  return (
    <React.Fragment>
      <Row>
      <Col md={6} xl={4}>
          <Card>
            <Card.Header><h3 className='text-center font-mono font-extrabold'>{previousMonth}</h3></Card.Header>
            <Card.Body>
              <MyCard2/>
            </Card.Body>
          </Card>
      </Col>
      <Col md={6} xl={4}>
          <Card>
            <Card.Header><h3 className='text-center font-mono font-extrabold'>{currentMonth}</h3></Card.Header>
            <Card.Body>
              <MyCard/>
            </Card.Body>
          </Card>
      </Col>

      </Row>

      <Row>
      <Col md={12} xl={16}>
        <DTable/>
      </Col>  
      </Row>
      
    </React.Fragment>
  );
};

export default DashDefault;
