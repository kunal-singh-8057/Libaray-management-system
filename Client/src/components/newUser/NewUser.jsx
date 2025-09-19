import styles from "./NewUser.module.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:8080/LMS/User";
export default function NewUser() {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    phone:"",
    email:""
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
       const response = await axios.post(API_URL, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = new FormData(e.target);
      const prop = Object.fromEntries(data.entries());
      prop.apiResponse = response.data.data.id; 
      navigate("/NewUser/Submission",{state: prop});
    } catch (err) {
      if(err.status === 404){
        alert(err.response.data.error.message)
      }
      else if(err.status === 400){
         alert(err.response.data.error.errors);

      }
      else if(err.status === 500){
        alert(err.response.data.error.message);
        console.log(err)  
      }
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.formBox}>
      <form className={styles.userForm} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>Enter Your Details Here</h1>
        <div>
          <label>Enter First Name </label> 
          <input type="text" placeholder="Enter First Name" name="first_name"  onChange={handleChange} required />
        </div>
        <div>
          <label>Enter Last Name </label> 
          <input type="text" placeholder="Enter Last Name" name="last_name"  onChange={handleChange} required />
        </div>
        <div>
          <label>Enter Phone Number </label> 
          <input type="text" placeholder="Phone Number" name="phone"  onChange={handleChange} required />
        </div>
        <div>
          <label>Enter Email </label> 
          <input type="text" placeholder="Enter Email Id" name="email" onChange={handleChange}  required />
        </div>
        <div className={styles.btnBox}>
          <button type="submit" className={styles.linkBtn}>Submit</button>
        </div>
      </form>
    </div>
  );
}
