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
const Products = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [sho, setSho] = useState(false);
  const [value, setvalue] = useState();
  let uid = 1;
  let eid = 1;
  const [lead, setLead] = useState({
    Product: "",  CreateUid: "",
    EditUid: "",
    CreateDate: "",
    EditDate: "",
    Id:"0"
 
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
    setLead({ ...lead,[e.target.name]: e.target.value });
  };

  const handleClose = async (e) => {
    e.preventDefault();
    lead.CreateUid = uid;
    lead.EditUid = eid;

    await axios
      .post(`http://13.235.85.235/SafalCr/api/Product/SaveDataProduct`, lead)
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
    navigate("/Products");
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
      .post(`http://13.235.85.235/SafalCr/api/Product/fetchProduct`, {
        Id: 0,
      })
      .then((response) => {
        setLocation(response.data);
        console.log("datalist", response.data);
      })
      .catch((error) => {
        console.log(error);
      });
   
  };

  const Delete = async (id) => {
    console.log("id", id);
    await axios
      .post(`http://13.235.85.235/SafalCr/api/Product/DeleteProduct`, {
        Id: id,
      })
      .then((response) => {
        setLocation(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    loadUsers();
    navigate("/Products");
  };
  const Edit = async (id) => {
    // setCheck(" ");
    console.log("id", id);
    await axios
      .post(`http://13.235.85.235/SafalCr/api/Product/fetchProduct`, {
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
        navigate("/Products");
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
                <label>Products</label>
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
                  Add New Products
                </Button>
                {/* <Button className='btn btn-primary' onClick={handleSho}>Upload Products</Button> */}
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />

        <div className="card">
          <div className="card-body">
            <label className="bottom_lift_corner">
              <h1>Available Products Type List: </h1>
           
            </label>
            <div>
              <div className="row">
                <table className="table" id="table-to-xls">
                  <thead className="thead-dark">
                    <tr>
                      <th scope="col">Serial number </th>
                      <th scope="col">Product</th>
                      <th scope="col">ID</th>
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
                            <td>{user.Product}</td>
                            <td>{user.Id}</td>
                            <td>{user.Status}</td>
                        
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
              <Modal.Title>Add New Products </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="new_location_modal">
                <label>
                Product :<a className="asd">*</a>{" "}
                </label>
              </div>
              <div className="new_location_modal">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Product"
                  name="Product"
                  value={lead.Product                  } 
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

export default Products;




