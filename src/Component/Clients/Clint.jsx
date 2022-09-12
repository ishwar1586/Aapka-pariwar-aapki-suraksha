import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { renderToString } from "react-dom/server";
import { useForm, useFormState, useFieldArray } from "react-hook-form";
import { GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import { CSVLink, CSVDownload } from "react-csv";
const Clients = () => {
  const [show, setShow] = useState(false);
  const [startDate,setStartDate]=useState();
  const [sho, setSho] = useState(false);
  const { register, handleSubmit, control, reset, formState } = useForm();
  const { append, fields, remove, prepend } = useFieldArray({
    control,
    name: "Emailfield",
    name: "AddEmi",
  });
  
   const append7 = () => {
    prepend({
      Email: " ",
    });
  };
  const append6 = () => {
    append({
      EmiAmount: " ",
      EmiDate: " ",
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
                <label>Clients</label>
                <Button className="btn btn-primary" onClick={handleShow}>
                  Add New Clients
                </Button>
                {/* <Button className='btn btn-primary' onClick={handleSho}>Upload Clients</Button> */}
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
              <h1>Available Clients Type List: </h1>
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
                    <th scope="col">Id </th>
                <th scope="col">Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Email</th>
                <th scope="col">products</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <td>{location.AssetTypeName}</td>
                    <td>{location.Description}</td>
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
              <Modal.Title>Add New Clients </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="new_location_modal">
                <label>
                  Deal title :<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  {...register("Dealtitle")}
                  id="fname"
                />
              </div>
              <div className="new_location_modal">
                <label>Deal value:</label>
              </div>
              <div className="new_location">
                <input
                  type="text"
                  className="form-control "
                  placeholder="Last Name"
                  {...register("Dealvalue")}
                />
                </div>
                <div className="che">
                <input
                  type="checkbox"
                  className="form-control"
                  placeholder="First Name"
                  {...register("Includingtax")}
                  id="fname"
                />
                &nbsp;&nbsp;&nbsp;
                <label>Including tax</label>
                </div>

              <div className="new_location_modal">
                <div className="new_location_modal">
                  <label>
                    Token amount :<a className="asd">*</a>{" "}
                  </label>
                </div>
                <div className="new_location_modal">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First Name"
                    {...register("Tokenamount")}
                    id="fname"
                  />
                </div>
                <div className="new_location_modal">
                  <label>
                    Payment mode :<a className="asd">*</a>{" "}
                  </label>
                </div>
                <div className="new_location_modal">
                  <select
                    type="text"
                    className="form-control"
                    placeholder="Last Name"
                    {...register("PaymentMode")}
                  >
                    <option>Choose a value </option>
                    {Array.isArray(Location) &&
                      Location.map((user, index) => {
                        return <option>{user}</option>;
                      })}
                  </select>
                </div>
              </div>

              <div className="new_location_modal">
                <label>
                  Amount received in (Bank name) :<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <select
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  {...register("BankName")}
                >
                  <option>Choose a value </option>
                  {Array.isArray(Location) &&
                    Location.map((user, index) => {
                      return <option>{user}</option>;
                    })}
                </select>
              </div>
              <div className="new_location_modal">
                <label>EMI Amount:</label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="EMI Amount"
                  {...register("EMIAmount")}
                  id="fname"
                />
              </div>
              <div className="new_location_modal">
                <label>EMI Date:</label>
              </div>
              <div className="new_location_modal">
                <input
                  type="date"
                  className="form-control"
                  placeholder="EMI Date"
                  {...register("EMIDate")}
                  id="fname"
                />
              </div>
              {fields.map((item, index) => (
                <>
                  <div className="map" key={item.id}>
                    <div className="new_location_modal">
                      <label>EMI Amount:</label>
                    </div>
                    <div className="new_location_modal">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="EMI Amount"
                        {...register(`AddEmi[${index}].EMIAmount`)}
                        name={`AddEmi[${index}].EMIAmount`}
                        defaultValue={item.EMIAmount}
                        id="fname"
                      />
                    </div>
                    <div className="new_location_modal">
                      <label>EMI Date:</label>
                    </div>
                    <div className="new_location_modal">
                      <input
                        type="date"
                        className="form-control"
                        placeholder="EMI Date"
                        {...register(`AddEmi[${index}].EMIDate`)}
                        name={`AddEmi[${index}].EMIDate`}
                        defaultValue={item.EMIDate}
                        id="fname"
                      />
                    </div>
                    <div className="text-right my_btn_lead">
                      <Button
                        variant="danger"
                        type="submit"
                        className="modal_Remove_btn"
                        onClick={() => remove(index)}
                      >
                        Delete
                      </Button>
                    </div>
                  </div>
                </>
              ))}
              <div className="text-right my_btn_lead">
                <Button variant="success" className="modal_Ad_btn" type="submit" onClick={append6}>
                  Add Field
                </Button>
              </div>
              <br/><br/><br/>
              <div className="new_location_modal">
                <label>Order ID :</label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  {...register("OrderID")}
                  id="fname"
                />
              </div>
              <div className="new_location_modal">
                <label>Order ID :</label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  {...register("OrderID")}
                  id="fname"
                />
              </div>
              <div className="new_location_modal">
                <label>Narration:</label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  {...register("Narration")}
                  id="fname"
                />
              </div>
              <div className="new_location_modal">
                <label>Launch date:</label>
              </div>
              <div className="new_location_modal">
                <input
                  type="date"
                  className="form-control"
                  placeholder="First Name"
                  {...register("Launchdate")}
                  id="fname"
                />
              </div>
              <div className="new_location_modal">
                <label>Deal date:</label>
              </div>
              <div className="new_location_modal">
                <input
                  type="date"
                  className="form-control"
                  placeholder="First Name"
                  {...register("Dealdate")}
                  id="fname"
                />
              </div>
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
                        <div className="text-right my_btn_lead">
                  <Button variant='danger' className="modal_Remove_btn" type="submit" onClick={() => remove(index)}>Delete</Button>
                </div>
                    </div>
                  </>
                ))}
                  <div className="text-right my_btn_lead">
            <Button variant="success" type='submit'className="modal_Ad_btn"  onClick={append7} >
              Add Email
            </Button>
          </div>
          <br/><br/><br/>
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

              <div className="new_location_modal">
                <label>
                Products:<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <select
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  {...register("Products")}
                >
                  <option>Choose a value </option>
                  {Array.isArray(Location) &&
                    Location.map((user, index) => {
                      return <option>{user}</option>;
                    })}
                </select>
              </div>
              <div className="new_location_modal">
                <label>
                Sales Owner :<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <select
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  {...register("SalesOwner")}
                >
                  <option>Choose a value </option>
                  {Array.isArray(Location) &&
                    Location.map((user, index) => {
                      return <option>{user}</option>;
                    })}
                </select>
              </div>
              <div className="new_location_modal">
                <label>
                Source :<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <select
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  {...register("Source")}
                >
                  <option>Choose a value </option>
                  {Array.isArray(Location) &&
                    Location.map((user, index) => {
                      return <option>{user}</option>;
                    })}
                </select>
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

export default Clients;
