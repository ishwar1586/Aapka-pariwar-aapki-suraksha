import React, { useState,useEffect} from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { renderToString } from "react-dom/server";
import { useForm, useFormState, useFieldArray } from "react-hook-form";
import { GiPayMoney, GiTakeMyMoney } from "react-icons/gi";
import { CSVLink, CSVDownload } from "react-csv";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const User = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [sho, setSho] = useState(false);
 
  const [check, setCheck] = useState({Id: "0",
    Email: "",
    FullName:"",  
    JobTitle: "",
    WorkNumber:"",
    MobileNumber:"",
    Role:"",
    CreateUid: '',
CreateDate: '',
EditUid: '',
EditDate: ''
  });
  let uid = 1;
let eid = 1;
  const [value, setvalue] = useState();
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
    setCheck({ ...check, [e.target.name]: e.target.value });
  };

  const handleClose = async (e) => {
    e.preventDefault();
    check.CreateUid = uid;
    check.EditUid = eid;

    await axios
      .post(`http://13.235.85.235/SafalCr/api/Users/SaveDataUsers`, check)
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
      .post(`http://13.235.85.235/SafalCr/api/Users/fetchUsers`, {
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
      .post(`http://13.235.85.235/SafalCr/api/Users/fetchUsers`, {
        ID: id,
      })
      .then((response) => {
        console.log("Editbihar", response.data);
        let res = response.data;
        let resp = "";
        res.map((re) => (resp = re));
        setCheck(resp);
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
                <label>User</label>
                <div className="react_search_btn">
                <input
                  // type="text"
                  icon='search'
                  className="form-control"
                  name="search"
                  placeholder="Search"
                  value={value}
                  onChange={(e)=> setvalue(e.target.value)}
                  // onClick={handleSearch}
                />
              </div>
                <Button className="btn btn-primary" onClick={handleShow}>
                  Add New User
                </Button>
                {/* <Button className='btn btn-primary' onClick={handleSho}>Upload User</Button> */}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="card">
          <div className="card-body">
            <label className="bottom_lift_corner">
              <h1>Available User Type List: </h1>
           
            </label>
            <div>
              <div className="row">
                <table className="table" id="table-to-xls">
                  <thead className="thead-dark">
                    <tr>
                    <th scope="col">Serial number </th>
                      <th scope="col">Name</th>
                      <th scope="col">Role</th>
                      <th scope="col">ID</th>
                      <th scope="col">Email</th>
                      <th scope="col">Last Login</th>
                      <th scope="col">Status</th>
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
                            <td>{user.FullName}</td>
                            <td>{user.Role}</td>
                            <td>{user.Id}</td>
                            <td>{user.Email}</td>
                            <td>{user.MobileNo}</td>
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
              <Modal.Title>Add New User </Modal.Title>
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
                  placeholder="E-mail"
                  name="Email"
                  value={check.Email} 
                  onChange={handelValue}            
                />
              </div>
              <div className="new_location_modal">
                <label>
                Full Name :<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  name="FullName"
                  value={check.FullName}
                  onChange={handelValue}             
                />
              </div>
              <div className="new_location_modal">
                <label>
                Job Title :<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Job Title"
                  name="JobTitle"
                  value={check.JobTitle}
                  onChange={handelValue}             
                />
              </div>
              <div className="new_location_modal">
                <label>
                Work Number:<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Work Number"
                  name="WorkNumber"
                  value={check.WorkNumber} 
                  onChange={handelValue}            
                />
              </div>
              <div className="new_location_modal">
                <label>
                Mobile Number :<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Mobile Number"
                  name="MobileNumber"
                  value={check.MobileNumber} 
                  onChange={handelValue}            
                />
              </div>
              <div className="new_location_modal">
                <label>
                Role :<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <select
                  type="text"
                  className="form-control"
                  placeholder="Role"
                  name="Role"
                  value={check.Role}
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

export default User;


