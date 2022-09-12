import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { renderToString } from "react-dom/server";
import { useForm, useFormState, useFieldArray } from "react-hook-form";
import { GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import { CSVLink, CSVDownload } from "react-csv";
const  Accessibility = () => {
  const [show, setShow] = useState(false);
  const [sho, setSho] = useState(false);
 
  const [check, setCheck] = useState({
    User: " ",Dashboard:"false",Leads:"false",Users:"false",Roles:"false",Accessibility:"false",Territories:"false",
    Deals:"false",LostDeals:"false",Clients:"false",Services:"false",Leadstages:"false",Leadsources:"false",Commontask:"false",
    UnqualifieldLead:"false",Products:"false",Account:"false",PaymentHistory:"false",InvoiceHistory:"false",Renewals:"false",RenewalService:"false",
 
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
                <label> Accessibility</label>
                <Button className="btn btn-primary" onClick={handleShow}>
                  Add New  Accessibility
                </Button>
                {/* <Button className='btn btn-primary' onClick={handleSho}>Upload  Accessibility</Button> */}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="card">
          <div className="card-body">
            <label className="bottom_lift_corner">
              <h1>Available  Accessibility Type List: </h1>
           
            </label>
            <div>
              <div className="row">
                <table className="table" id="table-to-xls">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Asset Type </th>
                      <th scope="col">Description</th>
                      <th scope="col">Is Active</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
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
              <Modal.Title>Add New  Accessibility </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="new_location_modal">
                <label>Select User :<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <select
             
                  className="form-control"
                  placeholder="Accessibility"
                  name="Accessibility"
                  value={check.Accessibility} 
                  onChange={handelValue}            
                >
                  <option>Select User </option>
                          {Array.isArray(Location) &&
                            Location.map((user, index) => {
                              return <option>{user}</option>;
                            })}
                  </select>
              </div>
              <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="Dashboard"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Dashboard</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="Leads"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Leads</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="Users"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Users</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="Roles"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Roles</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="Accessibility"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Accessibility</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="Territories"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Territories</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="Deals"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Deals</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="LostDeals"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Lost Deals</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="Clients"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Clients</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="Services"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Services</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="Leadstages"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Lead stages</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="Leadsources"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Lead sources</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="Commontask"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Common task</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="UnqualifieldLead"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Unqualifield Lead</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="Products"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Products</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="Account"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Account</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="PaymentHistory"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Payment History</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="InvoiceHistory"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Invoice History</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="Renewals"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Renewals</label>
                </div>
                <div className="new_location_modal">
                <input
                type="checkbox"
                className='chk_bx'
                  placeholder="Accessibility"
                  name="RenewalService"
                  value="true"
                  onChange={handelValue}     
                />
                <label>Renewal Service</label>
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

export default  Accessibility;








