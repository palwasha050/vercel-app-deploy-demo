import React, { useEffect, useState } from 'react';
import { Alert, Button, Modal, ModalTitle } from 'react-bootstrap'
import axios from 'axios'
import PhotoUpload from './PhotoUpload';


const Officer = () => {
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
    
    const [officername, setOfficername] = useState("")
    const [password, setPassword] = useState("")
    const [isMoible, setIsMoible] = useState(true)
    const [officerID, setOfficerID] = useState("")
    
    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const [id,setId] = useState("");


    
    function GetEmployeeData(){

        let one =
        "http://localhost:4000/post";
        let two =
        "http://localhost:4000/officer";

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
        const url = 'http://localhost:4000/post'
        const Credentials = { officerID, officername, password, isMoible }
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
        const url = `http://localhost:4000/post/${id}`
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
        const url = `http://localhost:4000/post/${id}`
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
                        Add New Officer
                    </Button>
                </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Post</th>
                                <th>Officer</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Data.map((item) =>
                                <tr key={item._id}>
                                    <td>{}</td>
                                    <td>{}</td>
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
                        <Modal.Title>View Officer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>
                                
                                <label>Post</label>
                                <input type="text" className='form-control' value={RowData.sectorName} readOnly />
                                <label>Officer</label>
                                <input type="text" className='form-control' value={RowData.sectorName} readOnly />
                                <label>Officername</label>
                                <input type="text" className='form-control' value={RowData.sectorName} readOnly />


                            </div>
                            
                            
                            {
                                Delete && (
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete} >Delete Officer</Button>
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
                        <Modal.Title>Add new Officer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        <div>
                            
                            <div className='form-group'>
                                
                            
                            <label>Post</label>

                            <select name="phaseID" id="phaseID"  className='form-control'
                            onChange={(e) => {setPhaseID(e.target.value)}}>

                            {Data2.map((data) => (

                            <option value={data._id}>{data.postName}</option>

                            ))}


                            </select>

                            <label>Officer Name</label>
                            <input type="text" className='form-control' onChange={(e) => setsectorName(e.target.value)} placeholder="Enter Officer Name" />

                            <label>Upload Photo</label>
                            <PhotoUpload/>
                            
                            <label>CNIC #</label>
                            <input type="text" className='form-control' onChange={(e) => setsectorName(e.target.value)} placeholder="Enter CNIC #" />

                            <label>DHA #</label>
                            <input type="text" className='form-control' onChange={(e) => setsectorName(e.target.value)} placeholder="Enter DHA #" />

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
                        <Modal.Title>Edit Officer</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className='form-group'>

                            <label>Post</label>

                            <select name="phaseID" id="phaseID"  className='form-control'
                            onChange={(e) => {setPhaseID(e.target.value)}}>

                            {Data2.map((data) => (

                            <option value={data._id}>{data.postName}</option>

                            ))}


                            </select>

                            <label>Officer Name</label>
                            <input type="text" className='form-control' onChange={(e) => setsectorName(e.target.value)} placeholder="Enter Officer Name" defaultValue={RowData.sectorName}/>

                            <label>Upload Photo</label>
                            <PhotoUpload/>

                            <label>CNIC #</label>
                            <input type="text" className='form-control' onChange={(e) => setsectorName(e.target.value)} placeholder="Enter CNIC #" />

                            <label>DHA #</label>
                            <input type="text" className='form-control' onChange={(e) => setsectorName(e.target.value)} placeholder="Enter DHA #" />

                            
                            </div>
                            
                            <Button type='submit' className='btn btn-warning mt-4' onClick={handleEdit}>Edit Officer</Button>
                        
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

export default Officer;