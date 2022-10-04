import React from "react";
import { cardsData2 } from "./Data";
import Card from 'react-bootstrap/Card';
import {Row,Col} from 'react-bootstrap';

const ViewpageLeftSide = () => {


  return (
      <div className="m-3">
    
    <label className="m-3 font-bold ml-10">Before: </label> 
    <textArea className="m-3" disabled={true} rows={4}  cols={50} placeholder={" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor viverra, sagittis neque nec, fringilla dui. Morbi non odio elementum, rutrum magna ac, eleifend velit. Etiam felis libero, interdum at viverra in, lacinia scelerisque erat. Morbi tincidunt ipsum tortor, ac aliquam nulla facilisis ac. Integer in neque ac augue maximus tristique. Phasellus nisl sapien, pellentesque eget vestibulum vel, venenatis non eros. Cras lorem justo, ultrices id leo pretium, viverra lobortis libero. In vel pulvinar lectus, scelerisque blandit purus. Donec ac pretium dui. Nunc a pulvinar ipsum. Maecenas eu justo eu nisl porta maximus rhoncus id massa. Sed sed interdum dolor. Maecenas in convallis tortor, ac auctor tortor. Sed elementum ligula ac odio posuere, ac placerat mi varius. Fusce tincidunt tellus eleifend, dignissim nunc vel, posuere leo. Donec vestibulum ultricies quam, at ullamcorper velit. Sed metus nibh, lobortis et lacinia at, ullamcorper vitae mi. Aenean tempor sem dolor, a dictum nisi posuere non. Curabitur laoreet pretium velit posuere sollicitudin. Sed tincidunt tortor in convallis vestibulum. Nam ac nisl iaculis, semper justo et, sodales elit. Morbi eu laoreet libero. Quisque aliquet turpis nulla, at posuere risus efficitur vel."}/>
    <Row className="m-2">
      {cardsData2.map((card, id) => { 
        return(
      <Col md={6} xl={4}>
          <Card>
            <Card.Body>
            {/*  <Card.Img src={require(card.img)}> </Card.Img> */}
            </Card.Body>
          </Card>
      </Col>
      );
    })}  
    </Row>




    <label className="m-3 font-bold ml-10">After: </label> 
    <textArea className="m-3" disabled={true} rows={4}  cols={50} placeholder={" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in dolor viverra, sagittis neque nec, fringilla dui. Morbi non odio elementum, rutrum magna ac, eleifend velit. Etiam felis libero, interdum at viverra in, lacinia scelerisque erat. Morbi tincidunt ipsum tortor, ac aliquam nulla facilisis ac. Integer in neque ac augue maximus tristique. Phasellus nisl sapien, pellentesque eget vestibulum vel, venenatis non eros. Cras lorem justo, ultrices id leo pretium, viverra lobortis libero. In vel pulvinar lectus, scelerisque blandit purus. Donec ac pretium dui. Nunc a pulvinar ipsum. Maecenas eu justo eu nisl porta maximus rhoncus id massa. Sed sed interdum dolor. Maecenas in convallis tortor, ac auctor tortor. Sed elementum ligula ac odio posuere, ac placerat mi varius. Fusce tincidunt tellus eleifend, dignissim nunc vel, posuere leo. Donec vestibulum ultricies quam, at ullamcorper velit. Sed metus nibh, lobortis et lacinia at, ullamcorper vitae mi. Aenean tempor sem dolor, a dictum nisi posuere non. Curabitur laoreet pretium velit posuere sollicitudin. Sed tincidunt tortor in convallis vestibulum. Nam ac nisl iaculis, semper justo et, sodales elit. Morbi eu laoreet libero. Quisque aliquet turpis nulla, at posuere risus efficitur vel."}/>
    
    <Row className="m-2">
      {cardsData2.map((card, id) => { 
        return(
      <Col md={6} xl={4}>
          <Card>
            <Card.Body>
            {/*  <Card.Img src={require(card.img)}> </Card.Img> */}
            </Card.Body>
          </Card>
      </Col>
      );
    })}  
    </Row>

      
    </div>
  );
};

export default ViewpageLeftSide;
