import styles from "./BookStore.module.css";
import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from "axios";


export default function BookStore() {
  const[data,setData] = useState([]);
  let[currBook,setCurrBook] = useState();

  useEffect(()=>{ 
    async function fetchAllBookData(){
      let allData = await axios.get("http://localhost:8080/LMS/Book");
      setData(allData.data.data);
    }
    fetchAllBookData();
  },[]);
  function inputData(evt){
    setCurrBook(evt.target.value);
  }
  async function getBookData(evt){
    evt.preventDefault();
    console.log(currBook);
    if(currBook == undefined || currBook === '') {
      alert("Enter The Input or Reload the Page....") 
    }
    else{
      let currBookData = await axios.get(`http://localhost:8080/LMS/Book/${currBook}`);
      setData(currBookData.data.data);
    }
  }
  return (
    <div className={styles.bookStore}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Library Management App</h1>
        <form className={styles.searchBox} onSubmit={getBookData}>
          <input type="text" placeholder="Search Book" className={styles.inputBox} onChange={inputData}></input>
          <button className={styles.searchBtn}>Search</button>
        </form>
      </header>
      <main className={styles.bookCards}>
        {data.map((book,idx)=>{
          return (
            <div className={styles.bookCard} key={idx}>
              <p className={styles.bookInfo}><b>Name: </b>  {book.name}</p>
              <p className={styles.bookInfo}><b>Author:</b> {book.author}</p>
              <p className={styles.bookInfo}><b>Isbn: </b>  {book.isbn}</p>
              <p className={styles.bookInfo}><b>Number of copies: </b>  {book.book_copies}</p>
              <p className={styles.bookInfo}><b>category: </b>  {book.category}</p>
            </div>
          )
        })}
      </main>
      <div className={styles.returnBtn}><Link to="/bookStore/return">Return Book</Link></div>
      <div className={styles.issueBook}><Link to="/BookStore/Issue">Issue book</Link></div>
    </div>
  );
}
