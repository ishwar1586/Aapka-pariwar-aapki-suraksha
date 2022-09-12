import React, { useState,useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { renderToString } from "react-dom/server";
import { GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import { CSVLink, CSVDownload } from "react-csv";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Clients = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [startDate,setStartDate]=useState();
  const [sho, setSho] = useState(false);
const[lead,setLead]=useState({Id: "0",
DealTitle: "",
DealValue: "0",
IncludingTax: "",
TokenAmount: "",
PaymentMode: "",
BankName: '',
EMIAmount: '',
EMIDate: '',
OrderID: '',
Narration: '',
LaunchDate: '',
DealDate: '',
FirstName: '',
LastName: '',
Company: '',
Domain: '',
GSTNo: '',
PANNo: '',
Email: '',
MobileNo: '',
OtherContactNo: '',
Address: '',
Products: '',
SalesOwner: '',
Source: '',
CreateUid: '',
CreateDate: '',
EditUid: '',
EditDate: ''})
let uid = 1;
let eid = 1;

  const [check, setCheck] = useState({
    AssetTypeName: "",
    Description: "",
    AssetTypeActive: "false",
  });
  const [location, setLocation] = useState([]);
  const [location1, setLocation1] = useState([]);
  const handleCloses = () => {
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleClos = () => {
    setSho(false);
  };
  const handleSho = () => setSho(true);
  const handelValue = (e) => {
    setLead({ ...lead, [e.target.name]: e.target.value });
  };

  const handleClose = async (e) => {
    e.preventDefault();
    lead.CreateUid = uid;
    lead.EditUid = eid;

    await axios
      .post(`http://13.235.85.235/SafalCr/api/Client/SaveDataClient`, lead)
      .then((response) => {
        //  setLocation(response.data);
        console.log("datalist", response.data);
        // setLead({LocationID:"0",LocationCode:"",LocationName:"",CreateUid:"",EditUid:"",IsActive:"false"})
      })
      .catch((error) => {
        console.log(error);
      });
    loadUsers();

    setShow(false);
    //  setCheck({LocationID:"0",LocationCode:"",LocationName:"",CreateUid:"",EditUid:"",IsActive:"false"})
    navigate("/Clients");
  };
  const handleClo = () => {
    // setLocation(check);
    setSho(false);
  };
  const showData = () => {};
  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    await axios
      .post(`http://13.235.85.235/SafalCr/api/Client/fetchClient`, {
        Id: 0,
      })
      .then((response) => {
        setLocation(response.data);
        console.log("datalist", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    await axios
      .post(`http://13.235.85.235/SafalCr/api/Product/fetchProduct`, {
        Id: 0,
      })
      .then((response) => {
        setLocation1(response.data);
        console.log("datalist", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const Delete = async (id) => {
    console.log("id", id);
    await axios
      .post(`http://13.235.85.235/SafalCr/api/Client/DeleteClient`, {
        Id: id,
      })
      .then((response) => {
        setLocation(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    loadUsers();
    navigate("/Clients");
  };
  const Edit = async (id) => {
    // setCheck(" ");
    console.log("id", id);
    await axios
      .post(`http://13.235.85.235/SafalCr/api/Client/fetchClient`, {
        ID: id,
      })
      .then((response) => {
        console.log("Editbihar", response.data);
        let res = response.data;
        let resp = "";
        res.map((re) => (resp = re));
        setLead(resp);
        console.log("EditDataDeals", res);
        handleShow();
        navigate("/Clients");
      })
      .catch((error) => {
        console.log("Edit", error);
      });
    loadUsers();
  };
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
                  {Array.isArray(location) &&
                    location.map((user, index) => {
                      return (
                        <>
                          <tr key={user.id}>
                            <td>{(index += 1)}</td>
                            <td>{user.FirstName}</td>
                            <td>{user.MobileNo}</td>
                            <td>{user.Email}</td>
                            <td>{user.Products}</td>
                            <td>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <button
                                type="button"
                                name="edit"
                                className="edit_btn_panel"
                                onClick={() => Edit(user.Id)}
                              >
                                <FontAwesomeIcon
                                  icon={faPenToSquare}
                                ></FontAwesomeIcon>
                              </button>{" "}
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              <button
                                type="button"
                                name="delete"
                                className="remove_btn_panel"
                                onClick={() => Delete(user.Id)}
                              >
                                <FontAwesomeIcon
                                  icon={faTrash}
                                ></FontAwesomeIcon>
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
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
                  placeholder="Deal Title"
                  name="DealTitle"
                  value={lead.DealTitle}
                  onChange={handelValue}
                  id="fname"
                />
              </div>
              <div className="new_location_modal">
                <label>Deal value:</label>
              </div>
              <div className="new_location">
                <input
                  type="number"
                  className="form-control "
                  placeholder="0.00"
                  name="DealValue"
                  value={lead.DealValue}
                  onChange={handelValue}
                />
                </div>
                <div className="che">
                <input
                  type="checkbox"
                  className="form-control"
                  placeholder="First Name"
                  name="IncludingTax"
                  value={lead.IncludingTax}
                  onChange={handelValue}
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
                    type="number"
                    className="form-control"
                    placeholder="0.00"
                    name="TokenAmount"
                    value={lead.TokenAmount}
                    onChange={handelValue}
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
                    type="number"
                    className="form-control"
                    placeholder="Last Name"
                    name="PaymentMode"
                    value={lead.PaymentMode}
                    onChange={handelValue}
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
                  type="number"
                  className="form-control"
                  placeholder="Last Name"
                  name="BankName"
                  value={lead.BankName}
                  onChange={handelValue}
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
                  type="number"
                  className="form-control"
                  placeholder="EMI Amount"
                  name="EMIAmount"
                  value={lead.EMIAmount}
                  onChange={handelValue}
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
                  name="EMIDate"
                  value={lead.EMIDate}
                  onChange={handelValue}
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
                  placeholder="OrderID"
                  name="OrderID"
                  value={lead.OrderID}
                  onChange={handelValue}
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
                  placeholder="Narration"
                  name="Narration"
                  value={lead.Narration}
                  onChange={handelValue}
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
                  name="LaunchDate"
                  value={lead.LaunchDate}
                  onChange={handelValue}
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
                  name="DealDate"
                  value={lead.DealDate}
                  onChange={handelValue}
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
                  name="FirstName"
                  value={lead.FirstName}
                  onChange={handelValue}
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
                  placeholder="Last Name"
                  name="LastName"
                  value={lead.LastName}
                  onChange={handelValue}
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
                  placeholder="Company"
                  name="Company"
                  value={lead.Company}
                  onChange={handelValue}
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
                  placeholder="Domain"
                  name="Domain"
                  value={lead.Domain}
                  onChange={handelValue}
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
                  name="GSTNo"
                  value={lead.GSTNo}
                  onChange={handelValue}
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
                  name="PANNo"
                  value={lead.PANNo}
                  onChange={handelValue}
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
                      name="Email"
                      value={lead.Email}
                      onChange={handelValue}
                    />
                  </div>
            
                <div className="new_location_modal">
                <label>Mobile No*</label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile No"
                  name="MobileNo"
                  value={lead.MobileNo}
                  onChange={handelValue}
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
                  name="OtherContactNo"
                  value={lead.OtherContactNo}
                  onChange={handelValue}
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
                  value={lead.Address}
                  onChange={handelValue}
                  name="Address"
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
                  type="number"
                  className="form-control"
                  placeholder="Products"
                  value={lead.Products}
                  onChange={handelValue}
                  name="Products"
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
                  type="number"
                  className="form-control"
                  placeholder="Last Name"
                  name="SalesOwner"
                  value={lead.SalesOwner}
                  onChange={handelValue}
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
                  type="number"
                  className="form-control"
                  placeholder="Last Name"
                  name="Source"
                  value={lead.Source}
                  onChange={handelValue}
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
