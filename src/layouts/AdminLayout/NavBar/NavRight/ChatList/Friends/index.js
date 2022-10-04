import React, {useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import 'react-bootstrap'
import './styling.css';

const Friends = ({ listOpen }) => {
  const [chatOpen, setChatOpen] = useState(listOpen);
  const [user, setUser] = useState([]);

  useEffect(() => {
    setChatOpen(false);
  }, [listOpen]);

  return (
    <React.Fragment>

      <Container>
          <>    
          <div className="grid2 text-left ">
          <div>
          <label className=" p-1 mt-4 pt-4 headingss">Phase:</label>
          <label className="font-normal text-xl p-1 pt-4 mt-4 subheading">1</label>
          </div>
          
          <div>
          <label className="font-bold text-xl p-1 headingss">Sector:</label>
          <label className="font-normal text-xl p-1 subheading">A</label>
          </div>

          <div>
          <label className="font-bold text-xl p-1 headingss">Category:</label>
          <label className="font-normal text-xl p-1 subheading">Mechanical</label>
          </div>
          
          <div>
          <label className="font-bold text-xl p-1 headingss">User:</label>
          <label className="font-normal text-xl p-1 subheading">Ali Ahmed</label>
          </div>

          <div>
          <label className="font-bold text-xl p-1 headingss">Complaint-ID:</label>
          <label className="font-normal text-xl p-1 subheading">EE-9876</label>
          </div>

          <div>
          <label className="font-extrabold text-xl p-1 headingss">Type:</label>
          <label className="font-normal text-xl p-1 subheading">Transportation</label>
          </div>

          <div>
          <label className="font-bold text-xl p-1 headingss">Location:</label>
          <label className="font-normal text-xl p-1 subheading">Y-Block</label>
          </div>

          <div>
          <label className="font-bold text-xl p-1 headingss">Status:</label>
          <label className="subheading statuss">Completed</label>
          </div>

      
          <div>
          <label className="font-bold text-xl p-1 mt-2 headingss">Start Date:</label>
          <label className="font-normal text-xl p-1 subheading">01/01/2022</label>
          </div>
          <div>
          <label className="font-bold text-xl p-1 headingss">End Date:</label>
          <label className="font-normal text-xl p-1 subheading">02/02/2022</label>
          </div>

          
          </div>
          </>
      </Container>

    </React.Fragment>
  );
};

export default Friends;
