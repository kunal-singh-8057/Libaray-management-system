import styles from "./IssueForm.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link} from "react-router-dom";

const API_URL = "http://localhost:8080/LMS/LoanBook/issue";

export default function IssueForm() {
  const [formData, setFormData] = useState({
    id: "",
    isbn: "",
    dueDate:""
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Full form data:", formData);
    try {
       const response = await axios.post(API_URL, formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response);
      navigate("/BookStore");
      alert("Book Is Issued!");
    } catch (err) {
      if(err.status === 404){
        alert(err.response.data.error.message)
      }
      else if(err.status === 400){
         alert(err.response.data.error.errors);

      }
      console.log(err)
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
      <form className={styles.issueForm} onSubmit={handleSubmit}>
        <h1 className={styles.heading}>Book Issue Form</h1>
        <div>
          <label>Enter User Id</label>
          <input
            type="number"
            placeholder="Enter User_Id"
            name="id"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Enter Book isBn Number</label>
          <input
            type="text"
            placeholder="Enter Book isBn"
            name="isbn"
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Enter Due Date</label>
          <input
            type="date"
            placeholder="Enter Due Date"
            name="dueDate"
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.btnBox}>
          <button type="submit" className={styles.linkBtn}>Issue Book</button>
          &nbsp; &nbsp;<Link to="/BookStore" className={styles.linkBtn}>Back</Link>
        </div>
      </form>
    </div>
  );
}
