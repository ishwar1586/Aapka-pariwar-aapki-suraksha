import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { renderToString } from "react-dom/server";
import { useForm, useFormState, useFieldArray } from "react-hook-form";
import { GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import { CSVLink, CSVDownload } from "react-csv";
const Accounts = () => {
  const [show, setShow] = useState(false);
  const [sho, setSho] = useState(false);
  const { register, handleSubmit, control, reset, formState } = useForm();
  const { append, fields, remove, prepend } = useFieldArray({
    control,
    name: "Emailfield",
  
  });
  
   const append7 = () => {
    prepend({
      Email: " ",
    });
  };
 
  let count = "";
  const [check, setCheck] = useState({
    AssetTypeName: "",
    Description: "",
    AssetTypeActive: "false",
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
  let T = "";
  let R = "";
  let F = "";
  if (location.AssetTypeActive === "true") {
    T += 1;
    R += 1;
  } else {
    F += 1;
    R += 1;
  }

  return (
    <>
      <section id="ele_ment_lead">
        <div className="card text-white bg-primary mb-3 ">
          <div className="card-body">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <div className="top_lift_corner">
                <label>Accounts</label>
                <Button className="btn btn-primary" onClick={handleShow}>
                  Add New Accounts
                </Button>
                {/* <Button className='btn btn-primary' onClick={handleSho}>Upload Accounts</Button> */}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="card">
          <div className="card-body">
            <label className="bottom_lift_corner">
              <h1>Available Accounts Type List: </h1>
              <span>
                [Total:&nbsp;{R}&nbsp;|&nbsp;Active:&nbsp;{T}
                &nbsp;|&nbsp;InActive:&nbsp;{F}&nbsp;]
              </span>
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
              <Modal.Title>Add New Accounts </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="new_location_modal">
                <label>First Name *</label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  {...register("FirstName")}
                  id="fname"
                />
              </div>
              <div className="new_location_modal">
                <label>Last Name:</label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  {...register("LastName")}
                  id="fname"
                />
              </div>
              
              <div className="new_location_modal">
                <label>Company</label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  {...register("Company")}
                  id="fname"
                />
              </div>
              <div className="new_location_modal">
                <label>Domain</label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  {...register("Domain")}
                  id="fname"
                />
              </div>
              <div className="new_location_modal">
                <label>GST No.</label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="GST no"
                  {...register("Gstno")}
                  id="fname"
                />
              </div>
              <div className="new_location_modal">
                <label>PAN no</label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="PAN no"
                  {...register("Panno")}
                  id="fname"
                />
              </div>
              <div className="new_location_modal">
                    <label>E-mail:</label>
                    </div>
                    <div className="new_location_modal">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Email Id"
                      {...register("Email")}
                    />
                  </div>
                 {fields.map((item, index) => (
                  <>
                    <div className="map" key={item.id}>
                    <div className="new_location_modal">
                    <label>E-mail:</label>
                    </div>
                    <div className="new_location_modal">
                    <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Email Id"
                            {...register(`Emailfield[${index}].Email`)}
                            name={`Emailfield[${index}].Email`}
                            defaultValue={item.Email}
                          />
                        </div>                     
                        <div className="new_location_modal">
                        <Button
                          variant="danger"
                          type="submit"
                          onClick={() => remove(index)}
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  </>
                ))}
                <div className="text-right my_btn_lead">
                  <Button variant="success" type="submit" onClick={append7}>
                    AddField
                  </Button>
                </div>
                <div className="new_location_modal">
                <label>Mobile No*</label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile No"
                  {...register("MobileNo")}
                  id="fname"
                />
              </div>
              <div className="new_location_modal">
                <label>Other Contact No</label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Other Contact No"
                  {...register("OtherContactNo")}
                  id="fname"
                />
              </div>
              <div className="new_location_modal">
                <label>Address</label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  {...register("Address")}
                  id="fname"
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

export default Accounts;


