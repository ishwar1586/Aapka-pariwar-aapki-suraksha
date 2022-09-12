import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { renderToString } from "react-dom/server";
import { useForm, useFormState, useFieldArray } from "react-hook-form";
import { GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import { CSVLink, CSVDownload } from "react-csv";
const CommonTask = () => {
  const [show, setShow] = useState(false);
  const [sho, setSho] = useState(false);
  const [value, setvalue] = useState();
 
  const [check, setCheck] = useState({
    Title: "",    
    Description:"",  
    Owner: "",
    TaskType :"",    
    Duedate:"",
    Times:"",
    Outcome:"",
    Mark:"false"
  });
  const [location, setLocation] = useState([]);
  const handleCloses = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleClos = () => {
    setSho(false);
  };
  const handleSho = () => setSho(true);
  const handelValue = (e) => {
    setCheck({ ...check, [e.target.name]: e.target.value });
  };

  const handleClose = () => {
    setLocation(check);
    setShow(false);
  };
  const handleClo = () => {
    // setLocation(check);
    setSho(false);
  };
  const showData = () => {};
 
  return (
    <>
      <section id="ele_ment_lead">
        <div className="card text-white bg-primary mb-3 ">
          <div className="card-body">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="top_lift_corner">
                <label>CommonTask</label>
                <div className="reacts_search_btn">
                <input             
                  icon='search'
                  className="form-control"
                  name="search"
                  placeholder="Search"
                  value={value}
                  onChange={(e)=> setvalue(e.target.value)}          
                />
              </div>
                <Button className="btn btn-primary" onClick={handleShow}>
                  Add New CommonTask
                </Button>
                {/* <Button className='btn btn-primary' onClick={handleSho}>Upload CommonTask</Button> */}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="card">
          <div className="card-body">
            <label className="bottom_lift_corner">
              <h1>Available CommonTask Type List: </h1>
           
            </label>
            <div>
              <div className="row">
                <table className="table" id="table-to-xls">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Id </th>
                      <th scope="col">Title</th>
                      <th scope="col">Due Date</th>
                      <th scope="col">Assigned By</th>
                      <th scope="col">Assigned To</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <td>{location.AssetTypeName}</td>
                    <td>{location.Description}</td>
                    <td>{location.AssetTypeActive}</td>
                    <td>{location.AssetTypeName}</td>
                    <td>{location.Description}</td>
                    <td>{location.AssetTypeActive}</td>
                    <td>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button
                        type="button"
                        name="edit"
                        className="edit_btn_panel"
                        onClick={showData}
                      >
                        <FontAwesomeIcon icon={faPenToSquare}></FontAwesomeIcon>
                      </button>{" "}
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button
                        type="button"
                        name="edit"
                        className="remove_btn_panel"
                        onClick={showData}
                      >
                        <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                      </button>
                    </td>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div>
          <Modal show={show} onHide={handleClo}>
            <Modal.Header className="Header_Modal">
              <GiTakeMyMoney className="Fa_icons" />
              <Modal.Title>Add New CommonTask </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="new_location_modal">
                <label>
                  Title :<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="E-mail"
                  name="Title"
                  value={check.Title} 
                  onChange={handelValue}            
                />
              </div>
              <div className="new_location_modal">
                <label>
                Description :<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Description"
                  name="Description"
                  value={check.Description}
                  onChange={handelValue}             
                />
              </div>
              <div className="new_location_modal">
                <label>
                Owner:<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <select
                  className="form-control"
                  placeholder="Job Title"
                  name="Owner"
                  value={check.Owner}
                  onChange={handelValue}             
                >
                  <option>Select Owner </option>
                          {Array.isArray(Location) &&
                            Location.map((CommonTask, index) => {
                              return <option>{CommonTask}</option>;
                            })}
                  </select>
              </div>
              <div className="new_location_modal">
                <label>
                Task Type:<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <select
                  className="form-control"
                  placeholder="Work Number"
                  name="TaskType"
                  value={check.TaskType} 
                  onChange={handelValue}            
                > <option>Select Task Type </option>
                {Array.isArray(Location) &&
                  Location.map((CommonTask, index) => {
                    return <option>{CommonTask}</option>;
                  })}
                  </select>
              </div>
              <div className="new_location_modal">
                <label>
                Duedate:<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Mobile Number"
                  name="Duedate"
                  value={check.Duedate} 
                  onChange={handelValue}            
                />
              </div>
              <div className="new_location_modal">
                <label>
                Time :<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <input
                  type="time"
                  className="form-control"
                  placeholder="Role"
                  name="Times"
                  value={check.Times}
                  onChange={handelValue}             
                />
                </div>
                <div className="new_location_modal">
                <label>
                Outcome :<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <select
                  type="time"
                  className="form-control"
                  placeholder="Role"
                  name="Outcome"
                  value={check.Outcome}
                  onChange={handelValue}             
                >
                  <option> select Out Come</option>
                  {Array.isArray(Location) &&
                  Location.map((CommonTask, index) => {
                    return <option>{CommonTask}</option>;
                  })}
                </select>
                </div>
                <div className="new_location_modal">
                <input
                  type="checkbox"
                  className="chk_bx"
                  placeholder="Role"
                  name="Mark"
                  value={"true"}
                  onChange={handelValue}             
                />
                <label>Mark</label>                  
                </div>
             
            </Modal.Body>
            <Modal.Footer className="foot_img_type">
              <Button
                type="button"
                className="modal_import_btn"
                onClick={handleClose}
              >
                Add
              </Button>
              <Button
                type="button"
                className="modal_close_btn"
                onClick={handleCloses}
              >
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        {/* <div>
  <Modal show={sho} onHide={handleClos}>
      <Modal.Header>
        <Modal.Title className='Header_Modal'>
        <GiPayMoney className='Fa_icons' />
        Import Asset Type </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className='Targeted_area_modal'>
          <label>Select File(.cvc) </label>
          <div className='Target_upload_modal'>
          <input className='upload' type="file"/>
          </div>
        </div>
        <div className='Targeted_button_modal'>
       
      </div>
      <div className="App">
      <h1>Sample CSV</h1>
      <CSVLink data={data}>
        <button>DownLoad CSV</button>
      </CSVLink>
    </div>
      </Modal.Body>
      <Modal.Footer className='foot_img_type'>
        <Button className='modal_import_btn' onClick={handleClo}>
        Import
        </Button>
        <Button className='modal_close_btn' onClick={handleClos}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </div> */}
      </section>
    </>
  );
};

export default CommonTask;



