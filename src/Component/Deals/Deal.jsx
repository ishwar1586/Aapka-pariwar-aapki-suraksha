import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash,faPenToSquare} from "@fortawesome/free-solid-svg-icons";
import { renderToString } from "react-dom/server";
import { useForm,useFormState,useFieldArray } from 'react-hook-form';
import { GiPayMoney, GiTakeMyMoney } from 'react-icons/gi';
import { CSVLink, CSVDownload } from "react-csv";
const Deals = () => {
  const [show, setShow] = useState(false);
  const [startDate,setStartDate]=useState();
  const [sho, setSho] = useState(false);
  const { register, handleSubmit, control,reset,formState} = useForm();
  const { append, fields, remove } = useFieldArray({
    control,
    name: 'Emailfield'
  })
  const data = [
    { FIRSTNAME: "Alek", LastName: "Tomi", Email: "ah@smthing.co.com" ,OtherEmail:"asd@gmail.com", MobileNo:"9922114520", OtherContactNumber:"8007940056", SalesOwner:"Ranjeet", Dealstage:"Start", Products:"3",Source:"1", Date:"13-01-2021" },
    { FIRSTNAME: "Sam", LastName: "Billing", Email: "sh@smthing.co.com" ,OtherEmail:"asd@gmail.com", MobileNo:"9922114520", OtherContactNumber:"8007940056", SalesOwner:"Ranjeet", Dealstage:"Start", Products:"3",Source:"1", Date:"13-01-2021" },
    { FIRSTNAME: "Methu", LastName: "Tem", Email: "mh@smthing.co.com" ,OtherEmail:"asd@gmail.com", MobileNo:"9922114520", OtherContactNumber:"8007940056", SalesOwner:"Ranjeet", Dealstage:"Start", Products:"3",Source:"1", Date:"13-01-2021" },
    { FIRSTNAME: "Sonal", LastName: "Bomi", Email: "sh@smthing.co.com" ,OtherEmail:"asd@gmail.com", MobileNo:"9922114520", OtherContactNumber:"8007940056", SalesOwner:"Ranjeet", Dealstage:"Start", Products:"3",Source:"1", Date:"13-01-2021" },
    { FIRSTNAME: "Cristal", LastName: "Ong", Email: "ch@smthing.co.com" ,OtherEmail:"asd@gmail.com", MobileNo:"9922114520", OtherContactNumber:"8007940056", SalesOwner:"Ranjeet", Dealstage:"Start", Products:"3",Source:"1", Date:"13-01-2021" },
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
  <div className="card-body">
  <div className="col-lg-12 col-md-12 col-sm-12">
  <div className='top_lift_corner'>
  <label>Deals</label>
  <Button className='btn btn-primary' onClick={handleShow}>Add New Deals</Button>
  {/* <Button className='btn btn-primary' onClick={handleSho}>Upload Deals</Button> */}
      </div>
       </div>
       </div>
  </div><br/><br/>
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

  <label className="bottom_lift_corner"><h1>Available Deals Type  List: </h1>
  <span>[Total:&nbsp;{R}&nbsp;|&nbsp;Active:&nbsp;{T}&nbsp;|&nbsp;InActive:&nbsp;{F}&nbsp;]</span>
   </label>
 <div>

    <div className="row">
          <table className="table" id="table-to-xls">
            <thead className="thead-dark">
              <tr>
              <th scope="col">Id </th>
              <th scope="col">Deal Title</th>
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
                    <td>{location.AssetTypeActive}</td>  
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
  <Modal size="lg" show={show} onHide={handleClo}>
      <Modal.Header  className='Header_Modal'> 
        <GiTakeMyMoney className='Fa_icons'  />
        <Modal.Title>Add New Deals </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
                <label>Deal title :<a className="asd">*</a>  </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  {...register("Dealtitle")}
                  id="fname"
                  />
               </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
              <label>Deal value:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  {...register("Dealvalue")}
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
                <label>Including tax</label>
                <input
                  type="checkbox"
                  className="form-control"
                  placeholder="First Name"
                  {...register("Includingtax")}
                  id="fname"
                  />
               </div>
            </div>
          </div>
      <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
                <label>First Name :<a className="asd">*</a>  </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First Name"
                  {...register("FirstName")}
                  id="fname"
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
                  {...register("LastName")}
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
                  {...register("MobileNo")}
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
                  {...register("OtherContactNo")}
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
                  {...register("Address")}
                  id="fname"
                  />
               </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
              <label>Deal Value:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Deal Value"
                  {...register("DealValue")}
                />
              </div>
            </div>
          </div>
          <div className="row">
         
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
              <label>Sales Owner</label>
                <select
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  {...register("LastName")}
                > 
                 <option>Choose a value </option>
                          {Array.isArray(Location) &&
                            Location.map((user, index) => {
                              return <option>{user}</option>;
                            })}
                </select>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
              <label>Products</label>
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
            </div>
          </div>
          <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
              <label>Source</label>
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
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
              <label>Deal Staqe</label>
                <select
                  type="text"
                  className="form-control"
                  placeholder="Last Name"
                  {...register("DealStaqe")}
                > 
                 <option>Choose a value </option>
                          {Array.isArray(Location) &&
                            Location.map((user, index) => {
                              return <option>{user}</option>;
                            })}
                </select>
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
                  {...register("Date")}
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
                  {...register("Email")}
                />
              </div>
            </div>
            </div>
            {
            fields.map((item,index) =>(
              <>
              <div className='map' key={item.id}>
                <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="new_location_modal">
              <label>E-mail:</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Email Id"
                  {...register("Email")}
                />
              </div>
            </div>
            <div className="text-right my_btn_lead">
                  <Button variant='danger' className="modal_Remove_btn" type="submit" onClick={() => remove(index)}>Delete</Button>
                </div>
            </div>
            </>
            ))}
            <div className="text-right my_btn_lead">
            <Button variant="success" type='submit'className="modal_Add_btn"  onClick={append7} >
              Add Email
            </Button>
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
)
}


export default Deals
