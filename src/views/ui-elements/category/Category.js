import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap'
import axios from 'axios'
import { Dropdown } from 'bootstrap';
import { Multiselect } from "multiselect-react-dropdown";
import Select from 'react-select'



const Category = () => {
    const [Data, setData] = useState([]);
    const [Data2, setData2] = useState([]);
    const [Data3, setData3] = useState([]);
    const [phaseTable, setPhaseTable] = useState([]);
    

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
    const [categoryName, setCategoryName] = useState("")
    const [phaseName, setPhaseName] = useState("")
    const [phaseID, setPhaseID] = useState([])
    
    
    const [Delete,setDelete] = useState(false)
    //Id for update record and Delete
    const [id,setId] = useState("");


    const dropDownOpt = Data2.map((response) => ({
        "value" : response._id,
        "label" : response.phaseName
    }))



    function GetEmployeeData(){

        let two =
        "http://localhost:4000/phase";
        let three =
        "http://localhost:4000/category";

            //here we will get all phase data

            const requestTwo = axios.get(two);
            const requestThree = axios.get(three);
            
            axios
            .all([requestTwo,requestThree])
            .then(
            axios.spread((...responses) => {
                const responseTwo = responses[0];
                const responseThree=responses[1];

                console.log("phase")
                setData2(responseTwo.data[0].docs)
                console.log(Data2)
                console.log(responseTwo.data[0].docs)
                setData3(responseThree.data[0].docs)
                console.log(responseThree.data[0].docs)
            })
            )
            .catch(errors => {
            // react on errors.
            console.error(errors);
            });
}


    const handleSubmite = (e) => {
        e.preventDefault();
        const url = 'http://localhost:4000/category'
        const Credentials = { categoryName,phaseName,phaseID }
        axios.post(url, Credentials)
            .then(response => {
                window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }
    
    const handleEdit = () =>{
        const url = `http://localhost:4000/category/${id}`
        const Credentials = { categoryName , phaseName,phaseID }
        axios.patch(url, Credentials)
            .then(response => {
                    window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleDelete = () =>{
        const url = `http://localhost:4000/category/${id}`
        axios.delete(url)
            .then(response => {
                    window.location.reload()
            })
            .catch(err => {
                console.log(err)
            })
    }

    
    function deleteUser(id) {
        axios.delete(`http://localhost:4000/category/${id}`).then(window.location.reload()).catch(err => {
            console.log(err)
        });
    }

      
    useEffect(() => {
        GetEmployeeData();
    }, [])
    

    return (
        <div>
            <div className='row'>
                <div className='mt-5 mb-4'>
                    <Button variant='primary' onClick={() => { handlePostShow() }}><i className='fa fa-plu'></i>
                        Add New Category
                    </Button>
                </div>
            </div>
            <div className='row'>
                <div className='table-responsive'>
                    <table className='table table-striped table-hover table-bordered'>
                        <thead>
                            <tr>
                                <th>Phase</th>
                                <th>Category</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        {Data3.map((item) =>
                        
                        <tbody>
                                    {item.phaseID.map((d)=>

                                    <>
                                    
                                     <tr key={item._id}>
                                     <td>{item.phase[0]?.phaseName}</td>

                                     <td>{item.categoryName}</td>

                                    <td style={{ minWidth: 190 }}>
                                    
                                        <Button size='sm' variant='primary' onClick={() => { handleViewShow(SetRowData(item)) }}>View</Button>|
                                        <Button size='sm' variant='warning' onClick={()=> {handleEditShow(SetRowData(item),setId(item._id))}} >Edit</Button>|
                                        <Button size='sm' variant='danger' onClick={()=>deleteUser(item.id)}>Delete</Button>|
                                    
                                    </td>
                                    
                                    </tr>
                                    
                                    </>
                                    
                                    )}

                                
                        </tbody>
                        
                        )}
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
                                    <Button type='submit' className='btn btn-danger mt-4' onClick={handleDelete} >Delete Category</Button>
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
                        <Modal.Title>Add new Category</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>


                        <div>
                            
                            <div className='form-group'>
                                
                                 


                                <label for="phaseID">Choose Phase:</label>
                                
     

                                <Select 
                                options={dropDownOpt} 
                                onChange={(e)=>setPhaseID(e.target.value)}
                                isMulti
                                />
                                
                                 
                                <div>{phaseID}</div>
                                
                           

                                <input type="text" className='form-control' onChange={(e) => setCategoryName(e.target.value)} placeholder="Enter Category" />
                                
                            </div>

                            <Button type='submit' className='btn btn-success mt-4' onClick={handleSubmite}>Add Category</Button>
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
                        <Modal.Title>Edit Category</Modal.Title>
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

                                <label>Category</label>
                                <input type="text" className='form-control' onChange={(e) => setCategoryName(e.target.value)} placeholder="Enter Category" defaultValue={RowData.categoryName}/>
                            
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

export default Category;