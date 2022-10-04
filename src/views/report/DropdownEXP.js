import React from "react";
import Dropdown from "./Common";
import DatePickerr from "./DatePickerr";
import './Dropdowns.css'

const Phase = [
  { label: "Phase 1", value: 1 },

  { label: "Phase 2", value: 2 },

  { label: "Phase 3", value: 3 },

  { label: "Phase 4", value: 4 },

  { label: "Phase 5", value: 5 },

  { label: "Phase 6", value: 6 }
];

const Sector = [
  { label: "Sector A", value: 'A' },

  { label: "Sector B", value: 'B' },

  { label: "Sector C", value: 'C' },

  { label: "Sector D", value: 'D' },

  { label: "Sector E", value: 'E' },

  { label: "Sector F", value: 'F' }
];

const Category = [
  { label: "Admin", value: 11 },

  { label: "Electrical", value: 22 },

  { label: "Mechanical", value: 33 },

  { label: "B&R", value: 44 },

  { label: "Sewerage", value: 55 },

  { label: "Water Supply", value: 66 }
];


const Status = [
  { label: "Completed", value:"completed" },

  { label: "In-process", value: "inprocess"},

  { label: "Pending", value:"pending" },
];

const User = [
  { label: "Ali"},

  { label: "Hamza"},

  { label:"Hassan"},
];


const ComplaintId = [
  { label: "ee01"},

  { label: "m02"},

  { label:"a45"},
];


class DropdownEXP extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      SeletedVal: ""
    };
  }

  handleChange = e => {
    var value = e.target.value;

    this.setState({
      SeletedVal: value
    });
  };

  render() {
    return (

<>

<div className="grid">
    <div>
    <label>Phase:</label>
    <Dropdown
          id={"phase"}
          name={"phase"}
          options={Phase}
          handleChange={this.handleChange}
          selectedValue={this.state.SeletedVal}
    />

    </div>
    
    <div>
    <label>Sector:</label>
      <Dropdown
          id={"sector"}
          name={"sector"}
          options={Sector}
          handleChange={this.handleChange}
          selectedValue={this.state.SeletedVal}
        />
    </div>

    <div>
    <label>Category:</label>
      <Dropdown
          id={"category"}
          name={"category"}
          options={Category}
          handleChange={this.handleChange}
          selectedValue={this.state.SeletedVal}
        />  
    </div>
     
    <div>
    <label>User:</label>
    <Dropdown
      id={"user"}
      name={"user"}
      options={User}
      handleChange={this.handleChange}
      selectedValue={this.state.SeletedVal}
    />
    </div>

    <div>
    <label>Complaint-ID:</label>
      <Dropdown
        id={"complaint-id"}
        name={"complaint-id"}
        options={ComplaintId}
        handleChange={this.handleChange}
        selectedValue={this.state.SeletedVal}
      />
    </div>

    <div>
    <label>Status:</label>
      <Dropdown
        id={"status"}
        name={"status"}
        options={Status}
        handleChange={this.handleChange}
        selectedValue={this.state.SeletedVal}
      />      
    </div>
    </div>
    <div className="datee">
      <DatePickerr/>
    </div>

  
</>
        );
  }
}

export default DropdownEXP;
