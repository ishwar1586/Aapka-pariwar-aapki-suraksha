import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { renderToString } from "react-dom/server";
import { useForm, useFormState, useFieldArray } from "react-hook-form";
import { GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import { CSVLink, CSVDownload } from "react-csv";
const Renewals
 = () => {
  const [show, setShow] = useState(false);
  const [sho, setSho] = useState(false);
  const [startDate,setStartDate]=useState();
  const [check, setCheck] = useState({
    Serivename:"",Amount:"",

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
                <label>Renewals
</label>
                <Button className="btn btn-primary" onClick={handleShow}>
                  Add New Renewals

                </Button>
                {/* <Button className='btn btn-primary' onClick={handleSho}>Upload Renewals
</Button> */}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="card-body">
  <div className="col-lg-12 col-md-12 col-sm-12">
  <div className='top_lift_corner'>
  <label>From</label> 
  <label className='to-space'>To</label>
  </div>
  <input
              // selected={asdws}
              type="date"
              onChange={(e) => setStartDate(e.target.value)}
              name="startDate"
              formate="dd-mm-yyyy"
             placeholder="24-05-2022"
              value={startDate}
                        />
      <input
              // selected={asdws}
              type="date"
              onChange={(e) => setStartDate(e.target.value)}
              name="startDate"
              formate="dd-mm-yyyy"
              defaultValue="24-05-2022"
              value={startDate}
              className="to-space1"
                        />
  <Button className='btn btn-primary Search' onClick={handleShow}>Search</Button>
  <Button className='btn btn-primary Export' onClick={handleSho}>Export</Button>
     
       </div>
       </div>
  <br/><br/>
        <div className="card">
          <div className="card-body">
            <label className="bottom_lift_corner">
              <h1>Available Renewals
 Type List: </h1>
           
            </label>
            <div>
              <div className="row">
                <table className="table" id="table-to-xls">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Id </th>
                      <th scope="col">Client</th>
                      <th scope="col">Product</th>
                      <th scope="col">Services</th>
                      <th scope="col">Renewal Amount</th>
                      <th scope="col">Renewal Date</th>
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
              <Modal.Title>Add New Renewals
 </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="new_location_modal">
                <label>Client name :<a className="asd">*</a>
                </label>
              </div>
              <div className="new_location_modal">
              <select
                 className="form-control"
                  placeholder="Serive name"
                  name="Client"
                  value={check.Client } 
                  onChange={handelValue}            
                >
                  <option> Select Client</option>
                    {Array.isArray(Location) &&
                      Location.map((user, index) => {
                        return <option>{user}</option>;
                      })}
                </select>
              </div>
              <div className="new_location_modal">
                <label>Product:<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
              <select
                 className="form-control"
                  placeholder="Serive name"
                  name="Product"
                  value={check.Product } 
                  onChange={handelValue}            
                >
                  <option> Select Product</option>
                    {Array.isArray(Location) &&
                      Location.map((user, index) => {
                        return <option>{user}</option>;
                      })}
                </select>
              </div>
              <div className="new_location_modal">
                <label>Serive name :<a className="asd">*</a>
                </label>
              </div>
              <div className="new_location_modal">
                <select
                 className="form-control"
                  placeholder="Serive name"
                  name="Serivename"
                  value={check.Serivename } 
                  onChange={handelValue}            
                >
                  <option> Select Serive name</option>
                    {Array.isArray(Location) &&
                      Location.map((user, index) => {
                        return <option>{user}</option>;
                      })}
                </select>
              </div>
              <div className="new_location_modal">
                <label>Service Start Date:<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <input
                  type="date"
                  className="form-control"
                  placeholder="Amount"
                  name="ServiceStartDate"
                  value={check.ServiceStartDate}
                  onChange={handelValue}             
                />
              </div>
              <div className="new_location_modal">
                <label>Renewal Amount* :<a className="asd">*</a>
                </label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Serive name"
                  name="RenewalAmount"
                  value={check.RenewalAmount } 
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

export default Renewals
;




