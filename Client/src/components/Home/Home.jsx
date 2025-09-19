import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.heading}>Library Management App</header>

      <div className={styles.btnBox}>
        <Link to="/NewUser" className={styles.linkBtn}>
          Create User
        </Link>
        <Link to="/BookStore" className={styles.linkBtn}>
          Go to Book Store
        </Link>
      </div>
    </div>
  );
}
