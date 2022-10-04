import React from "react";
import MUIDataTable from "mui-datatables";
import {IoEye} from 'react-icons/io5';
import { Link } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import Alert from '@mui/material/Alert';
import ViewPage from "../viewpage/Viewpage";

const DTable=()=>{
    const columns = [
      {
        name: "User",
        options: {
          filter: false
        }
      },
      {
        name: "Phase",
        options: {
          filter: true
        }
      },


      {
        name: "Sector",
        options: {
          filter: true
        }
      },
      {
        name: "Category",
        options: {
          filter: true
        }
      },
      {
        name: "Type",
        options: {
          filter: false
        }
      },
      {
        name: "Location",
        options: {
          filter: true
        }
      },
      {
        name: "Date",
        options: {
          filter: false
        }
      },
      
      {
        name: "ID",
        options: {
          filter: false
        }
      },
      {
        name: "status",
        options: {
          filter: true,
          customBodyRender:(value,tableMeta,updateValue) => {
              if(value === 'In-process')
              return (
                    <Tooltip>
                            <Alert severity="info">In-Process</Alert>
                    </Tooltip>
              )
              else if(value === 'Pending')
                  return (
                    <Tooltip>
                            <Alert severity="error">Pending</Alert>
                    </Tooltip>
              )
              else
                   return (
                    <Tooltip>
                            <Alert severity="success">Completed</Alert>
                    </Tooltip>
              )
              
          }
        }
      },
      {
        name: "Action",
        options: {
          filter: true,
          customBodyRender:() => {
            return (
              <span style={{"marginLeft":"30px"}} ><IoEye size={30} className='cursor-pointer' onClick={() => window.open('/app/viewpage', '_blank')} /></span>
            );

          }
        }
      }
    ];

    const data = [
      ["Palwasha",1, "A", "Electrical","Service","abc","20/06/2022",1,"In-process", false],
      ["Palwasha",1, "A", "Electrical","Service","abc","20/06/2022",1,"Completed", false],
      ["Palwasha",1, "A", "Electrical","Service","abc","20/06/2022",1,"Pending", false],
      ["Palwasha",1, "A", "Electrical","Service","abc","20/06/2022",1,"In-process", false],
      ["Palwasha",1, "A", "Electrical","Service","abc","20/06/2022",1,"In-process", false],
      ["Palwasha",1, "A", "Electrical","Service","abc","20/06/2022",1,"In-process", false],
      ["Palwasha",1, "A", "Electrical","Service","abc","20/06/2022",1,"In-process", false],
      ["Palwasha",1, "A", "Electrical","Service","abc","20/06/2022",1,"In-process", false],
      ["Palwasha",1, "A", "Electrical","Service","abc","20/06/2022",1,"In-process", false],
      ["Palwasha",1, "A", "Electrical","Service","abc","20/06/2022",1,"In-process", false],
      ["Palwasha",1, "A", "Electrical","Service","abc","20/06/2022",1,"In-process", false],
      ["Palwasha",1, "A", "Electrical","Service","abc","20/06/2022",1,"In-process", false],
      ["Palwasha",1, "A", "Electrical","Service","abc","20/06/2022",1,"In-process", false],
      ["Palwasha",1, "A", "Electrical","Service","abc","20/06/2022",1,"In-process", false],
      ["Palwasha",1, "A", "Electrical","Service","abc","20/06/2022",1,"In-process", false],
      ["Palwasha",1, "A", "Electrical","Service","abc","20/06/2022",1,"In-process", false],
      
    ];

    const options = {
      filter: true,
      filterType: "dropdown",
      responsive: "scroll"
    };

    const makeStyle=(status)=>{
      if(status === 'In-process')
      {
        return {
          background: 'rgb(145 254 159 / 47%)',
          color: 'green',
        }
      }
      else if(status === 'Pending')
      {
        return{
          background: '#ffadad8f',
          color: 'red',
        }
      }
      else{
        return{
          background: '#59bfff',
          color: 'white',
        }
      }
    }
    

    return (
      <MUIDataTable
        title={"Reports"}
        data={data}
        columns={columns}
        options={options}
      />
    );
  }

export default DTable;
