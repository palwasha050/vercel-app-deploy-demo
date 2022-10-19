import React, { useEffect, useState } from 'react';
import { Alert, Button, Modal, ModalTitle } from 'react-bootstrap'
import axios from 'axios'


const Sector = () => {
    const [Data, setData] = useState([]);
    const [Data2, setData2] = useState([]);
    
    const [RowData, SetRowData] = useState([])
    const [ViewShow, SetViewShow] = useState(false)
    const handleViewShow = () => { SetViewShow(true) }
    const hanldeViewClose = () => { SetViewShow(false) }
    //FOr Edit Model
    const [ViewEdit, SetEditShow] = useState(false)
    const handleEditShow = () => { SetEditShow(true) }
    const hanldeEditClose = () => { SetEditShow(false) }
    //FOr Delete Model
    const [ViewDelete, SetDeleteShow] = useState(false)
    const handleDeleteShow = () => { SetDeleteShow(true) }
    const hanldeDeleteClose = () => { SetDeleteShow(false) }
    //FOr Add New Data Model
    const [ViewPost, SetPostShow] = useState(false)
    const handlePostShow = () => { SetPostShow(true) }
    const hanldePostClose = () => { SetPostShow(false) }

    //Define here local state that store the form Data
    const [sectorName, setsectorName] = useState("")
    const [phaseName, setPhaseName] = useState("")
    const [phaseID, setPhaseID] = useState("")
    
    
    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const [id,setId] = useState("");


    
    function GetEmployeeData(){

        let one =
        "http://localhost:4000/sector";
        let two =
        "http://localhost:4000/phase";

            //here we will get all phase data

            const requestOne = axios.get(one);
            const requestTwo = axios.get(two);
            
            
            axios
            .all([requestOne, requestTwo])
            .then(
            axios.spread((...responses) => {
                const responseOne = responses[0];
                const responseTwo = responses[1];
                setData(responseOne.data[0].docs)
                setData2(responseTwo.data[0].docs)

                // use/access the results
                console.log(responseOne.data[0].docs);
                console.log(responseTwo.data[0].docs);
                
            })
            )
            .catch(errors => {
            // react on errors.
            console.error(errors);
            });
}
    

    const handleSubmite = (e) => {
        e.preventDefault();
        const url = 'http://localhost:4000/sector'
        const Credentials = { sectorName,phaseName,phaseID }
        axios.post(url, Credentials)
            .then(response => {
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    const handleEdit = (e) =>{
        e.preventDefault();
        const url = `http://localhost:4000/sector/${id}`
        console.log("url:",url)
        console.log("PhaseID:",phaseID)
        const Credentials = { sectorName,phaseID }
        axios.patch(url, Credentials)
            .then(response => {
                    window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleDelete = (e) =>{
        e.preventDefault();
        const url = `http://localhost:4000/sector/${id}`
        axios.delete(url)
            .then(response => {
                    window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    
    useEffect(() => {
        GetEmployeeData();
    }, [])
    

    return (
        <div>
            <div className='row'>
                <div className='mt-5 mb-4'>
                    <Button variant='primary' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                        Add New Sector
                    </Button>
                </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Phase</th>
                                <th>Sector</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{item.phase[0]?.phaseName}</td>
                                    <td>{item.sectorName}</td>
                                    <td style={{ minWidth: 190 }}>
                                        <Button size='sm' variant='primary' onClick={() => { handleViewShow(SetRowData(item)) }}>View</Button>|
                                        <Button size='sm' variant='warning' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id))}} >Edit</Button>|
                                        <Button size='sm' variant='danger' onClick={() => {handleViewShow(SetRowData(item),setId(item._id), setDelete(true))}}>Delete</Button>|
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>


            <div className='model-box-view'>
                <Modal
                    show={ViewShow}
                    onHide={hanldeViewClose}
                    backdrop="static"
                    keyboard={false}
                >

                    <Modal.Header closeButton>
                        <Modal.Title>View Sector</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                
                                <label>Phase</label>
                                <input type="text" className='form-control' value={RowData.sectorName} readOnly />
                                <label>Sector</label>
                                <input type="text" className='form-control' value={RowData.sectorName} readOnly />

                            </div>
                            
                            
                            {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete} >Delete Sector</Button>
                                )
                            }

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeViewClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>

            <div className='model-box-view'>
                <Modal
                    show={ViewPost}
                    onHide={hanldePostClose}
                    backdrop="static"
                    keyboard={false}>

                    <Modal.Header closeButton>
                        <Modal.Title>Add new Sector</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        <div>
                            
                            <div className='form-group'>
                                
                                <select name="phaseID" id="phaseID"  className='form-control' onChange={(e) => {setPhaseID(e.target.value)}}>
                                {Data2.map((data) => (
                                <option value={data._id}>{data.phaseName}</option>
                                ))}
                                </select>  

                                <input type="text" className='form-control' onChange={(e) => setsectorName(e.target.value)} placeholder="Enter Sector" />
                                
                            </div>

                            <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmite}>Add Sector</Button>
                        </div>

                    </Modal.Body>
                    <Modal.Footer> 
                        <Button variant='secondary' onClick={hanldePostClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>

            <div className='model-box-view'>
                <Modal
                    show={ViewEdit}
                    onHide={hanldeEditClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Sector</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>

                                <label>Phase</label>

                                <select name="phaseID" id="phaseID"  className='form-control'
                                onChange={(e) => {setPhaseID(e.target.value)}}>
                                
                                {Data2.map((data) => (
                                
                                <option value={data._id}>{data.phaseName}</option>

                                ))}

                                
                                </select>

                                <label>Sector</label>
                                <input type="text" className='form-control' onChange={(e) => setsectorName(e.target.value)} placeholder="Enter Sector" defaultValue={RowData.sectorName}/>
                            </div>
                            
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit Sector</Button>
                        
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary' onClick={hanldeEditClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    );
};

export default Sector;