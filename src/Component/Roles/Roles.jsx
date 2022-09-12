import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { renderToString } from "react-dom/server";
import { useForm, useFormState, useFieldArray } from "react-hook-form";
import { GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import { CSVLink, CSVDownload } from "react-csv";
const  Roles = () => {
  const [show, setShow] = useState(false);
  const [sho, setSho] = useState(false);
  const [value, setvalue] = useState();
 
  const [check, setCheck] = useState({
    Roles: "",
 
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
                <label> Roles</label>
                <div className="react_search_btn">
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
                  Add New  Roles
                </Button>
                {/* <Button className='btn btn-primary' onClick={handleSho}>Upload  Roles</Button> */}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="card">
          <div className="card-body">
            <label className="bottom_lift_corner">
              <h1>Available  Roles Type List: </h1>
           
            </label>
            <div>
              <div className="row">
                <table className="table" id="table-to-xls">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Id </th>
                      <th scope="col">Role</th>               
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <td>{location.AssetTypeName}</td>
                    <td>{location.Description}</td>               
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
              <Modal.Title>Add New  Roles </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="new_location_modal">
                <label>Roles :<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Roles"
                  name="Roles"
                  value={check.Roles} 
                  onChange={handelValue}            
                />
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

export default  Roles;






