import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { renderToString } from "react-dom/server";
import { useForm,useFormState,useFieldArray } from 'react-hook-form';
import { GiPayMoney, GiTakeMyMoney } from 'react-icons/gi';
import { CSVLink, CSVDownload } from "react-csv";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

const UnqualifiedLead = () => {
  const [startDate,setStartDate]=useState();
  const [show, setShow] = useState(false);
  const [sho, setSho] = useState(false);
  const { register, handleSubmit, control,reset,formState} = useForm();
  const { append, fields, remove } = useFieldArray({
    control,
    name: 'Emailfield'
  })
  // const onChange=(e)=>{
  //   setDate(e.target.value);

  // }
  const asdws = new Date()

  const data = [
    { FIRSTNAME: "Alek", LastName: "Tomi", Email: "ah@smthing.co.com" ,OtherEmail:"asd@gmail.com", MobileNo:"9922114520", OtherContactNumber:"8007940056", SalesOwner:"Ranjeet", LeadStage:"Start", Products:"3",Source:"1", Date:"13-01-2021" },
    { FIRSTNAME: "Sam", LastName: "Billing", Email: "sh@smthing.co.com" ,OtherEmail:"asd@gmail.com", MobileNo:"9922114520", OtherContactNumber:"8007940056", SalesOwner:"Ranjeet", LeadStage:"Start", Products:"3",Source:"1", Date:"13-01-2021" },
    { FIRSTNAME: "Methu", LastName: "Tem", Email: "mh@smthing.co.com" ,OtherEmail:"asd@gmail.com", MobileNo:"9922114520", OtherContactNumber:"8007940056", SalesOwner:"Ranjeet", LeadStage:"Start", Products:"3",Source:"1", Date:"13-01-2021" },
    { FIRSTNAME: "Sonal", LastName: "Bomi", Email: "sh@smthing.co.com" ,OtherEmail:"asd@gmail.com", MobileNo:"9922114520", OtherContactNumber:"8007940056", SalesOwner:"Ranjeet", LeadStage:"Start", Products:"3",Source:"1", Date:"13-01-2021" },
    { FIRSTNAME: "Cristal", LastName: "Ong", Email: "ch@smthing.co.com" ,OtherEmail:"asd@gmail.com", MobileNo:"9922114520", OtherContactNumber:"8007940056", SalesOwner:"Ranjeet", LeadStage:"Start", Products:"3",Source:"1", Date:"13-01-2021" },
  ];
  const append7 = () => {
    append({
      Email: " "  
    });
  }
  let count ="";
  const [check, setCheck] = useState({AssetTypeName:"",Description:"",AssetTypeActive:"false",});
const [location, setLocation] = useState([]);
  const handleCloses = () => {setShow(false)};
  const handleShow = () => setShow(true);
  const handleClos = () => {setSho(false)};
  const handleSho = () => setSho(true);
  const handelValue=(e)=>{
      setCheck({...check,[e.target.name]:e.target.value})        
            }

    // const handval=(e)=>{
    //   setDate(e.target.value);

    // }  
const handleClose = () => {
  
  setLocation(check);
  setShow(false)

};
const handleClo = () => {
  
  // setLocation(check);
  setSho(false)

};
const showData=()=>{

}
let T="";
let R="";
let F="";
if(location.AssetTypeActive==="true")
{
  T +=1
  R +=1
}
else{
  F +=1
  R +=1
}
  
  return (
    <>
    <section id="ele_ment_lead">
   <div className="card text-white bg-primary mb-3 ">
  {/* <div className="card-body">
  <div className="col-lg-12 col-md-12 col-sm-12">
  <div className='top_lift_corner'>
  <label>UnqualifiedLead</label>
  <Button className='btn btn-primary' onClick={handleShow}>Add New Leads</Button>
  <Button className='btn btn-primary' onClick={handleSho}>Upload Leads</Button>
      </div>
       </div>
       </div> */}
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

  <label className="bottom_lift_corner"><h1>Available Leads Type  List: </h1>
  <span>[Total:&nbsp;{R}&nbsp;|&nbsp;Active:&nbsp;{T}&nbsp;|&nbsp;InActive:&nbsp;{F}&nbsp;]</span>
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
                    <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" name="edit" className="edit_btn_panel"  onClick={showData}>
                      <FontAwesomeIcon icon={ faPenToSquare }></FontAwesomeIcon>
                    </button> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button type="button" name="edit" className="remove_btn_panel"  onClick={showData}>
                    <FontAwesomeIcon icon={ faTrash }></FontAwesomeIcon>
                    </button> 
                    </td>
            </tbody>
          </table>
        </div>
   </div>
  </div>
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

export default UnqualifiedLead