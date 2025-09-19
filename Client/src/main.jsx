import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import NewUser from "./components/newUser/NewUser.jsx";
import SubmissionPage from "./components/newUser/SubmissionPage/SubmissionPage.jsx";
import BookStore from "./components/BookStore/BookStore.jsx";
import ReturnForm from "./components/ReturnForm/ReturnForm.jsx";
import IssueForm from "./components/IssueForm/IssueForm.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/NewUser",
    element: <NewUser />,
  },
  {
    path: "/NewUser/Submission",
    element: <SubmissionPage/>
  },
  {
    path: "/BookStore",
    element: <BookStore/>
  },
  {
    path: "/BookStore/return",
    element: <ReturnForm/>
  },
  {
    path: "/BookStore/issue",
    element: <IssueForm/>
  }

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
