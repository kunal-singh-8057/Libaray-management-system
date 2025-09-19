import styles from "./SubmissionPage.module.css";
import { Link, useLocation } from "react-router-dom";

export default function SubmissionPage() {
  const location = useLocation();
  const userData = location.state;

  if (!userData) {
    return <p className={styles.noData}>No data received</p>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.submissionCard}>
        <h1 className={styles.heading}>Account Created Successfully!</h1>
        <p className={styles.submissionText}>
          Thank you, <strong>{userData.first_name} {userData.last_name}</strong>.<br/>
          Your account has been created successfully.<br/>
          <span className={styles.userId}>User ID: {userData.apiResponse}</span>
        </p>

        <Link to="/BookStore" className={styles.linkBtn}>
          Go To Book Store
        </Link>
      </div>
    </div>
  );
}
