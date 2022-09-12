import React, { useState,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { renderToString } from "react-dom/server";
import { GiPayMoney, GiTakeMyMoney } from 'react-icons/gi';
import { CSVLink, CSVDownload } from "react-csv";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
const Leads = () => {
  const navigate = useNavigate();
  const [lead,setLead]=useState({FirstName:"", LastName:"", MobileNo:"", OtherContactNo:"",
  Address:"", DealValue:"0", IncludingTax:"false", SalesOwner:"", LeadStage:"",
  Products:"", Source:"", Message:"", Date:"", Email:"",ID:"0",CreateUid:"",EditUid:"",CreateDate:"",EditDate:""
})
  const [startDate,setStartDate]=useState();
  const [show, setShow] = useState(false);
  const [sho, setSho] = useState(false);
 
  // const onChange=(e)=>{
  //   setDate(e.target.value);

  // }
  const asdws = new Date()

  const data = [
    {FirstName:"Sam", LastName:"Billing", MobileNo:"9922114520", OtherContactNo:"9822114520",Address:"New Delhi", DealValue:"20000", IncludingTax:"1200", SalesOwner:"Ranjeet", LeadStage:"ok",Products:"Book", Source:"1", Message:"Perfect", Date:"13-01-2021", Email:"sh@smthing.co.com",},
    {FirstName:"Methu", LastName:"Tem", MobileNo:"9922114520", OtherContactNo:"9822114520",Address:"New Delhi", DealValue:"20000", IncludingTax:"1200", SalesOwner:"Ranjeet", LeadStage:"ok",Products:"Book", Source:"1", Message:"Perfect", Date:"13-01-2021", Email:"sh@smthing.co.com",},
    {FirstName:"Sonal", LastName:"Bomi", MobileNo:"9922114520", OtherContactNo:"9822114520",Address:"New Delhi", DealValue:"20000", IncludingTax:"1200", SalesOwner:"Ranjeet", LeadStage:"ok",Products:"Book", Source:"1", Message:"Perfect", Date:"13-01-2021", Email:"sh@smthing.co.com",},
    {FirstName:"Cristal", LastName:"Ong", MobileNo:"9922114520", OtherContactNo:"9822114520",Address:"New Delhi", DealValue:"20000", IncludingTax:"1200", SalesOwner:"Ranjeet", LeadStage:"ok",Products:"Book", Source:"1", Message:"Perfect", Date:"13-01-2021", Email:"sh@smthing.co.com",},
    {FirstName:"Dai", LastName:"Fasfet", MobileNo:"9922114520", OtherContactNo:"9822114520",Address:"New Delhi", DealValue:"20000", IncludingTax:"1200", SalesOwner:"Ranjeet", LeadStage:"ok",Products:"Book", Source:"1", Message:"Perfect", Date:"13-01-2021", Email:"sh@smthing.co.com",},
      ];
  let uid=1;
  let eid=1;

const [location, setLocation] = useState([]);
const [location1, setLocation1] = useState([]);
  const handleCloses = () => {setShow(false)};
  const handleShow = () => setShow(true);
  const handleClos = () => {setSho(false)};
  const handleSho = () => setSho(true);
  const handelValue=(e)=>{
      setLead({...lead,[e.target.name]:e.target.value})        
            }

  const handleClose = async(e) => {
    e.preventDefault();
    lead.CreateUid=uid;
    lead.EditUid=eid;

  await axios
  .post(`http://13.235.85.235/SafalCr/api/Leads/SaveDataLeads`,lead).then((response) => {
        //  setLocation(response.data);
        console.log("datalist",response.data)
        // setLead({LocationID:"0",LocationCode:"",LocationName:"",CreateUid:"",EditUid:"",IsActive:"false"})
  }).catch(error => {
    console.log(error);
  });
  loadUsers();
 
  setShow(false)
//  setCheck({LocationID:"0",LocationCode:"",LocationName:"",CreateUid:"",EditUid:"",IsActive:"false"})
  navigate("/Leads");

};
const handleClo = () => {
  
  // setLocation(check);
  setSho(false)

};

useEffect(() => {
  loadUsers();
  }, []);
const loadUsers = async () => {
  await axios
   .post(`http://13.235.85.235/SafalCr/api/Leads/fetchLeads`,{
   ID:0
        }).then((response) => {
          setLocation(response.data);
         console.log("datalist",response.data)
   }).catch(error => {
     console.log(error);
   });
   await axios
   .post(`http://13.235.85.235/SafalCr/api/Product/fetchProduct`,{
    Id:0
   }).then((response) => {
          setLocation1(response.data);
         console.log("datalist",response.data)
   }).catch(error => {
     console.log(error);
   });
  }

  const Delete= async (id) =>{
    console.log("id",id)
   await axios
    .post(`http://13.235.85.235/SafalCr/api/Leads/DeleteLeads`,{
     ID:id
    }).then((response) => {
      setLocation(response.data);
    }).catch(error => {
      console.log(error);
    });   
    loadUsers();
    navigate("/Leads");
      }
      const Edit= async (id) =>{
        // setCheck(" ");
        console.log("id",id)
       await axios
        .post(`http://13.235.85.235/SafalCr/api/Leads/fetchLeads`,{
         ID:id
        }).then((response) => {
          console.log("Editbihar",response.data);
          let res=response.data
          let resp=""
          res.map((re)=>resp=re)
          setLead(resp);
          console.log("EditData",resp)
          handleShow();
          navigate("/Leads");
        }).catch(error => {
          console.log("Edit",error);
            });   
        loadUsers();
       
          }

  return (
    <>
    <section id="ele_ment_lead">
   <div className="card text-white bg-primary mb-3 ">
  <div className="card-body">
  <div className="col-lg-12 col-md-12 col-sm-12">
  <div className='top_lift_corner'>
  <label>Leads</label>
  <Button className='btn btn-primary' onClick={handleShow}>Add New Leads</Button>
  <Button className='btn btn-primary' onClick={handleSho}>Upload Leads</Button>
      </div>
       </div>
       </div>
  </div><br/><br/>
  {/* <div className="card text-white bg-primary mb-3 "> */}
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


    <div className="row">
          <table className="table" id="table-to-xls">
            <thead className="thead-dark">
              <tr>
              <th scope="col">Id </th>
                <th scope="col">Name</th>
                <th scope="col">Mobile</th>
                <th scope="col">Email</th>
                <th scope="col">Lead Stage</th>
               <th scope="col">Sales Owner</th>
               <th scope="col">Action</th>

              </tr>
            </thead>
            <tbody> 
            {Array.isArray(location)&&location.map((user, index) => {
                      return (   
                        <>
                    <tr key={user.id}> 
                    <td>{index +=1}</td>
                    <td>{user.FirstName}</td>
                    <td>{user.MobileNo}</td>       
                    <td>{user.Email}</td>
                    <td>{user.LeadStage}</td>    
                    <td>{user.SalesOwner}</td>    
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" name="edit" className="edit_btn_panel"  onClick={()=>Edit (user.ID)}>
                      <FontAwesomeIcon icon={ faPenToSquare }></FontAwesomeIcon>
                    </button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" name="delete" className="remove_btn_panel"  onClick={()=>Delete (user.ID)}>
                    <FontAwesomeIcon icon={ faTrash }></FontAwesomeIcon>
                    </button> 
                    </td>
                    </tr>   
                     </> );
                      })}
            </tbody>
          </table>
        </div>
   </div>
  </div>

 
 
  <div>
  <Modal size="lg" show={show} onHide={handleClo}>
      <Modal.Header  className='Header_Modal'> 
        <GiTakeMyMoney className='Fa_icons'  />
        <Modal.Title>Add New Leads </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
                <label>First Name :<a className="asd">*</a>  </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  name="FirstName"
                  id="fname"
                 value={lead.FirstName}
                 onChange={handelValue}
                  />
               </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
              <label>Last Name:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  name="LastName"
                 value={lead.LastName}
                 onChange={handelValue}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
                <label>Mobile No :<a className="asd">*</a>  </label>
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
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
              <label>Other Contact No</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Other Contact No"
                  name="OtherContactNo"
                 value={lead.OtherContactNo}
                 onChange={handelValue}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
                <label>Address : </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  name="Address"
                  id="fname"
                 value={lead.Address}
                 onChange={handelValue}
                  />
               </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
              <label>Deal Value:</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="0.00"
                  name="DealValue"
                 value={lead.DealValue}
                 onChange={handelValue}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
                <label>Including tax</label>
                <input
                  type="checkbox"
                  className="form-control"
                  placeholder="First Name"
                  name="IncludingTax"
                 value="true"
                 onChange={handelValue}
                  id="fname"
                  />
               </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
              <label>Sales Owner</label>
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
                              return <option value={user.ID}>{user.SalesOwner}</option>;
                            })}
                </select>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
              <label>Lead Stage</label>
                <select
                  type="number"
                  className="form-control"
                  placeholder="Last Name"
                  name="LeadStage"
                 value={lead.LeadStage}
                 onChange={handelValue}
                > 
                 <option>Choose a value </option>
                          {Array.isArray(Location) &&
                            Location.map((user, index) => {
                              return <option value={user.ID}>{user.LeadStage}</option>;
                            })}
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
              <label>Products</label>
                <select
                  type="number"
                  className="form-control"
                  placeholder="Last Name"
                  name="Products"
                 value={lead.Products}
                 onChange={handelValue}
                > 
                 <option>Choose a value </option>
                          {Array.isArray(Location) &&
                            Location.map((user, index) => {
                              return <option value={user.Id}>{user.Products}</option>;
                            })}
                </select>
              </div>
            </div>
          </div>
          <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
              <label>Source</label>
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
                              return <option value={user.Id}>{user.Source}</option>;
                            })}
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
              <label>Message</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Message"
                  name="Message"
                 value={lead.Message}
                 onChange={handelValue}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
                <label>Date:<a className="asd">*</a>  </label>
                <input
                  type="date"
                  className="form-control"
                  placeholder="date"
                  name="Date"
                 value={lead.Date}
                 onChange={handelValue}
                  id="fname"
                  />
               </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
              <label>E-mail:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email Id"
                  name="Email"
                  value={lead.Email}
                  onChange={handelValue}
                />
              </div>
            </div>
            </div>
           
        
      
      </Modal.Body>
      <Modal.Footer className='foot_img_type'>
        <Button type="button" className="modal_import_btn"  onClick={handleClose}>
          Add
        </Button>
        <Button type="button" className="modal_close_btn"  onClick={handleCloses}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </div>
  <div>
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
  </div>
  </section>
  </>
)
}


export default Leads